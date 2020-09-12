package com.v2solve.app.security.securitymodel.datalogic;



import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaBuilder.In;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Path;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.security.crypto.password.PasswordEncoder;

import com.v2solve.app.security.model.entities.Application;
import com.v2solve.app.security.model.entities.BasicAuthClient;
import com.v2solve.app.security.model.entities.Client;
import com.v2solve.app.security.model.entities.ClientGroup;
import com.v2solve.app.security.model.entities.ClientGroupMembership;
import com.v2solve.app.security.model.entities.ResourceDomain;
import com.v2solve.app.security.restmodel.PagingInformation;
import com.v2solve.app.security.restmodel.request.CreateApplicationRequest;
import com.v2solve.app.security.restmodel.request.CreateBasicAuthClientRequest;
import com.v2solve.app.security.restmodel.request.CreateClientGroupRequest;
import com.v2solve.app.security.restmodel.request.CreateClientGroupRoleRequest;
import com.v2solve.app.security.restmodel.request.CreateClientRequest;
import com.v2solve.app.security.restmodel.request.CreateDomainRequest;
import com.v2solve.app.security.restmodel.request.CreateGroupMembershipRequest;
import com.v2solve.app.security.restmodel.request.DeleteApplicationRequest;
import com.v2solve.app.security.restmodel.request.DeleteClientRequest;
import com.v2solve.app.security.restmodel.request.CreateTrustedBasicAppRequest;
import com.v2solve.app.security.restmodel.request.SearchApplicationRequest;
import com.v2solve.app.security.restmodel.request.SearchClientRequest;
import com.v2solve.app.security.sdk.Domains;
import com.v2solve.app.security.utility.JPAUtils;
import com.v2solve.app.security.utility.StringUtils;


/**
 * This is a database access layer for dealing with Application and related security model data
 * @author Saurin
 *
 */
public class ApplicationDataLogic 
{

	public static Application createApplication(EntityManager em, CreateApplicationRequest createApplicationRequest) 
	{
		Application app = new Application();
		app.setAppIdentifier(createApplicationRequest.getAppIdentifier());
		app.setAppShortIdentifier(createApplicationRequest.getAppShortIdentifier());
		app.setDescription(createApplicationRequest.getDescription());
		JPAUtils.createObject(em, app);
		return app;
	}


	public static Application deleteApplication(EntityManager em, DeleteApplicationRequest deleteApplicationRequest) 
	{
		Application deletedObj = null;
		List<Application> listOfObjects = JPAUtils.findObjects(em, Application.class, "appIdentifier", deleteApplicationRequest.getAppIdentifier()); 
				
		if (listOfObjects != null && listOfObjects.isEmpty()==false)
		{
			for (Application obj : listOfObjects)
			{
				deletedObj = JPAUtils.deleteObject(em, obj.getId(), Application.class);
				if (deletedObj == null)
					throw new DataLogicValidationException("Could not deleted the item: " + deleteApplicationRequest.getAppIdentifier());
			}
		}
		
		return deletedObj;
	}


	public static Client createClient(EntityManager em, CreateClientRequest createClientRequest) 
	{
		// Lets check if an app identifier has been provided or not..
		Application app = null;
		String appIdentifier = createClientRequest.getAppIdentifier();
		
		if (!StringUtils.isNullOrZeroLength(appIdentifier))
		{
			app = DatalogicUtils.findObject(em, Application.class, "appIdentifier", appIdentifier);
		}
		
		Client c = new Client();
		if (app != null)
		c.setApplication(app);
		c.setClientIdentifier(createClientRequest.getClientIdentifier());
		c.setDescription(createClientRequest.getDescription());
		JPAUtils.createObject(em, c);
		return c;
	}


