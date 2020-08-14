package com.v2solve.app.security.securitymodel;

import java.util.List;

/**
 * This interface represents a security context that will answer security Questions.
 * @author Saurin Magiawala
 *
 */
public interface AppSecurityContext {

	/**
	 * returns the client id for which this SecurityContext has been created.
	 * @return String - the client identifier.
	 */
	public AppClient getClient ();
	
	
	/**
	 * Returns true, if the client has permission to perform the action, on the resource.
	 * @param action
	 * @param resource
	 * @return
	 */
	public boolean hasPermission (String action,String resource);
	
	
	/**
	 * Throws PermissionException, if the client does not have permission to perform the action, on the resource.
	 * @param action
	 * @param resource
	 * @return
	 */
	public void hasPermissionThrowException (String action,String resource);	
	
	
	
	/**
	 * Throws permission exception, if the client does not have permission to perform the action, on the resource for the resource domain.
	 * @param action
	 * @param resource
	 * @param resourceDomain
	 * @return
	 */
	public void hasPermissionThrowException (String action,String resource,Domain resourceDomain);
	
	
	
	
	/**
	 * Returns true, if the client has permission to perform the action, on the resource for the resource domain.
	 * @param action
	 * @param resource
	 * @param resourceDomain
	 * @return
	 */
	public boolean hasPermission (String action,String resource,Domain resourceDomain);
	
	
	
	/**
	 * Throws an exception if the permission is not present, but if it is, then returns the roles because of which it is applicable..
	 * @param action
	 * @param resource
	 * @param resourceDomain
	 * @return
	 */
	public List<String> hasPermissionReturnRoles(String action,String resource,Domain resourceDomain);
	
	
	/**
	 * Returns the groups because of which the permission is available at the resource Domain level if any..
	 * @param action
	 * @param resource
	 * @param resourceDomain
	 * @return
	 */
	public List<String> hasPermissionReturnGroups (String action,String resource,Domain resourceDomain);
	
	
	
	/**
	 * Returns the scopes because of which the permission is available at the resource Domain level if any..
	 * @param action
	 * @param resource
	 * @param resourceDomain
	 * @return
	 */
	public List<Scope> hasPermissionReturnScopes (String action,String resource,Domain resourceDomain);
	
	
	
	
	/**
	 * Throws an exception if the permission is not available for the resource at the domain, but additionally also checks 
	 * that the scope of the permission matches values in the scope provided. Even if the permission is available but not at the correct scope
	 * then also an exception is thrown.
	 * @param action
	 * @param resource
	 * @param resourceDomain
	 * @return
	 * @throws PermissionException
	 */
	public void hasPermissionThrowExceptionIfNotInScope (String action,String resource,Domain resourceDomain,Scope scope);
	

	/**
	 * Returns true if the permission is available in a globally for the scope. Otherwise false.
	 * Does not throw any exception if permission is not available.
	 * @param action
	 * @param resource
	 * @param scope
	 * @return
	 */
	public boolean hasPermissionInScope(String action, String resource, Scope scope);
	
	
	/**
	 * Returns true, if the permission is available for that scope.. otherwise false, but does not throw an exception if permission is not present.
	 * @param action
	 * @param resource
	 * @param resourceDomain
	 * @param allScope
	 * @return
	 */
	public boolean hasPermissionInScope(String action, String resource, Domain resourceDomain, Scope scope); 
	

	
	/**
	 * Returns true if there is any permission that the client has because of this group.
	 * in short if the client has been assigned this group. 
	 * @param groupName
	 * @return
	 */
	public boolean hasGroup(String groupName); 
	
	
	
	/**
	 * Returns true if there is any permission that the client has because of this role.
	 * in short if the client has been assigned this role.
	 * @param roleName
	 * @return
	 */
	public boolean hasRole(String roleName); 
	

	/**
	 * Returns a list of domains, if there is no permission which does not limit the domain.
	 * if there exist such a permission which provides unlimited domain access, this method returns empty collection
	 * @param action
	 * @param resource
	 * @param domainType
	 * @return
	 */
	public List<String> hasPermissionReturnLimitingDomains(String action, String resource, String domainType);
	
	
	/**
	 * This function checks to make sure that there is no limiting domain for this kind of access..
	 * if there is then it throws a permission exception.
	 * @param action
	 * @param resource
	 * @param domainType
	 */
	public void checkNoLimitingDomain (String action, String resource,String domainType);


	/*
	 * Returns all the domain names where there is some involvement in some fashion whatsover.
	 * filters by the domain type..
	 */
	public List<String> getInvolvedDomains(String domainType);
	
}
