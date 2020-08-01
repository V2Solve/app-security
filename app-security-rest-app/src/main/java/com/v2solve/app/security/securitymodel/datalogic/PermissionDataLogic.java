package com.v2solve.app.security.securitymodel.datalogic;


import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Path;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import com.v2solve.app.security.model.entities.Action;
import com.v2solve.app.security.model.entities.Application;
import com.v2solve.app.security.model.entities.Permission;
import com.v2solve.app.security.model.entities.Resource;
import com.v2solve.app.security.sdk.PagingInformation;
import com.v2solve.app.security.sdk.permission.CreateActionRequest;
import com.v2solve.app.security.sdk.permission.CreatePermissionRequest;
import com.v2solve.app.security.sdk.permission.CreateResourceRequest;
import com.v2solve.app.security.sdk.permission.DeleteActionRequest;
import com.v2solve.app.security.sdk.permission.DeletePermissionRequest;
import com.v2solve.app.security.sdk.permission.DeleteResourceRequest;
import com.v2solve.app.security.sdk.permission.SearchActionRequest;
import com.v2solve.app.security.sdk.permission.SearchPermissionRequest;
import com.v2solve.app.security.sdk.permission.SearchResourceRequest;

import com.v2solve.app.security.utility.JPAUtils;
import com.v2solve.app.security.utility.StringUtils;

/**
 * This class has methods pertaining to persisting and removing Action, Resources, and Permissions
 * It is a part of the data access layer.
 *
 *@author Saurin Magiawala
 */
public class PermissionDataLogic {

	
	/**
	 * Removes the action from database.
	 * @param em
	 * @param request
	 * @return - the deleted action record.
	 */
	public static Action deleteAction(EntityManager em, DeleteActionRequest request) 
	{
		Action deletedObj = null;
		List<Action> listOfObjects = JPAUtils.findObjects(em, Action.class, "name", request.getName()); 
				
		if (listOfObjects != null && listOfObjects.isEmpty()==false)
		{
			for (Action obj : listOfObjects)
			{
				deletedObj = JPAUtils.deleteObject(em, obj.getId(), Action.class);
				if (deletedObj == null)
					throw new DataLogicValidationException("Could not deleted the action: " + request.getName());
			}
		}
		
		return deletedObj;
	}
	
	
	/**
	 * Creates an action object in system.
	 * @param em
	 * @param request - contains data to create.
	 * @return - the newly created record.
	 */
	public static Action createAction(EntityManager em, CreateActionRequest request) 
	 
	{
		// Lets check if an app identifier has been provided or not..
		Application app = null;
		String appIdentifier = request.getAppIdentifier();
		
		if (!StringUtils.isNullOrZeroLength(appIdentifier))
		{
			app = DatalogicUtils.findObject(em, Application.class, "appIdentifier", appIdentifier);
		}
		
		Action objToCreate = new Action ();
		objToCreate.setName(request.getName());
		objToCreate.setDescription(request.getDescription());
		if (app != null)
		objToCreate.setApplication(app);
		JPAUtils.createObject(em, objToCreate);
		return objToCreate;
	}
	

	/**
	 * Deletes the resource from the system
	 * @param em
	 * @param request
	 * @return - the deleted resource if any was present, otherwise null
	 */
	public static Resource deleteResource(EntityManager em, DeleteResourceRequest request) 
	{
		Resource deletedObj = null;
		List<Resource> listOfObjects = JPAUtils.findObjects(em, Resource.class, "name", request.getName()); 
				
		if (listOfObjects != null && listOfObjects.isEmpty()==false)
		{
			for (Resource obj : listOfObjects)
			{
				em.remove(obj);
				deletedObj = obj;
			}
		}
		
		return deletedObj;
	}
	

	/**
	 * Creates a resource object in the system
	 * @param em
	 * @param request
	 * @return - the newly created resource.
	 */
	public static Resource createResource(EntityManager em, CreateResourceRequest request) 
	{
		// Lets check if an app identifier has been provided or not..
		Application app = null;
		String appIdentifier = request.getAppIdentifier();
		
		if (!StringUtils.isNullOrZeroLength(appIdentifier))
		{
			app = DatalogicUtils.findObject(em, Application.class, "appIdentifier", appIdentifier);
		}
		
		Resource objToCreate = new Resource ();
		objToCreate.setName(request.getName());
		objToCreate.setDescription(request.getDescription());
		if (app != null)
		objToCreate.setApplication(app);
		JPAUtils.createObject(em, objToCreate);
		return objToCreate;
	}
	

	/**
	 * Deletes this permission from the system.
	 * @param em
	 * @param request - containing the name of the permission to be deleted.
	 * @return - the deleted permission.
	 */
	public static Permission deletePermission(EntityManager em, DeletePermissionRequest request) 
	{
		Permission deletedObj = null;
		List<Permission> listOfObjects = JPAUtils.findObjects(em, Permission.class, "name", request.getName()); 
				
		if (listOfObjects != null && listOfObjects.isEmpty()==false)
		{
			for (Permission obj : listOfObjects)
			{
				deletedObj = JPAUtils.deleteObject(em, obj.getId(), Permission.class);
				if (deletedObj == null)
					throw new DataLogicValidationException("Could not deleted the record: " + request.getName());
			}
		}
		
		return deletedObj;
	}
	
	
	
