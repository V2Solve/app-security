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
import com.v2solve.app.security.model.entities.ResourceDomain;
import com.v2solve.app.security.model.entities.ResourceDomainType;
import com.v2solve.app.security.model.entities.RoleScope;
import com.v2solve.app.security.model.entities.ScopeType;
import com.v2solve.app.security.sdk.PagingInformation;
import com.v2solve.app.security.sdk.scopedomains.CreateDomainRequest;
import com.v2solve.app.security.sdk.scopedomains.CreateDomainTypeRequest;
import com.v2solve.app.security.sdk.scopedomains.CreateScopeRequest;
import com.v2solve.app.security.sdk.scopedomains.CreateScopeTypeRequest;
import com.v2solve.app.security.sdk.scopedomains.DeleteDomainRequest;
import com.v2solve.app.security.sdk.scopedomains.DeleteDomainTypeRequest;
import com.v2solve.app.security.sdk.scopedomains.DeleteScopeRequest;
import com.v2solve.app.security.sdk.scopedomains.DeleteScopeTypeRequest;
import com.v2solve.app.security.sdk.scopedomains.SearchDomainRequest;
import com.v2solve.app.security.sdk.scopedomains.SearchDomainTypeRequest;
import com.v2solve.app.security.sdk.scopedomains.SearchScopeRequest;
import com.v2solve.app.security.sdk.scopedomains.SearchScopeTypeRequest;

import com.v2solve.app.security.utility.JPAUtils;
import com.v2solve.app.security.utility.StringUtils;

public class DomainScopeDataLogic {

	public DomainScopeDataLogic() {
		// TODO Auto-generated constructor stub
	}

	
	public static ResourceDomainType deleteResourceDomainType(EntityManager em, DeleteDomainTypeRequest request) 
	throws IllegalAccessException, IllegalArgumentException, InvocationTargetException, InstantiationException 
	{
		ResourceDomainType deletedObj = null;
		List<ResourceDomainType> listOfObjects = JPAUtils.findObjects(em, ResourceDomainType.class, "name", request.getName()); 
				
		if (listOfObjects != null && listOfObjects.isEmpty()==false)
		{
			for (ResourceDomainType obj : listOfObjects)
			{
				deletedObj = JPAUtils.deleteObject(em, obj.getId(), ResourceDomainType.class);
				if (deletedObj == null)
					throw new DataLogicValidationException("Could not deleted the record: " + request.getName());
			}
		}
		
		return deletedObj;
	}
	
	public static ScopeType deleteScopeType(EntityManager em, DeleteScopeTypeRequest request) 
	throws IllegalAccessException, IllegalArgumentException, InvocationTargetException, InstantiationException 
	{
		ScopeType deletedObj = null;
		List<ScopeType> listOfObjects = JPAUtils.findObjects(em, ScopeType.class, "name", request.getName()); 
				
		if (listOfObjects != null && listOfObjects.isEmpty()==false)
		{
			for (ScopeType obj : listOfObjects)
			{
				deletedObj = JPAUtils.deleteObject(em, obj.getId(), ScopeType.class);
				if (deletedObj == null)
					throw new DataLogicValidationException("Could not deleted the record: " + request.getName());
			}
		}
		
		return deletedObj;
	}
	
	
	/**
	 * Creates the Scope type in the system.
	 * @param em
	 * @param request
	 * @return
	 * @throws IllegalAccessException
	 * @throws IllegalArgumentException
	 * @throws InvocationTargetException
	 * @throws InstantiationException
	 */
	public static ScopeType createScopeType(EntityManager em, CreateScopeTypeRequest request) 
	throws IllegalAccessException, IllegalArgumentException, InvocationTargetException, InstantiationException 
	{
		// Lets check if an app identifier has been provided or not..
		Application app = null;
		String appIdentifier = request.getAppIdentifier();
		
		if (!StringUtils.isNullOrZeroLength(appIdentifier))
		{
			app = DatalogicUtils.findObject(em, Application.class, "appIdentifier", appIdentifier);
		}
		
		ScopeType objToCreate = new ScopeType ();
		objToCreate.setName(request.getName());
		if (app != null)
		objToCreate.setApplication(app);
		JPAUtils.createObject(em, objToCreate);
		return objToCreate;
	}

	
	/**
	 * Creates the Resource Domain Type in the system.
	 * @param em
	 * @param request
	 * @return
	 * @throws IllegalAccessException
	 * @throws IllegalArgumentException
	 * @throws InvocationTargetException
	 * @throws InstantiationException
	 */
	public static ResourceDomainType createResourceDomainType(EntityManager em, CreateDomainTypeRequest request) 
	throws IllegalAccessException, IllegalArgumentException, InvocationTargetException, InstantiationException 
	{
		// Lets check if an app identifier has been provided or not..
		Application app = null;
		String appIdentifier = request.getAppIdentifier();
		
		if (!StringUtils.isNullOrZeroLength(appIdentifier))
		{
			app = DatalogicUtils.findObject(em, Application.class, "appIdentifier", appIdentifier);
		}
		
		ResourceDomainType objToCreate = new ResourceDomainType ();
		objToCreate.setName(request.getName());
		if (app != null)
		objToCreate.setApplication(app);
		JPAUtils.createObject(em, objToCreate);
		return objToCreate;
	}

