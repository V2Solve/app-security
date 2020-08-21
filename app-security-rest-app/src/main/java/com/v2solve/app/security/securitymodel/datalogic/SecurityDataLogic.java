package com.v2solve.app.security.securitymodel.datalogic;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Path;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.security.crypto.password.PasswordEncoder;

import javax.persistence.criteria.CriteriaBuilder.In;

import com.v2solve.app.security.model.entities.Application;
import com.v2solve.app.security.model.entities.BasicAuthClient;
import com.v2solve.app.security.model.entities.Client;
import com.v2solve.app.security.model.entities.ClientGroup;
import com.v2solve.app.security.model.entities.ClientGroupMembership;
import com.v2solve.app.security.model.entities.ClientGroupRole;
import com.v2solve.app.security.model.entities.ClientRole;
import com.v2solve.app.security.model.entities.ClientRolePermission;
import com.v2solve.app.security.model.entities.ResourceDomain;
import com.v2solve.app.security.model.entities.RoleScope;
import com.v2solve.app.security.restmodel.PagingInformation;
import com.v2solve.app.security.restmodel.request.CreateBasicAuthClientRequest;
import com.v2solve.app.security.restmodel.request.DeleteBasicAuthClientRequest;
import com.v2solve.app.security.restmodel.request.SearchBasicAuthClientRequest;
import com.v2solve.app.security.sdk.SecurityActions;
import com.v2solve.app.security.sdk.SecurityResources;
import com.v2solve.app.security.securitymodel.AppClient;
import com.v2solve.app.security.securitymodel.AppSecurityContextImpl;
import com.v2solve.app.security.securitymodel.Domain;
import com.v2solve.app.security.securitymodel.Permit;
import com.v2solve.app.security.securitymodel.PermitKey;
import com.v2solve.app.security.securitymodel.Scope;
import com.v2solve.app.security.securitymodel.AppSecurityContext;
import com.v2solve.app.security.utility.JPAUtils;
import com.v2solve.app.security.utility.StringUtils;



/**
 * This is a part of the data access layer which creates a client security context by reading the information
 * about the client from the security database.
 * @author Saurin Magiawala
 *
 */