	/**
	 * Creates a permission object.
	 * @param em
	 * @param request
	 * @return - the newly created permission in the system.
	 */
	public static Permission createPermission(EntityManager em, CreatePermissionRequest request) 
	{
		// Lets check if an app identifier has been provided or not..
		Application app = null;
		String appIdentifier = request.getAppIdentifier();
		
		if (!StringUtils.isNullOrZeroLength(appIdentifier))
		{
			app = DatalogicUtils.findObject(em, Application.class, "appIdentifier", appIdentifier);
		}
		
		String actionName   = request.getActionName();
		String resourceName = request.getResourceName();
		
		if (StringUtils.isNullOrZeroLength(actionName) || StringUtils.isNullOrZeroLength(resourceName))
			throw new DataLogicValidationException("Action and/or Resource both must be provided for this request.");
		
		Action action = DatalogicUtils.findObject(em, Action.class, "name", actionName);
		Resource resource = DatalogicUtils.findObject (em,Resource.class,"name",resourceName);
		
		Permission objToCreate = new Permission ();
		objToCreate.setName(request.getName());
		objToCreate.setDescription(request.getDescription());
		if (app != null)
		objToCreate.setApplication(app);
		objToCreate.setAction(action);
		objToCreate.setResource(resource);
		JPAUtils.createObject(em, objToCreate);
		return objToCreate;
	}
	

	/**
	 * Searches the actions based on the searchActionRequest
	 * @param em
	 * @param searchActionRequest
	 * @param limitingAppDomains - if provided will limit the actions to only those owned by the applications.
	 * @return - list of action objects.
	 */
	public static List<Action> searchActions(EntityManager em,SearchActionRequest searchRequest,List<String> limitingAppDomains)
	{
		CriteriaBuilder cb = em.getCriteriaBuilder();
		CriteriaQuery<Action> cq = cb.createQuery(Action.class);
		Root<Action> root = cq.from(Action.class);
		cq.select(root);
		
		Predicate finalPredicate = null;
		
		Predicate namePC = null;
		
		if (!StringUtils.isNullOrZeroLength(searchRequest.getName()))
		{
			Path<String> namePath = root.get("name");
			namePC = cb.equal(namePath, searchRequest.getName());
			finalPredicate = namePC;
		}
		
		finalPredicate = DatalogicUtils.addLimitingClauseForApps(cb, limitingAppDomains, root, DatalogicUtils.APP_RELATIONSHIP_PROPERTY, DatalogicUtils.APP_IDENTIFIER_PROPERTY,finalPredicate);
		
		if (finalPredicate != null)
		cq.where(finalPredicate);
		
		TypedQuery<Action> q = em.createQuery(cq);
		
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
		
		List<Action> listOfObjects = q.getResultList();
		return listOfObjects;
	}


	/**
	 * Searches the resources based on the searchResourceRequest
	 * @param em
	 * @param searchResourceRequest
	 * @param limitingAppDomains - limits the search results to those records which are owned by these applications.
	 * @return
	 */
	public static List<Resource> searchResources(EntityManager em,SearchResourceRequest searchRequest,List<String> limitingAppDomains)
	{
		CriteriaBuilder cb = em.getCriteriaBuilder();
		CriteriaQuery<Resource> cq = cb.createQuery(Resource.class);
		Root<Resource> root = cq.from(Resource.class);
		cq.select(root);
		
		Predicate finalPredicate = null;
		
		Predicate namePC = null;
		
		
		if (!StringUtils.isNullOrZeroLength(searchRequest.getName()))
		{
			Path<String> namePath = root.get("name");
			namePC = cb.equal(namePath, searchRequest.getName());
			finalPredicate = namePC;
		}
	
		finalPredicate = DatalogicUtils.addLimitingClauseForApps(cb, limitingAppDomains, root, DatalogicUtils.APP_RELATIONSHIP_PROPERTY, DatalogicUtils.APP_IDENTIFIER_PROPERTY,finalPredicate);		

		if (finalPredicate != null)
		cq.where(finalPredicate);
		
		TypedQuery<Resource> q = em.createQuery(cq);
		
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
		
		List<Resource> listOfObjects = q.getResultList();
		return listOfObjects;
	}
	
	
	/**
	 * Searches the permissions based on the searchPermissionRequest
	 * @param em
	 * @param searchPermissionRequest
	 * @param limitingAppDomains - limits the records to only the permissions that are owned by these applications.
	 * @return
	 */
	public static List<Permission> searchPermissions(EntityManager em,SearchPermissionRequest searchRequest,List<String> limitingAppDomains)
	{
		CriteriaBuilder cb = em.getCriteriaBuilder();
		CriteriaQuery<Permission> cq = cb.createQuery(Permission.class);
		Root<Permission> root = cq.from(Permission.class);
		cq.select(root);
		
		Predicate finalPredicate = null;
		
		Predicate namePC = null;
		
		if (!StringUtils.isNullOrZeroLength(searchRequest.getName()))
		{
			Path<String> namePath = root.get("name");
			namePC = cb.like(namePath, "%"+searchRequest.getName()+"%");
			finalPredicate = namePC;
		}
	
		finalPredicate = DatalogicUtils.addLimitingClauseForApps(cb, limitingAppDomains, root, DatalogicUtils.APP_RELATIONSHIP_PROPERTY, DatalogicUtils.APP_IDENTIFIER_PROPERTY,finalPredicate);		

		if (finalPredicate != null)
		cq.where(finalPredicate);
		
		TypedQuery<Permission> q = em.createQuery(cq);
		
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
		
		List<Permission> listOfObjects = q.getResultList();
		return listOfObjects;
	}
	
}