	/**
	 * Searches the Resource Domain Types defined in the system.
	 * @param em
	 * @param request
	 * @param limitingAppDomains
	 * @return
	 */
	public static List<ResourceDomainType> searchDomainTypes(EntityManager em, SearchDomainTypeRequest request,
			List<String> limitingAppDomains) 
	{
		CriteriaBuilder cb = em.getCriteriaBuilder();
		CriteriaQuery<ResourceDomainType> cq = cb.createQuery(ResourceDomainType.class);
		Root<ResourceDomainType> root = cq.from(ResourceDomainType.class);
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
			Join<ResourceDomainType,Application> forApps = root.join("application");
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
		
		TypedQuery<ResourceDomainType> q = em.createQuery(cq);
	
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
		
		List<ResourceDomainType> listOfObjects = q.getResultList();
		return listOfObjects;
	}

	
	/**
	 * Searches the types of scope defined in the system.
	 * @param em
	 * @param request
	 * @param limitingAppDomains
	 * @return
	 */
	public static List<ScopeType> searchScopeTypes(EntityManager em, SearchScopeTypeRequest request,
			List<String> limitingAppDomains) 
	{
		CriteriaBuilder cb = em.getCriteriaBuilder();
		CriteriaQuery<ScopeType> cq = cb.createQuery(ScopeType.class);
		Root<ScopeType> root = cq.from(ScopeType.class);
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
			Join<ScopeType,Application> forApps = root.join("application");
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
		
		TypedQuery<ScopeType> q = em.createQuery(cq);

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
		
		List<ScopeType> listOfObjects = q.getResultList();
		return listOfObjects;
	}


	/**
	 * Creates a domain..
	 * @param em
	 * @param request
	 * @return
	 * @throws IllegalAccessException
	 * @throws IllegalArgumentException
	 * @throws InvocationTargetException
	 * @throws InstantiationException
	 */
	public static ResourceDomain createResourceDomain(EntityManager em, CreateDomainRequest request)
	throws IllegalAccessException, IllegalArgumentException, InvocationTargetException, InstantiationException
	{
		// Lets check if an app identifier has been provided or not..
		Application app = null;
		ResourceDomain parentDomain = null;
		ResourceDomainType rdt = null;
		
		String appIdentifier = request.getAppIdentifier();
		
		if (!StringUtils.isNullOrZeroLength(appIdentifier))
		{
			app = DatalogicUtils.findObject(em, Application.class, "appIdentifier", appIdentifier);
		}
		
		if (!StringUtils.isNullOrZeroLength(request.getDomainType()))
		{
			rdt = DatalogicUtils.findObject(em, ResourceDomainType.class, "name", request.getDomainType());
			if (rdt == null)
				throw new DataLogicValidationException("DomainType: "+request.getDomainType() + " not found.");
		}
		else
		{
			throw new DataLogicValidationException("DomainType is a required field which is not in the request.");
		}
		
		if (!StringUtils.isNullOrZeroLength(request.getParentDomain()))
		{
			parentDomain = DatalogicUtils.findObject(em, ResourceDomain.class, "name", request.getParentDomain());
			if (parentDomain == null)
				throw new DataLogicValidationException("Domain: "+request.getParentDomain() + " not found.");
		}
		
		ResourceDomain objToCreate = new ResourceDomain ();
		objToCreate.setName(request.getName());
		objToCreate.setApplication(app);
		objToCreate.setDescription(request.getDescription());
		objToCreate.setResourceDomain(parentDomain);
		objToCreate.setResourceDomainType(rdt);
		JPAUtils.createObject(em, objToCreate);
		return objToCreate;
	}

	public static ResourceDomain deleteResourceDomain(EntityManager em, DeleteDomainRequest request) 
	throws IllegalAccessException, IllegalArgumentException, InvocationTargetException, InstantiationException 
	{
		ResourceDomain deletedObj = null;
		List<ResourceDomain> listOfObjects = JPAUtils.findObjects(em, ResourceDomain.class, "name", request.getName()); 
				
		if (listOfObjects != null && listOfObjects.isEmpty()==false)
		{
			for (ResourceDomain obj : listOfObjects)
			{
				deletedObj = JPAUtils.deleteObject(em, obj.getId(), ResourceDomain.class);
				if (deletedObj == null)
					throw new DataLogicValidationException("Could not deleted the record: " + request.getName());
			}
		}
		
		return deletedObj;
	}