public class SecurityDataLogic 
{
	/**
	 * Returns a populated security Model 
	 * @param em
	 * @param clientIdentifier
	 * @return
	 */
	public static AppSecurityContext readAppSecurityContextForClient (EntityManager em, String clientIdentifier)
	{
		List<String> additionalRoles = null;
		return readAppSecurityContextForClient(em, clientIdentifier,additionalRoles);
	}

	
	/**
	 * Creates a ClientSecurityContext object for the client identifier. if additional groups are provided, they are included as if client was a part of that group.
	 * @param em
	 * @param clientIdentifier
	 * @param additionalGroups - additional Groups to be included as groups assigned to the client.  
	 * @return
	 */
	static AppSecurityContext createAppSecurityContextForClient (EntityManager em, String clientIdentifier,List<String> additionalGroups)
	{
		CriteriaBuilder cb = em.getCriteriaBuilder();
		CriteriaQuery<Client> cq = cb.createQuery(Client.class);
		Root<Client> root = cq.from(Client.class);
		cq.select(root);
		
		Path<String> ciPath = root.get("clientIdentifier");
		Predicate ci = cb.equal(ciPath, clientIdentifier);
		cq.where(ci);
		
		TypedQuery<Client> tq = em.createQuery(cq);
		
		List<Client> clients = tq.getResultList();
		if (clients == null || clients.isEmpty())
		{
			List<Permit> permissions = new ArrayList<>();
			AppClient ac = new AppClient(clientIdentifier, "Not in System", null);
			AppSecurityContextImpl asci=new AppSecurityContextImpl(ac, permissions);
			return asci;		// Lets just return an empty permission security context, the client is not in the system.
			// throw new DataLogicValidationException("Client: " + clientIdentifier + " not found.");
		}
		else if (clients.size() > 1)
			throw new DataLogicValidationException("Multiple clients: " + clientIdentifier + " found !");
		
		Client c = clients.get(0);
		
		List<Permit> listOfPermissions = new ArrayList<>();
		
		// This is a domain map which is created...
		HashMap<String, Domain> domainMap = new HashMap<>();
		
		// lets get the GroupMemberships..
		List<ClientGroupMembership> clientGroups = c.getClientGroupMemberships();
		
		List<ClientGroup> theClientGroups = new ArrayList<>();
		
		if (clientGroups != null)
		{
			for (ClientGroupMembership cgm: clientGroups)
			{
				theClientGroups.add(cgm.getClientGroup());
			}
		}
		
		// Lets also see if additional Groups are available..
		if (additionalGroups != null && additionalGroups.isEmpty()==false)
		{
			CriteriaBuilder gcb = em.getCriteriaBuilder();
			CriteriaQuery<ClientGroup> gcq = gcb.createQuery(ClientGroup.class);
			Root<ClientGroup> groot = gcq.from(ClientGroup.class);
			gcq.select(groot);
			
			// Where Clause
			Path<String> namePath = groot.get("name");
			In<String> inClause = gcb.in(namePath);
			Predicate gname = JPAUtils.buildInvalues(inClause, additionalGroups);
			gcq.where(gname);
			
			// Create Query.
			TypedQuery<ClientGroup> tcgq = em.createQuery(gcq);
			
			// Get Result.
			List<ClientGroup>  listOfAdditionalGroups = tcgq.getResultList();
			
			// Add to the Group.
			theClientGroups.addAll(listOfAdditionalGroups);
		}
		
		if (theClientGroups != null && !theClientGroups.isEmpty())
		{
			for (ClientGroup cg: theClientGroups)
			{
				String groupName = cg.getName();
				
				// Lets get the Roles for this Group..
				List<ClientGroupRole> clientGroupRoles = cg.getClientGroupRoles();
				
				if (clientGroupRoles != null)
				{
					for (ClientGroupRole cgr : clientGroupRoles)
					{
						boolean propogate = cgr.getPropogate();
						ClientRole cr = cgr.getClientRole();
						String roleName = cr.getName();
						ResourceDomain rd = cgr.getResourceDomain();
						Domain roleDomain = updateDomainMap(domainMap, rd);
						String appIdentifier = null;
						
						List<ClientRolePermission> clientRolePermissions =  cr.getClientRolePermissions();
						
						if (clientRolePermissions != null && !clientRolePermissions.isEmpty())
						{
							for (ClientRolePermission crp : clientRolePermissions)
							{
								Scope scope = null;
								RoleScope rs  = crp.getRoleScope();

								if (rs != null)
								{
									appIdentifier = rs.getApplication()==null?null:rs.getApplication().getAppIdentifier();
									scope = new Scope(rs.getName(),rs.getScopeType().getName(), rs.getScopeValue(),rs.getDescription(),appIdentifier);
								}
								
								String action   = crp.getPermission().getAction().getName();
								String resource = crp.getPermission().getResource().getName();
								String permissionValue = crp.getValue().toLowerCase();
								boolean allowed = permissionValue.startsWith("allow") || permissionValue.contains("allow");
								
								PermitKey pKey = new PermitKey(action,resource);
								Permit permit = new Permit(pKey,allowed,roleDomain,roleName,groupName,scope,propogate);
								listOfPermissions.add(permit);
							}
						}
					}
				}
			}
		}
		
		// At this point, the root level permission and the domain level permissions because of the roles is available.
		// Lets detach the client.
		String appIdentifier = null;
		if (c.getApplication() != null)
			appIdentifier = c.getApplication().getAppIdentifier();
		
		AppClient ac = new AppClient(c.getClientIdentifier(),c.getDescription(),appIdentifier);
		
		AppSecurityContextImpl asc = new AppSecurityContextImpl(ac,listOfPermissions);
		
		return asc;
	}
	
	
	/**
	 * Returns a populated security Model 
	 * @param em
	 * @param clientIdentifier  - the unique client identifier in the system.
	 * @param additionalGroups   - additional roles that need to be assumed. Note that client must have a permission of allow ASSUME GROUPS
	 * @return
	 */
	public static AppSecurityContext readAppSecurityContextForClient (EntityManager em, String clientIdentifier,List<String> additionalGroups)
	{
		// Lets create a security context for the client without passing any external groups first..
		AppSecurityContext asc = createAppSecurityContextForClient(em, clientIdentifier, null);
		
		if (additionalGroups != null && !additionalGroups .isEmpty())
		{
			// Okay so there are additional groups that this person is assumed to have.. lets see if this client has appropriate rights
			if (asc.hasPermission(SecurityActions.ASSUME, SecurityResources.CLIENT_GROUP))
			{
				// Okay so it does have permission to assume groups, in that case, lets create it again with those roles..
				asc = createAppSecurityContextForClient(em, clientIdentifier, additionalGroups);
			}
		}
		
		return asc;
	}
	
	
	