	public static Client deleteClient(EntityManager em, DeleteClientRequest deleteClientRequest) 
	{
		Client deletedObj = null;
		List<Client> listOfObjects = JPAUtils.findObjects(em, Client.class, "clientIdentifier", deleteClientRequest.getClientIdentifier()); 
				
		if (listOfObjects != null && listOfObjects.isEmpty()==false)
		{
			for (Client obj : listOfObjects)
			{
				deletedObj = JPAUtils.deleteObject(em, obj.getId(), Client.class);
				if (deletedObj == null)
					throw new DataLogicValidationException("Could not deleted the record: " + deleteClientRequest.getClientIdentifier());
			}
		}
		
		return deletedObj;
	}


	
	/**
	 * Searches the application based on the searchApplicationRequest
	 * @param em
	 * @param searchApplicationRequest
	 * @param limitingAppDomains
	 * @return
	 */
	public static List<Application> searchApplication(EntityManager em,SearchApplicationRequest searchApplicationRequest,List<String> limitingAppDomains)
	{
		CriteriaBuilder cb = em.getCriteriaBuilder();
		CriteriaQuery<Application> cq = cb.createQuery(Application.class);
		Root<Application> root = cq.from(Application.class);
		cq.select(root);
		
		Predicate finalPredicate = null;
		
		Predicate namePC = null;
		
		if (!StringUtils.isNullOrZeroLength(searchApplicationRequest.getAppIdentifier()))
		{
			Path<String> namePath = root.get(DatalogicUtils.APP_IDENTIFIER_PROPERTY);
			namePC = cb.like(namePath, "%"+searchApplicationRequest.getAppIdentifier()+"%");
			finalPredicate = namePC;
		}
		
		
		{
			if (limitingAppDomains != null && limitingAppDomains.size() >0)
			{
				Path<String> namePath = root.get(DatalogicUtils.APP_IDENTIFIER_PROPERTY);
				In<String> inClause = cb.in(namePath);
				Predicate inApps = JPAUtils.buildInvalues(inClause, limitingAppDomains);
				if (finalPredicate == null)
					finalPredicate = inApps;
				else
					finalPredicate = cb.and(finalPredicate,inApps);
			}
		}

		if (finalPredicate != null)
		cq.where(finalPredicate);
		
		TypedQuery<Application> tq = em.createQuery(cq);
		
		PagingInformation pagingInfo = searchApplicationRequest.getPagingInfo();
		
		if (pagingInfo != null)
		{
			int currentPage = pagingInfo.getCurrentPage();
			int pageSize = pagingInfo.getPageSize();
			if (currentPage > 0 && pageSize > 0)
			{
				tq.setFirstResult((currentPage-1)*pageSize);
				tq.setMaxResults(pageSize);
			}
		}
		
		List<Application> listOfObjects = tq.getResultList();
		return listOfObjects;
	}

	/**
	 * Searches the clients based on the searchClientRequest
	 * @param em
	 * @param searchClientRequest
	 * @param limitingAppDomains
	 * @return
	 */
	public static List<Client> searchClients(EntityManager em,SearchClientRequest searchRequest,List<String> limitingAppDomains)
	{
		CriteriaBuilder cb = em.getCriteriaBuilder();
		CriteriaQuery<Client> cq = cb.createQuery(Client.class);
		Root<Client> root = cq.from(Client.class);
		cq.select(root);
		
		Predicate finalPredicate = null;
		
		Predicate namePC = null;
		
		if (!StringUtils.isNullOrZeroLength(searchRequest.getClientIdentifier()))
		{
			Path<String> namePath = root.get("clientIdentifier");
			
			namePC = cb.like(namePath, "%"+searchRequest.getClientIdentifier()+"%");
			finalPredicate = namePC;
		}
	
		finalPredicate = DatalogicUtils.addLimitingClauseForApps(cb, limitingAppDomains, root, DatalogicUtils.APP_RELATIONSHIP_PROPERTY, DatalogicUtils.APP_IDENTIFIER_PROPERTY,finalPredicate);
		
		if (finalPredicate != null)
		cq.where(finalPredicate);
		
		TypedQuery<Client> q = em.createQuery(cq);
		
		PagingInformation pagingInfo = searchRequest.getPagingInfo();
		
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
		
		List<Client> listOfObjects = q.getResultList();
		return listOfObjects;
	}

	
	
