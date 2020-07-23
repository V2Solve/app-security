package com.v2solve.app.security.securitymodel.datalogic;


import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Join;
import javax.persistence.criteria.Path;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import com.v2solve.app.security.model.entities.Application;
import com.v2solve.app.security.model.entities.Client;
import com.v2solve.app.security.model.entities.ClientGroup;
import com.v2solve.app.security.model.entities.ClientGroupMembership;
import com.v2solve.app.security.sdk.PagingInformation;
import com.v2solve.app.security.sdk.groups.CreateClientGroupRequest;
import com.v2solve.app.security.sdk.groups.DeleteClientGroupRequest;
import com.v2solve.app.security.sdk.groups.SearchClientGroupRequest;
import com.v2solve.app.security.sdk.relations.CreateGroupMembershipRequest;
import com.v2solve.app.security.sdk.relations.DeleteGroupMembershipRequest;

import com.v2solve.app.security.utility.JPAUtils;
import com.v2solve.app.security.utility.StringUtils;


/**
 * Data access layer for doing some CRUD logic on Groups/Roles and related information
 * @author Saurin Magiawala
 *
 */
public class GroupDataLogic 
{

	/**
	 * Deletes the Client Group Information
	 * @param em
	 * @param request
	 * @return
	 */
	public static ClientGroup deleteClientGroup(EntityManager em, DeleteClientGroupRequest request) 
	{
		ClientGroup deletedObj = null;
		List<ClientGroup> listOfObjects = JPAUtils.findObjects(em, ClientGroup.class, "name", request.getName()); 
				
		if (listOfObjects != null && listOfObjects.isEmpty()==false)
		{
			for (ClientGroup obj : listOfObjects)
			{
				deletedObj = JPAUtils.deleteObject(em, obj.getId(), ClientGroup.class);
				if (deletedObj == null)
					throw new DataLogicValidationException("Could not deleted the record: " + request.getName());
			}
		}
		
		return deletedObj;
	}
	
	
	public static ClientGroup createClientGroup(EntityManager em, CreateClientGroupRequest request) 
	{
		// Lets check if an app identifier has been provided or not..
		Application app = null;
		String appIdentifier = request.getAppIdentifier();
		
		if (!StringUtils.isNullOrZeroLength(appIdentifier))
		{
			app = DatalogicUtils.findObject(em, Application.class, "appIdentifier", appIdentifier);
		}
		
		ClientGroup objToCreate = new ClientGroup ();
		objToCreate.setName(request.getName());
		objToCreate.setDescription(request.getDescription());
		if (app != null)
		objToCreate.setApplication(app);
		JPAUtils.createObject(em, objToCreate);
		return objToCreate;
	}

	
	public static ClientGroupMembership createClientGroupMembership(EntityManager em, CreateGroupMembershipRequest request) 
	{
		// Lets check if an app identifier has been provided or not..
		Application app = null;
		String appIdentifier = request.getAppIdentifier();
		
		if (!StringUtils.isNullOrZeroLength(appIdentifier))
		{
			app = DatalogicUtils.findObject(em, Application.class, "appIdentifier", appIdentifier);
		}
		
		// Lets get the group..
		String groupId = request.getClientGroupIdentifier();
		String clientId = request.getClientIdentifier();
		if (StringUtils.isNullOrZeroLength(groupId) || StringUtils.isNullOrZeroLength(clientId))
			throw new DataLogicValidationException("Client identifier and Client Group Identifier both must be provided.");
		
		ClientGroup cg = DatalogicUtils.findObject(em, ClientGroup.class, "name", groupId);
		Client client = DatalogicUtils.findObject(em, Client.class, "clientIdentifier", clientId);
		
		ClientGroupMembership objToCreate = new ClientGroupMembership();
		objToCreate.setClient(client);
		objToCreate.setClientGroup(cg);
		if (app != null)
		objToCreate.setApplication(app);
		JPAUtils.createObject(em, objToCreate);
		return objToCreate;
	}

	
	public static ClientGroupMembership deleteClientGroupMembership(EntityManager em, DeleteGroupMembershipRequest request) 
	{
		// Lets figure out which member and which membership.
		String groupId = request.getClientGroupIdentifier();
		String clientId = request.getClientIdentifier();
				
		List<ClientGroupMembership> listOfObjects = getClientGroupMemberships(em, clientId, groupId);  
		
		ClientGroupMembership deletedObj = null;
		
		if (listOfObjects != null && listOfObjects.isEmpty()==false)
		{
			for (ClientGroupMembership obj : listOfObjects)
			{
				deletedObj = obj;
				em.remove(obj);
				em.flush();
			}
		}
		
		return deletedObj;
	}

	
	/**
	 * Throws an exception if there is an empty list..  The association must exist, otherwise will it will throw a validation exception
	 * @param em
	 * @param clientIdentifier
	 * @param groupIdentifier
	 * @return
	 * @throws InstantiationException
	 * @throws IllegalAccessException
	 * @throws IllegalArgumentException
	 * @throws InvocationTargetException
	 */
	public static List<ClientGroupMembership> getClientGroupMemberships (EntityManager em,String clientIdentifier, String groupIdentifier) 
	{
		if (StringUtils.isNullOrZeroLength(groupIdentifier) || StringUtils.isNullOrZeroLength(clientIdentifier))
			throw new DataLogicValidationException("Client identifier and Client Group Identifier both must be provided.");
		
		CriteriaBuilder cb = em.getCriteriaBuilder();
		CriteriaQuery<ClientGroupMembership> cq = cb.createQuery(ClientGroupMembership.class);
		Root<ClientGroupMembership> root = cq.from(ClientGroupMembership.class);
		
		Path<Client> ciPath = root.get("client");
		Path<ClientGroup> cgPath = root.get("clientGroup");
		
		ClientGroup cg = DatalogicUtils.findObject(em, ClientGroup.class, "name", groupIdentifier);
		Client client = DatalogicUtils.findObject(em, Client.class, "clientIdentifier", clientIdentifier);
		
		if (cg == null || client == null)
			throw new DataLogicValidationException("Client and/or Client Group not found.");
		
		Predicate ciP = cb.equal(ciPath, client);
		Predicate ciG = cb.equal(cgPath,cg);
		
		Predicate finalPredicate = cb.and(ciP,ciG);
		cq.where(finalPredicate);
		
		TypedQuery<ClientGroupMembership> tq = em.createQuery(cq);
		List<ClientGroupMembership> listOfObjects = tq.getResultList();
		if (listOfObjects == null || listOfObjects.isEmpty())
			throw new DataLogicValidationException("No client group membership found with client id: " + clientIdentifier + " and group : " + groupIdentifier);
			
		return listOfObjects;
	}


