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
import com.v2solve.app.security.model.entities.ClientGroup;
import com.v2solve.app.security.model.entities.ClientGroupRole;
import com.v2solve.app.security.model.entities.ClientRole;
import com.v2solve.app.security.model.entities.ClientRolePermission;
import com.v2solve.app.security.model.entities.Permission;
import com.v2solve.app.security.model.entities.ResourceDomain;
import com.v2solve.app.security.model.entities.RoleScope;
import com.v2solve.app.security.sdk.PagingInformation;
import com.v2solve.app.security.sdk.relations.CreateClientGroupRoleRequest;
import com.v2solve.app.security.sdk.relations.CreateClientRolePermissionRequest;
import com.v2solve.app.security.sdk.relations.DeleteClientGroupRoleRequest;
import com.v2solve.app.security.sdk.relations.DeleteClientRolePermissionRequest;
import com.v2solve.app.security.sdk.relations.SearchClientGroupRoleRequest;
import com.v2solve.app.security.sdk.relations.SearchClientRolePermissionRequest;

import com.v2solve.app.security.utility.JPAUtils;
import com.v2solve.app.security.utility.StringUtils;


/**
 * This class contains data access logic for the relationship tables.. (such as group memberships, and role permissions etc) 
 * @author Saurin Magiawala
 *
 */
public class RelationDataLogic 
{
	
	/**
	 * Assigns a role to a client group.  
	 * @param em
	 * @param request
	 * @return - the newly created object
	 */
	public static ClientGroupRole createClientGroupRole(EntityManager em, CreateClientGroupRoleRequest request) 
	{
		// Lets check if an app identifier has been provided or not..
		Application app = null;
		String appIdentifier = request.getAppIdentifier();
		
		if (!StringUtils.isNullOrZeroLength(appIdentifier))
		{
			app = DatalogicUtils.findObject(em, Application.class, "appIdentifier", appIdentifier);
		}
		
		// Lets get the other information as required.
		String groupName    = request.getGroupName();
		String roleName   = request.getRoleName();
		String scopeName  = request.getScopeName();
		String domainName = request.getDomainName();
		
		if (StringUtils.isNullOrZeroLength(groupName) || StringUtils.isNullOrZeroLength(roleName))
			throw new DataLogicValidationException("Group and role name both must be provided.");
		
	    RoleScope rs = null;
	    ResourceDomain rd = null;
		ClientGroup cg = DatalogicUtils.findObject(em, ClientGroup.class, "name", groupName);
		ClientRole  cr = DatalogicUtils.findObject(em, ClientRole.class, "name", roleName);
		if (!StringUtils.isNullOrZeroLength(scopeName))
			rs = DatalogicUtils.findObject(em, RoleScope.class, "name", scopeName);
		if (!StringUtils.isNullOrZeroLength(domainName))
			rd = DatalogicUtils.findObject(em, ResourceDomain.class, "name", domainName);
		
		if (cg == null || cr == null)
			throw new DataLogicValidationException("Group or Role not found. " + groupName + " / " + roleName);
		
		
		ClientGroupRole objToCreate = new ClientGroupRole();
		objToCreate.setClientGroup(cg);
		objToCreate.setClientRole(cr);
		objToCreate.setApplication(app);
		objToCreate.setResourceDomain(rd);
		objToCreate.setRoleScope(rs);
		JPAUtils.createObject(em, objToCreate);
		return objToCreate;
	}