	/**
	 * Searches the Resource Domain Types defined in the system.
	 * @param em
	 * @param request
	 * @param limitingAppDomains
	 * @return
	 */
	public static List<ResourceDomain> searchResourceDomains(EntityManager em, SearchDomainRequest request,
			List<String> limitingAppDomains) 
	{
		CriteriaBuilder cb = em.getCriteriaBuilder();
		CriteriaQuery<ResourceDomain> cq = cb.createQuery(ResourceDomain.class);
		Root<ResourceDomain> root = cq.from(ResourceDomain.class);
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
			Join<ResourceDomain,Application> forApps = root.join("application");
			Path<String> appIdentifierProp = forApps.get("appIdentifier");
			In<String> inClause = cb.in(appIdentifierProp);
			inApps = JPAUtils.buildInvalues(inClause, limitingAppDomains);
			if (finalPredicate != null)
				finalPredicate = cb.and(finalPredicate,inApps);
			else
				finalPredicate = inApps;
		}
		
		
		if (!StringUtils.isNullOrZeroLength(request.getDomainType()))
		{
			// We will have to join the table..
			Join<ResourceDomain,ResourceDomainType> join = root.join("resourceDomainType");
			Path<String> joinIdentifierProp = join.get("name");
			Predicate joinCondition = cb.equal(joinIdentifierProp,request.getDomainType());
			if (finalPredicate != null)
				finalPredicate = cb.and(finalPredicate,joinCondition);
			else
				finalPredicate = joinCondition;
		}
		
		if (finalPredicate != null)
		cq.where(finalPredicate);
		
		TypedQuery<ResourceDomain> q = em.createQuery(cq);
		
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
		
		List<ResourceDomain> listOfObjects = q.getResultList();
		return listOfObjects;
	}


	public static RoleScope createRoleScope(EntityManager em, CreateScopeRequest request)
	throws IllegalAccessException, IllegalArgumentException, InvocationTargetException, InstantiationException
	{
		// Lets check if an app identifier has been provided or not..
		Application app = null;
		ScopeType rdt = null;
		
		String appIdentifier = request.getAppIdentifier();
		
		if (!StringUtils.isNullOrZeroLength(appIdentifier))
		{
			app = DatalogicUtils.findObject(em, Application.class, "appIdentifier", appIdentifier);
		}
		
		if (!StringUtils.isNullOrZeroLength(request.getScopeType()))
		{
			rdt = DatalogicUtils.findObject(em, ScopeType.class, "name", request.getScopeType());
			if (rdt == null)
				throw new DataLogicValidationException("ScopeType: "+request.getScopeType() + " not found.");
		}
		else
		{
			throw new DataLogicValidationException("ScopeType is a required field which is not in the request.");
		}
		
		RoleScope objToCreate = new RoleScope ();
		objToCreate.setName(request.getName());
		objToCreate.setApplication(app);
		objToCreate.setDescription(request.getDescription());
		objToCreate.setScopeType(rdt);
		objToCreate.setScopeValue(request.getValue());
		JPAUtils.createObject(em, objToCreate);
		return objToCreate;
	}

	public static RoleScope deleteRoleScope(EntityManager em, DeleteScopeRequest request) 
	throws IllegalAccessException, IllegalArgumentException, InvocationTargetException, InstantiationException 
	{
		RoleScope deletedObj = null;
		List<RoleScope> listOfObjects = JPAUtils.findObjects(em, RoleScope.class, "name", request.getName()); 
				
		if (listOfObjects != null && listOfObjects.isEmpty()==false)
		{
			for (RoleScope obj : listOfObjects)
			{
				deletedObj = JPAUtils.deleteObject(em, obj.getId(), RoleScope.class);
				if (deletedObj == null)
					throw new DataLogicValidationException("Could not deleted the record: " + request.getName());
			}
		}
		
		return deletedObj;
	}


	public static List<RoleScope> searchRoleScopes(EntityManager em, SearchScopeRequest request,
			List<String> limitingAppDomains) 
	{
		CriteriaBuilder cb = em.getCriteriaBuilder();
		CriteriaQuery<RoleScope> cq = cb.createQuery(RoleScope.class);
		Root<RoleScope> root = cq.from(RoleScope.class);
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
			Join<RoleScope,Application> forApps = root.join("application");
			Path<String> appIdentifierProp = forApps.get("appIdentifier");
			In<String> inClause = cb.in(appIdentifierProp);
			inApps = JPAUtils.buildInvalues(inClause, limitingAppDomains);
			if (finalPredicate != null)
				finalPredicate = cb.and(finalPredicate,inApps);
			else
				finalPredicate = inApps;
		}
		
		
		if (!StringUtils.isNullOrZeroLength(request.getScopeType()))
		{
			// We will have to join the table..
			Join<RoleScope,ScopeType> join = root.join("scopeType");
			Path<String> joinIdentifierProp = join.get("name");
			Predicate joinCondition = cb.equal(joinIdentifierProp,request.getScopeType());
			if (finalPredicate != null)
				finalPredicate = cb.and(finalPredicate,joinCondition);
			else
				finalPredicate = joinCondition;
		}
		
		if (finalPredicate != null)
		cq.where(finalPredicate);
		
		TypedQuery<RoleScope> q = em.createQuery(cq);
		
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
		
		List<RoleScope> listOfObjects = q.getResultList();
		return listOfObjects;
	}
}