	/**
	 * Searches for groups based on the group name in the request.
	 * @param em
	 * @param request
	 * @param limitingAppDomains
	 * @return
	 */
	public static List<ClientGroup> searchClientGroups(EntityManager em, SearchClientGroupRequest request,
			List<String> limitingAppDomains) 
	{
		CriteriaBuilder cb = em.getCriteriaBuilder();
		CriteriaQuery<ClientGroup> cq = cb.createQuery(ClientGroup.class);
		Root<ClientGroup> root = cq.from(ClientGroup.class);
		cq.select(root);
		
		Predicate finalPredicate = null;
		
		Predicate namePC = null;
		
		if (!StringUtils.isNullOrZeroLength(request.getName()))
		{
			Path<String> namePath = root.get("name");
			namePC = cb.like(namePath, "%"+request.getName()+"%");
			finalPredicate = namePC;
		}
		
		// Checking to see if groups need to be returned for a particular client..
		if (!StringUtils.isNullOrZeroLength(request.getForClientIdentifier()))
		{
			// Outer join the membership..
			Join<ClientGroup, ClientGroupMembership> jcg_cgm = root.join("clientGroupMemberships");
			// and then join the Client Table, finally..
			Join<ClientGroupMembership,Client> jcg_c = jcg_cgm.join("client");
			Path<String> clientPath = jcg_c.get("clientIdentifier");
			Predicate clientPredicate = cb.equal(clientPath, request.getForClientIdentifier());
			if (finalPredicate != null)
				finalPredicate = cb.and(finalPredicate,clientPredicate);
			else
				finalPredicate = clientPredicate;
		}
	
		finalPredicate = DatalogicUtils.addLimitingClauseForApps(cb, limitingAppDomains, root, DatalogicUtils.APP_RELATIONSHIP_PROPERTY, DatalogicUtils.APP_IDENTIFIER_PROPERTY,finalPredicate);
		
		if (finalPredicate != null)
		cq.where(finalPredicate);
		
		TypedQuery<ClientGroup> q = em.createQuery(cq);
		
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
		
		List<ClientGroup> listOfObjects = q.getResultList();
		return listOfObjects;
	}
}