	public static Application OnboardTrustedBasicAuthApp (EntityManager em,CreateTrustedBasicAppRequest request, PasswordEncoder encoder)
	{
		
		/**
		 * Okay lets create the application first..
		 */
		CreateApplicationRequest car = new CreateApplicationRequest();
		car.setAppIdentifier(request.getAppName());
		car.setAppShortIdentifier(request.getAppAccronym());
		car.setDescription(request.getAppDescription());
		Application app = createApplication(em, car);
		
		
		/**
		 * Cool.. now for the basic Auth clients entries..
		 * 
		 */
		CreateBasicAuthClientRequest cacr = new CreateBasicAuthClientRequest();
		cacr.setAppIdentifier(app.getAppIdentifier());
		cacr.setEnabled(true);
		cacr.setName(request.getBasicAuthAppUser());
		cacr.setPassword(request.getBasicAuthAppPassword());
		BasicAuthClient appBac = SecurityDataLogic.createBasicAuthClient(em, cacr, encoder);
		
		/**
		 * Ok now also create the client for the same..
		 */
		CreateClientRequest ccr = new CreateClientRequest();
		ccr.setAppIdentifier(app.getAppIdentifier());
		ccr.setClientIdentifier(request.getBasicAuthAppUser());
		ccr.setDescription("Client created for app during app onboarding for trusted app: " + app.getAppIdentifier());
		Client appClient = createClient(em, ccr);
	
		
		/**
		 * Okay lets put the membership of this client into the Trusted Apps Group..
		 */
		CreateGroupMembershipRequest cgmr = new CreateGroupMembershipRequest();
		cgmr.setAppIdentifier(app.getAppIdentifier());
		cgmr.setClientGroupIdentifier(request.getTrustedAppsGroupName());
		cgmr.setClientIdentifier(appClient.getClientIdentifier());
		GroupDataLogic.createClientGroupMembership(em, cgmr);
		
		
		/**
		 * now to create similar entries for the apps Owner
		 */
		cacr = new CreateBasicAuthClientRequest();
		cacr.setAppIdentifier(app.getAppIdentifier());
		cacr.setEnabled(true);
		cacr.setName(request.getBasicAuthAppOwnerClientId());
		cacr.setPassword(request.getBasicAuthAppOwnerPassword());
		BasicAuthClient appOwnerBac = SecurityDataLogic.createBasicAuthClient(em, cacr, encoder);
		
		/**
		 * Ok now also create the client for the same..
		 */
		ccr = new CreateClientRequest();
		ccr.setAppIdentifier(app.getAppIdentifier());
		ccr.setClientIdentifier(request.getBasicAuthAppOwnerClientId());
		ccr.setDescription("Client created for appOwner during app onboarding for trusted app: " + app.getAppIdentifier());
		Client appOwnerClient = createClient(em, ccr);
		
		
		/**
		 * Okay so now...lets create a group for these app owners..
		 */
		CreateClientGroupRequest ccgr = new CreateClientGroupRequest();
		ccgr.setAppIdentifier(app.getAppIdentifier());
		ccgr.setName(request.getAppOwnersGroupName());
		ccgr.setDescription("Client Group created for appOwners during app onboarding for trusted app: " + app.getAppIdentifier());
		ClientGroup appOwnersGroup = GroupDataLogic.createClientGroup(em, ccgr);
		
		/**
		 * Lets add the appowner client to this group by creating the group membership...
		 */
		cgmr = new CreateGroupMembershipRequest();
		cgmr.setAppIdentifier(app.getAppIdentifier());
		cgmr.setClientGroupIdentifier(request.getAppOwnersGroupName());
		cgmr.setClientIdentifier(appOwnerClient.getClientIdentifier());
		GroupDataLogic.createClientGroupMembership(em, cgmr);
		
		/**
		 * Lets create the application domain for assigning role at that domain..
		 */
		CreateDomainRequest cdr = new CreateDomainRequest();
		cdr.setAppIdentifier(app.getAppIdentifier());
		cdr.setDomainType(Domains.APP_DOMAIN_TYPE);
		cdr.setName(app.getAppIdentifier());
		cdr.setParentDomain(null);
		ResourceDomain appDomain = DomainScopeDataLogic.createResourceDomain(em, cdr);
		
		CreateClientGroupRoleRequest ccgrr = new CreateClientGroupRoleRequest();
		ccgrr.setAppIdentifier(app.getAppIdentifier());
		ccgrr.setDomainName(appDomain.getName());
		ccgrr.setGroupName(appOwnersGroup.getName());
		ccgrr.setRoleName(request.getAppOwnerRole());
		RelationDataLogic.createClientGroupRole(em, ccgrr);
		
		// Cool, so done, this finishes the app Onboarding...
		
		return app;
	}
	
	
}