	/**
	 * Assigns a permission to a role (grants it to the role).
	 * @param em
	 * @param request
	 * @return - the newly created data object.
	 */
	public static ClientRolePermission createClientRolePermission (EntityManager em, CreateClientRolePermissionRequest request) 
	{
		// Lets check if an app identifier has been provided or not..
		Application app = null;
		String appIdentifier = request.getAppIdentifier();
		
		if (!StringUtils.isNullOrZeroLength(appIdentifier))
		{
			app = DatalogicUtils.findObject(em, Application.class, "appIdentifier", appIdentifier);
		}
		
		// Lets get the other information as required.
		String permissionName   = request.getPermissionName();
		String roleName         = request.getRoleName();
		String permissionValue  = request.getValue();
		
		if (StringUtils.isNullOrZeroLength(roleName) || StringUtils.isNullOrZeroLength(permissionName) || StringUtils.isNullOrZeroLength(permissionValue))
			throw new DataLogicValidationException("RoleName/PermissionName/Value all both must be provided.");
		
		Permission permission = DatalogicUtils.findObject(em, Permission.class, "name", permissionName);
		ClientRole  cr = DatalogicUtils.findObject(em, ClientRole.class, "name", roleName);
		
		if (permission == null || cr == null)
			throw new DataLogicValidationException("Role Name or Permission not found. " + roleName + " / " + permissionName);
		
		ClientRolePermission objToCreate = new ClientRolePermission();
		objToCreate.setPermission(permission);
		objToCreate.setClientRole(cr);
		objToCreate.setApplication(app);
		objToCreate.setValue(permissionValue);
		JPAUtils.createObject(em, objToCreate);
		return objToCreate;
	}
	
	
	
	/**
	 * Removes a role assignment from a Client Group.
	 * @param em
	 * @param request
	 * @return - the object that was removed, null if the object did not exist to begin with.
	 */
	public static ClientGroupRole deleteClientGroupRole(EntityManager em, DeleteClientGroupRoleRequest request) 
	{
		String key = request.getKey();
		if (StringUtils.isNullOrZeroLength(key))
			throw new DataLogicValidationException("Key for deleting the record must be provided.");
		// Since the keys are integers..
		Integer keyInt = Integer.decode(key);
		ClientGroupRole deletedObj = JPAUtils.deleteObject(em, keyInt, ClientGroupRole.class);
		return deletedObj;
	}
	
	

