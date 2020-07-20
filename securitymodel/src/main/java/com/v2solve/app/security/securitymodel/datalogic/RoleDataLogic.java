package com.v2solve.app.security.securitymodel.datalogic;

import java.lang.reflect.InvocationTargetException;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Join;
import javax.persistence.criteria.Path;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import javax.persistence.criteria.CriteriaBuilder.In;

import com.v2solve.app.security.model.entities.Application;
import com.v2solve.app.security.model.entities.ClientRole;
import com.v2solve.app.security.sdk.PagingInformation;
import com.v2solve.app.security.sdk.roles.CreateClientRoleRequest;
import com.v2solve.app.security.sdk.roles.DeleteClientRoleRequest;
import com.v2solve.app.security.sdk.roles.SearchClientRoleRequest;

import com.v2solve.app.security.utility.JPAUtils;
import com.v2solve.app.security.utility.StringUtils;


/**
 * Data access layer for doing some CRUD logic on Groups/Roles and related information
 * @author Saurin Magiawala
 *
 */
public class RoleDataLogic 
{

	public static ClientRole deleteClientRole(EntityManager em, DeleteClientRoleRequest request) 
	throws IllegalAccessException, IllegalArgumentException, InvocationTargetException, InstantiationException 
	{
		ClientRole deletedObj = null;
		List<ClientRole> listOfObjects = JPAUtils.findObjects(em, ClientRole.class, "name", request.getName()); 
				
		if (listOfObjects != null && listOfObjects.isEmpty()==false)
		{
			for (ClientRole obj : listOfObjects)
			{
				deletedObj = JPAUtils.deleteObject(em, obj.getId(), ClientRole.class);
				if (deletedObj == null)
					throw new DataLogicValidationException("Could not deleted the record: " + request.getName());
			}
		}
		
		return deletedObj;
	}
	
	
	public static ClientRole createClientRole(EntityManager em, CreateClientRoleRequest request) 
	throws IllegalAccessException, IllegalArgumentException, InvocationTargetException, InstantiationException 
	{
		// Lets check if an app identifier has been provided or not..
		Application app = null;
		String appIdentifier = request.getAppIdentifier();
		
		if (!StringUtils.isNullOrZeroLength(appIdentifier))
		{
			app = DatalogicUtils.findObject(em, Application.class, "appIdentifier", appIdentifier);
		}
		
		ClientRole objToCreate = new ClientRole ();
		objToCreate.setName(request.getName());
		objToCreate.setDescription(request.getDescription());
		if (app != null)
		objToCreate.setApplication(app);
		JPAUtils.createObject(em, objToCreate);
		return objToCreate;
	}

	

	

	/**
	 * Searches for roles based on limiting app domains
	 * @param em
	 * @param request
	 * @param limitingAppDomains
	 * @return
	 */
	public static List<ClientRole> searchClientRoles(EntityManager em, SearchClientRoleRequest request,
			List<String> limitingAppDomains) 
	{
		CriteriaBuilder cb = em.getCriteriaBuilder();
		CriteriaQuery<ClientRole> cq = cb.createQuery(ClientRole.class);
		Root<ClientRole> root = cq.from(ClientRole.class);
		cq.select(root);
		
		Predicate finalPredicate = null;
		
		Predicate namePC = null;
		Predicate inApps = null;
		
		if (!StringUtils.isNullOrZeroLength(request.getName()))
		{
			Path<String> namePath = root.get("name");
			namePC = cb.like(namePath, "%"+request.getName()+"%");
			finalPredicate = namePC;
		}
	
		if (limitingAppDomains != null && !limitingAppDomains.isEmpty())
		{
			// We will have to join the table..
			Join<ClientRole,Application> forApps = root.join("application");
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
		
		TypedQuery<ClientRole> q = em.createQuery(cq);

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
		
		List<ClientRole> listOfObjects = q.getResultList();
		return listOfObjects;
	}
}