	static Domain add(Domain d,ResourceDomain rd)
	{
		if (d == null)
			d = new Domain(rd.getName(),rd.getResourceDomainType().getName());
		else
			d.addChildDomain(new Domain(rd.getName(),rd.getResourceDomainType().getName()));
		
		List<ResourceDomain> children = rd.getResourceDomains();
		
		if (children != null && children.isEmpty()==false)
		{
			for (ResourceDomain childDomain: children)
				add(d,childDomain);
		}
		
		return d;
	}
	
	/**
	 * Updates the domain map, and returns the fully updated domain map.
	 * @param domainMap
	 * @param rd
	 * @return
	 */
	static Domain updateDomainMap (HashMap<String, Domain> domainMap,ResourceDomain rd)
	{
		if (rd == null)
			return null;
		
		if (domainMap.containsKey(rd.getName()))
			return domainMap.get(rd.getName());
		
		Domain d = add(null,rd);
		domainMap.put(rd.getName(),d);
		return d;
	}


	public static BasicAuthClient createBasicAuthClient(EntityManager em, CreateBasicAuthClientRequest request,PasswordEncoder encoder) 
	{
		// Lets check if an app identifier has been provided or not..
		Application app = null;
		String appIdentifier = request.getAppIdentifier();
		
		if (!StringUtils.isNullOrZeroLength(appIdentifier))
		{
			app = DatalogicUtils.findObject(em, Application.class, "appIdentifier", appIdentifier);
		}
		
		BasicAuthClient objToCreate = new BasicAuthClient();
		objToCreate.setName(request.getName());
		objToCreate.setEnabled(request.isEnabled());
		objToCreate.setUserPassword(encoder.encode(request.getPassword()));
		if (app != null)
		objToCreate.setApplication(app);
		JPAUtils.createObject(em, objToCreate);
		return objToCreate;
	}

	public static BasicAuthClient deleteBasicAuthClient(EntityManager em, DeleteBasicAuthClientRequest request) 
	{
		BasicAuthClient deletedObj = null;
		List<BasicAuthClient> listOfObjects = JPAUtils.findObjects(em, BasicAuthClient.class, "name", request.getName()); 
				
		if (listOfObjects != null && listOfObjects.isEmpty()==false)
		{
			for (BasicAuthClient obj : listOfObjects)
			{
				deletedObj = JPAUtils.deleteObject(em, obj.getId(), BasicAuthClient.class);
				if (deletedObj == null)
					throw new DataLogicValidationException("Could not deleted the record: " + request.getName());
			}
		}
		
		return deletedObj;
	}
	
	
	
	public static List<BasicAuthClient> searchBasicAuthClients(EntityManager em, SearchBasicAuthClientRequest request,
			List<String> limitingAppDomains) 
	{
		CriteriaBuilder cb = em.getCriteriaBuilder();
		CriteriaQuery<BasicAuthClient> cq = cb.createQuery(BasicAuthClient.class);
		Root<BasicAuthClient> root = cq.from(BasicAuthClient.class);
		cq.select(root);
		
		Predicate finalPredicate = null;
		
		Predicate namePC = null;
		
		if (!StringUtils.isNullOrZeroLength(request.getName()))
		{
			Path<String> namePath = root.get("name");
			namePC = cb.like(namePath, "%"+request.getName()+"%");
			finalPredicate = namePC;
		}
		
		finalPredicate = DatalogicUtils.addLimitingClauseForApps(cb, limitingAppDomains, root, DatalogicUtils.APP_RELATIONSHIP_PROPERTY, DatalogicUtils.APP_IDENTIFIER_PROPERTY,finalPredicate);
		
		if (finalPredicate != null)
		cq.where(finalPredicate);
		
		TypedQuery<BasicAuthClient> q = em.createQuery(cq);
		
		PagingInformation pagingInfo = request.getPagingInfo();
		
		if (pagingInfo != null)
		{
			int currentPage = pagingInfo.getCurrentPage();
			int pageSize = pagingInfo.getPageSize();
			if (currentPage > 0 && pageSize > 0)
			{
				q.setFirstResult((currentPage-1)*pageSize);
				q.setMaxResults(pageSize);
			}
		}
		
		List<BasicAuthClient> listOfObjects = q.getResultList();
		return listOfObjects;
	}
	
}