	/**
	 * Removes a permission assigment from a role (Ungrants a permission)
	 * @param em
	 * @param request
	 * @return - the object that was removed or null if it was not there to begin with.
	 */
	public static ClientRolePermission deleteClientRolePermission(EntityManager em, DeleteClientRolePermissionRequest request) 
	{
		String key = request.getKey();
		if (StringUtils.isNullOrZeroLength(key))
			throw new DataLogicValidationException("Key for deleting the record must be provided.");
		// Since the keys are integers..
		Integer keyInt = Integer.decode(key);
		ClientRolePermission deletedObj = JPAUtils.deleteObject(em, keyInt, ClientRolePermission.class);
		return deletedObj;
	}
	
	
	/**
	 * Searches clientGroupRoles based on information in the request.
	 * @param em
	 * @param request
	 * @param limitingAppDomains - limits the searches to those owned by these applications.
	 * @return - list of objects returned in the search.
	 */
	public static List<ClientGroupRole> searchClientGroupRoles (EntityManager em, SearchClientGroupRoleRequest request, List<String> limitingAppDomains)
	{
		CriteriaBuilder cb = em.getCriteriaBuilder();
		CriteriaQuery<ClientGroupRole> cq = cb.createQuery(ClientGroupRole.class);
		Root<ClientGroupRole> root = cq.from(ClientGroupRole.class);
		
		Predicate whereClause = null;
		
		if (!StringUtils.isNullOrZeroLength(request.getAppIdentifier()))
		{
			Join<ClientGroupRole, Application> forApp = root.join("application");
			Path<String> appId = forApp.get("appIdentifier");
			Predicate wC = cb.equal(appId, request.getAppIdentifier());
			whereClause = wC;
		}
		
		if (!StringUtils.isNullOrZeroLength(request.getGroupName()))
		{
			Join<ClientGroupRole, ClientGroup> forGroup = root.join("clientGroup");
			Path<String> groupNamePath = forGroup.get("name");
			Predicate wC = cb.equal(groupNamePath, request.getGroupName());
			if (whereClause == null)
				whereClause = wC;
			else
				whereClause = cb.and(whereClause,wC);
		}
		
		if (!StringUtils.isNullOrZeroLength(request.getRoleName()))
		{
			Join<ClientGroupRole, ClientRole> forRole = root.join("clientRole");
			Path<String> roleNamePath = forRole.get("name");
			Predicate wC = cb.equal(roleNamePath, request.getRoleName());
			if (whereClause == null)
				whereClause = wC;
			else
				whereClause = cb.and(whereClause,wC);
		}
		
		if (!StringUtils.isNullOrZeroLength(request.getScopeName()))
		{
			Join<ClientGroupRole, RoleScope> forRoleScope = root.join("roleScope");
			Path<String> roleScopePath = forRoleScope.get("name");
			Predicate wC = cb.equal(roleScopePath, request.getScopeName());
			if (whereClause == null)
				whereClause = wC;
			else
				whereClause = cb.and(whereClause,wC);
		}
		
		if (!StringUtils.isNullOrZeroLength(request.getDomainName()))
		{
			Join<ClientGroupRole, ResourceDomain> forResourceDomain = root.join("resourceDomain");
			Path<String> resourceDomainPath = forResourceDomain.get("name");
			Predicate wC = cb.equal(resourceDomainPath, request.getDomainName());
			if (whereClause == null)
				whereClause = wC;
			else
				whereClause = cb.and(whereClause,wC);
		}
		
		whereClause = DatalogicUtils.addLimitingClauseForApps(cb, limitingAppDomains, root, DatalogicUtils.APP_RELATIONSHIP_PROPERTY, DatalogicUtils.APP_IDENTIFIER_PROPERTY,whereClause);		
		
		if (whereClause != null)
			cq.where(whereClause);
		
		TypedQuery<ClientGroupRole> tq = em.createQuery(cq);
		
		PagingInformation pagingInfo = request.getPagingInfo();
		
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
		
		return tq.getResultList();
	}
	
	
	/**
	 * Searches the db for client role permissions using the data from the request object as search clause.
	 * @param em
	 * @param request
	 * @param limitingAppDomains - restricts the data to records which are owned by these applications
	 * @return - list of client role permission entries returned as a result of the search
	 */
	public static List<ClientRolePermission> searchClientRolePermissions (EntityManager em, SearchClientRolePermissionRequest request, List<String> limitingAppDomains)
	{
		CriteriaBuilder cb = em.getCriteriaBuilder();
		CriteriaQuery<ClientRolePermission> cq = cb.createQuery(ClientRolePermission.class);
		Root<ClientRolePermission> root = cq.from(ClientRolePermission.class);
		
		Predicate whereClause = null;
		
		if (!StringUtils.isNullOrZeroLength(request.getAppIdentifier()))
		{
			Join<ClientRolePermission, Application> forApp = root.join("application");
			Path<String> appId = forApp.get("appIdentifier");
			Predicate wC = cb.equal(appId, request.getAppIdentifier());
			whereClause = wC;
		}
		
		if (!StringUtils.isNullOrZeroLength(request.getPermissionName()))
		{
			Join<ClientRolePermission, Permission> forGroup = root.join("permission");
			Path<String> permissionNamePath = forGroup.get("name");
			Predicate wC = cb.equal(permissionNamePath, request.getPermissionName());
			if (whereClause == null)
				whereClause = wC;
			else
				whereClause = cb.and(whereClause,wC);
		}
		
		if (!StringUtils.isNullOrZeroLength(request.getRoleName()))
		{
			Join<ClientRolePermission, ClientRole> forRole = root.join("clientRole");
			Path<String> roleNamePath = forRole.get("name");
			Predicate wC = cb.equal(roleNamePath, request.getRoleName());
			if (whereClause == null)
				whereClause = wC;
			else
				whereClause = cb.and(whereClause,wC);
		}
		
		whereClause = DatalogicUtils.addLimitingClauseForApps(cb, limitingAppDomains, root, DatalogicUtils.APP_RELATIONSHIP_PROPERTY, DatalogicUtils.APP_IDENTIFIER_PROPERTY,whereClause);		
		
		if (whereClause != null)
			cq.where(whereClause);
		
		TypedQuery<ClientRolePermission> tq = em.createQuery(cq);
		
		PagingInformation pagingInfo = request.getPagingInfo();
		
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
		
		return tq.getResultList();
	}
	
}
