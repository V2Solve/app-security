package com.v2solve.app.security.securitymodel.datalogic;

import java.lang.reflect.InvocationTargetException;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaBuilder.In;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Join;
import javax.persistence.criteria.Path;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import com.v2solve.app.security.model.entities.Application;
import com.v2solve.app.security.model.entities.Client;
import com.v2solve.app.security.sdk.PagingInformation;
import com.v2solve.app.security.sdk.application.CreateApplicationRequest;
import com.v2solve.app.security.sdk.application.DeleteApplicationRequest;
import com.v2solve.app.security.sdk.application.SearchApplicationsRequest;
import com.v2solve.app.security.sdk.client.CreateClientRequest;
import com.v2solve.app.security.sdk.client.DeleteClientRequest;
import com.v2solve.app.security.sdk.client.SearchClientRequest;

import framework.JPAUtils;
import framework.StringUtils;


/**
 * This is a database access layer for dealing with Application and related security model data
 * @author Saurin
 *
 */
public class ApplicationDataLogic {

	public static Application createApplication(EntityManager em, CreateApplicationRequest createApplicationRequest) 
	throws IllegalAccessException, IllegalArgumentException, InvocationTargetException 
	{
		Application app = new Application();
		app.setAppIdentifier(createApplicationRequest.getAppIdentifier());
		app.setAppShortIdentifier(createApplicationRequest.getAppShortIdentifier());
		app.setDescription(createApplicationRequest.getDescription());
		JPAUtils.createObject(em, app);
		return app;
	}

	public static Application deleteApplication(EntityManager em, DeleteApplicationRequest deleteApplicationRequest) 
    throws IllegalAccessException, IllegalArgumentException, InvocationTargetException, InstantiationException 
	{
		Application deletedObj = null;
		List<Application> listOfObjects = DatalogicUtils.findObjects(em, Application.class, "appIdentifier", deleteApplicationRequest.getAppIdentifier()); 
				
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
	throws IllegalAccessException, IllegalArgumentException, InvocationTargetException, InstantiationException 
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
	throws IllegalAccessException, IllegalArgumentException, InvocationTargetException, InstantiationException 
	{
		Client deletedObj = null;
		List<Client> listOfObjects = DatalogicUtils.findObjects(em, Client.class, "clientIdentifier", deleteClientRequest.getClientIdentifier()); 
				
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
	public static List<Application> searchApplication(EntityManager em,SearchApplicationsRequest searchApplicationRequest,List<String> limitingAppDomains)
	{
		CriteriaBuilder cb = em.getCriteriaBuilder();
		CriteriaQuery<Application> cq = cb.createQuery(Application.class);
		Root<Application> root = cq.from(Application.class);
		cq.select(root);
		
		Predicate finalPredicate = null;
		
		Predicate namePC = null;
		Predicate inApps = null;
		
		if (!StringUtils.isNullOrZeroLength(searchApplicationRequest.getAppIdentifier()))
		{
			Path<String> namePath = root.get("appIdentifier");
			namePC = cb.like(namePath, "%"+searchApplicationRequest.getAppIdentifier()+"%");
			finalPredicate = namePC;
		}
	
		if (limitingAppDomains != null && !limitingAppDomains.isEmpty())
		{
			// We will have to join the table..
			Path<String> appIdentifierProp = root.get("appIdentifier");
			In<String> inClause = cb.in(appIdentifierProp);
			inApps = JPAUtils.buildInvalues(inClause, limitingAppDomains);
			if (finalPredicate != null)
				finalPredicate = cb.and(finalPredicate,inApps);
			else
				finalPredicate = inApps;
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
		Predicate inApps = null;
		
		if (!StringUtils.isNullOrZeroLength(searchRequest.getClientIdentifier()))
		{
			Path<String> namePath = root.get("clientIdentifier");
			
			namePC = cb.like(namePath, "%"+searchRequest.getClientIdentifier()+"%");
			finalPredicate = namePC;
		}
	
		if (limitingAppDomains != null && !limitingAppDomains.isEmpty())
		{
			// We will have to join the table..
			Join<Client,Application> forApps = root.join("application");
			Path<String> appIdentifierProp = forApps.get("appIdentifier");
			In<String> inClause = cb.in(appIdentifierProp);
			inApps = JPAUtils.buildInvalues(inClause, limitingAppDomains);
			if (finalPredicate != null)
				finalPredicate = cb.and(finalPredicate,inApps);
			else
				finalPredicate = inApps;
		}
		
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
	
}