package com.v2solve.app.security.securitymodel;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import lombok.Data;


/**
 * This is a Client Security Context that manages the entitlements of a client, and answers questions pertaining
 * to the permissions that the client has/or does not have.
 * @author Saurin Magiawala
 *
 */
@Data
public class AppSecurityContextImpl implements java.io.Serializable,AppSecurityContext
{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	// The client for which this SecurityContext is present.
	AppClient client;
	
	// The list of Permissions that are present for this client.
	List<Permit> permissions;
	
	// Key is DomainKey for outer hashmap
	HashMap<String, HashMap<String,Permit>> allowedPermissionsOnDomain = new HashMap<>();
	
	//Key is domainKey name for outer hashmap
	HashMap<String, HashMap<String,Permit>> deniedPermissionsOnDomain = new HashMap<>();
	
	HashMap<String, Permit> allowedPermissions = new HashMap<>();
	HashMap<String, Permit> deniedPermissions = new HashMap<>();
	
	// Key is the domainKey for the domain..
	HashMap<String, Domain> involvedDomains = new HashMap<>();
	
	// A list of groups which because of which user has permits..
	// the key of the hashmap is the GroupName
	HashMap<String, List<Permit>> permitsBecauseOfGroup = new HashMap<>();
	
	// A list of roles, because of which the user has permits.
	// The key of the hashmap is the rolename..
	HashMap<String, List<Permit>> permitsBecauseOfRoles = new HashMap<>();
			
	public AppSecurityContextImpl (AppClient client,List<Permit> permissions)
	{
		this.client = client;
		this.permissions = permissions;
		readyData(); // Lets ready the data for quick decision making..
	}
	
	
	void addPermitToRoleAndGroupList (Permit permit)
	{
		String roleName  = permit.getRole();
		String groupName = permit.getGroup();
		List<Permit> permits =  permitsBecauseOfGroup.get(groupName);
		if (permits == null)
		{
			permits = new ArrayList<>();
			permitsBecauseOfGroup.put(groupName,permits);
		}
		permits.add(permit);
		
		permits =  permitsBecauseOfRoles.get(roleName);
		if (permits == null)
		{
			permits = new ArrayList<>();
			permitsBecauseOfRoles.put(roleName,permits);
		}
		permits.add(permit);
	}
	
	void readyData ()
	{
		if (permissions != null)
		{
			for (Permit permit : permissions)
			{
				addPermitToRoleAndGroupList(permit);
				
				Domain d = permit.getDomain();
				String permitKey = permit.getPermitKey().getKey();
				if (d != null)
				{
					involvedDomains.put(d.getDomainKey(), d);	// Lets store the domain for faster retrieval next time..
					
					if (permit.isAllowed())
					{	
						HashMap<String,Permit> domains = allowedPermissionsOnDomain.get(permitKey);
						
						if (domains == null)
						{
							domains= new HashMap<>();
							allowedPermissionsOnDomain.put(permitKey, domains);
						}
						
						domains.put(d.getDomainKey(), permit);
					}	
					else
					{
						HashMap<String,Permit> domains = deniedPermissionsOnDomain.get(permitKey);
						
						if (domains == null)
						{
							domains= new HashMap<>();
							deniedPermissionsOnDomain.put(permitKey, domains);
						}
						
						domains.put(d.getDomainKey(), permit);
					}
				}
				else
				{
					if (permit.isAllowed())
						allowedPermissions.put(permitKey,permit);
					else
						deniedPermissions.put(permitKey, permit);
				}
			}
		}
	}
	
	
	/**
	 * returns the client id for which this SecurityContext has been created.
	 * @return String - the client identifier.
	 */
	public AppClient getClient ()
	{
		return client;
	}
	
	
	/**
	 * This is the key Crucial Method, which determines, whether a permission is allowed based on action, resource and or domain..
	 * @param action
	 * @param resource
	 * @param domain
	 * @return
	 */
	boolean isAllowed (String action,String resource,Domain domain)
	{
		PermitKey pkey = new PermitKey(action, resource);
		String permitKey = pkey.getKey();
		
		// Lets see if there is any root level permissions for deny..
		if (deniedPermissions.containsKey(permitKey))
			return false; // Explicit Denial
		
		// Now let us find out if there is any domain level deny for this domain..
		if (domain != null && deniedPermissionsOnDomain.size() > 0)
		{
			for (String domainKey: deniedPermissionsOnDomain.keySet())
			{
				Domain d = involvedDomains.get(domainKey);
				HashMap<String, Permit> deniedPermits = deniedPermissionsOnDomain.get(domainKey);
				if (deniedPermits != null)
				{
					for (Permit p: deniedPermits.values())
					{
						if (p.getPermitKey().getKey().equals(permitKey))
						{
							// Lets check if we have to give an explicit Denial
							if (p.isPropogate())
							{
								if (d.isPartOfHiearchy(domain.getName()))
								{
									return false;
								}
							}
							else
							{
								if (d.getName().equals(domain.getName()))
									return false;
							}
						}
					}
				}
			}
		}
		
		// Okay now lets check if there is explicit allowed at a global level.
		if (allowedPermissions.containsKey(permitKey))
			return true;  // allowed without respect to any resourcedomain
		
		if (domain != null && allowedPermissionsOnDomain.size() > 0)
		{
			for (String domainKey: allowedPermissionsOnDomain.keySet())
			{
				Domain d = involvedDomains.get(domainKey);
				HashMap<String, Permit> allowedPermits = allowedPermissionsOnDomain.get(domainKey);
				if (allowedPermits != null)
				{
					for (Permit p: allowedPermits.values())
					{
						if (p.getPermitKey().getKey().equals(permitKey))
						{
							// Lets check if we have to give an explicit Denial
							if (p.isPropogate())
							{
								if (d.isPartOfHiearchy(domain.getName()))
								{
									return true;
								}
							}
							else
							{
								if (d.getName().equals(domain.getName()))
									return true;
							}
						}
					}
				}
			}
		}
		
		return false;	// Did not find a single record of allowal, anywhere.
	}
	
	
	/**
	 * Returns true, if the client has permission to perform the action, on the resource.
	 * @param action
	 * @param resource
	 * @return
	 */
	public boolean hasPermission (String action,String resource)	
	{
		Domain resourceDomain = null;
		return hasPermission(action, resource, resourceDomain);
	}
	
	
	/**
	 * Throws PermissionException, if the client does not have permission to perform the action, on the resource.
	 * @param action
	 * @param resource
	 * @return
	 */
	public void hasPermissionThrowException (String action,String resource)	
	{
		Domain resourceDomain = null;
		if (!hasPermission(action, resource, resourceDomain))
		{
			throw new PermissionException("No permission for action: " + action + " on resource: " + resource);
		}
	}
	
	/**
	 * Throws permission exception, if the client does not have permission to perform the action, on the resource for the resource domain.
	 * @param action
	 * @param resource
	 * @param resourceDomain
	 * @return
	 */
	public void hasPermissionThrowException (String action,String resource,Domain resourceDomain)
	{
		if (!hasPermission(action, resource, resourceDomain))
		{
			if (resourceDomain != null)
			throw new PermissionException("No permission for action: " + action + " on resource: " + resource + " at domain: " + resourceDomain);
			else
			throw new PermissionException("No permission for action: " + action + " on resource: " + resource);
		}
	}
	
	/**
	 * Returns true, if the client has permission to perform the action, on the resource for the resource domain.
	 * @param action
	 * @param resource
	 * @param resourceDomain
	 * @return
	 */
	public boolean hasPermission (String action,String resource,Domain resourceDomain)
	{
		// Lets check for super permissions..
		boolean allowed = isAllowed(PermitKey.ALL_ACTIONS, PermitKey.ALL_RESOURCES, resourceDomain);
		if (allowed) 
			return allowed;
		
		allowed = isAllowed(action, PermitKey.ALL_RESOURCES, resourceDomain);
		if (allowed) 
			return allowed;
		
		allowed = isAllowed(PermitKey.ALL_ACTIONS, resource, resourceDomain);
		if (allowed) 
			return allowed;

		return isAllowed(action,resource,resourceDomain);
	}
	
	
	/**
	 * Throws an exception if the permission is not present, but if it is, then returns the roles because of which it is applicable..
	 * @param action
	 * @param resource
	 * @param resourceDomain
	 * @return
	 */
	public List<String> hasPermissionReturnRoles(String action,String resource,Domain resourceDomain)
	{
		PermitKey pkey = new PermitKey(action, resource);
		String permitKey = pkey.getKey();
		hasPermissionThrowException(action, resource, resourceDomain);
		HashMap<String, String> collection = new HashMap<>();
		
		// Cool so the permission is present. 
		for (Permit p: permissions)
		{
			PermitKey permissionKey = p.getPermitKey();
			
			if (permissionKey.getKey().equals(permitKey))
			{
				if (p.getDomain() != null && resourceDomain == null)
					continue;
				else if (p.getDomain() == null && resourceDomain != null)
					continue;
				if (resourceDomain != null && p.getDomain() != null && !resourceDomain.getDomainKey().equals(p.getDomain().getDomainKey()))
					continue;

				collection.put(p.getRole(),"Y");
			}
			else if (permissionKey.isSuperPermit() || permissionKey.areAllActionsAllowedOnResource(resource) || permissionKey.areAllResourcesIncludedForAction(action))
			{
				collection.put(p.getRole(),"Y");	// Its a role which is giving it super permission, thats why..
			}
		}
		
		List<String> roles = new ArrayList<>();
		roles.addAll(collection.keySet());
		return roles;
	}
	
	
	/**
	 * Returns the groups because of which the permission is available at the resource Domain level if any..
	 * @param action
	 * @param resource
	 * @param resourceDomain
	 * @return
	 */
	public List<String> hasPermissionReturnGroups (String action,String resource,Domain resourceDomain)
	{
		PermitKey pkey = new PermitKey(action, resource);
		String permitKey = pkey.getKey();
		hasPermissionThrowException(action, resource, resourceDomain);
		HashMap<String, String> collection = new HashMap<>();
		
		// Cool so the permission is present. 
		for (Permit p: permissions)
		{
			PermitKey permissionKey = p.getPermitKey();
			
			if (permissionKey.getKey().equals(permitKey))
			{
				if (p.getDomain() != null && resourceDomain == null)
					continue;
				else if (p.getDomain() == null && resourceDomain != null)
					continue;
				if (resourceDomain != null && p.getDomain() != null && !resourceDomain.getDomainKey().equals(p.getDomain().getDomainKey()))
					continue;

				collection.put(p.getGroup(),"Y");
			}
			else if (permissionKey.isSuperPermit() || permissionKey.areAllActionsAllowedOnResource(resource) || permissionKey.areAllResourcesIncludedForAction(action))
			{
				collection.put(p.getGroup(),"Y");	// Its a role which is giving it super permission, thats why..
			}
		}
		
		List<String> groups = new ArrayList<>();
		groups.addAll(collection.keySet());
		return groups;
	}

	
	/**
	 * Returns the groups because of which the permission is available at the resource Domain level if any..
	 * @param action
	 * @param resource
	 * @param resourceDomain
	 * @return
	 */
	public List<Scope> hasPermissionReturnScopes (String action,String resource,Domain resourceDomain)
	{
		PermitKey pkey = new PermitKey(action, resource);
		String permitKey = pkey.getKey();
		hasPermissionThrowException(action, resource, resourceDomain);
		HashMap<String, Scope> collection = new HashMap<>();
		
		// Cool so the permission is present. 
		for (Permit p: permissions)
		{
			if (p.getPermitKey().getKey().equals(permitKey))
			{
				if (p.getDomain() != null && resourceDomain == null)
					continue;
				else if (p.getDomain() == null && resourceDomain != null)
					continue;
				if (resourceDomain != null && p.getDomain() != null && !resourceDomain.getDomainKey().equals(p.getDomain().getDomainKey()))
					continue;

				if (p.getScope() != null)
				collection.put(p.getScope().getScopeKey(),p.getScope());
			}
		}
		
		List<Scope> scopes = new ArrayList<>();
		scopes.addAll(collection.values());
		return scopes;
	}
	
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
	public void hasPermissionThrowExceptionIfNotInScope (String action,String resource,Domain resourceDomain,Scope scope)
	{
		boolean permission = hasPermissionInScope(action, resource, resourceDomain, scope);
		if (!permission)
		{
			if (resourceDomain != null)
			throw new PermissionException("No permission for action: " + action + " on resource: " + resource + " at domain: " + resourceDomain + " for scope: " + scope);
			else
			throw new PermissionException("No permission for action: " + action + " on resource: " + resource + " for scope: " + scope);
		}
	}


	/**
	 * Returns true if the permission is available in a globally for the scope. Otherwise false.
	 * Does not throw any exception if permission is not available.
	 * @param action
	 * @param resource
	 * @param scope
	 * @return
	 */
	public boolean hasPermissionInScope(String action, String resource, Scope scope)
	{
		Domain resourceDomain = null;
		return hasPermissionInScope(action, resource, resourceDomain, scope);
	}
	
	/**
	 * Returns true, if the permission is available for that scope.. otherwise false, but does not throw an exception if permission is not present.
	 * @param action
	 * @param resource
	 * @param resourceDomain
	 * @param allScope
	 * @return
	 */
	public boolean hasPermissionInScope(String action, String resource, Domain resourceDomain, Scope scope) 
	{
		List<Scope> scopes = hasPermissionReturnScopes(action, resource, resourceDomain);
		List<String> valuesToCompare = scope.getValueTokens();
		
		if (scopes != null && !scopes.isEmpty())
		{
			for (Scope s: scopes)
			{
				if (s.getScopeType().equals(scope.getScopeType()) && s.getScopeName().equals(scope.getScopeName()))
				{
					List<String> scopeValues = s.getValueTokens();
					for (String s1: scopeValues)
					{
						for (String s2: valuesToCompare)
						{
							if (s1.equals(s2))
								return true;	// Its allowed !
						}
					}
				}
			}
		}
		else
		{
			return true;	// So there is no scope limitation..
		}
	
		return false;
	}

	
	/**
	 * Returns true if there is any permission that the client has because of this group.
	 * in short if the client has been assigned this group. 
	 * @param groupName
	 * @return
	 */
	public boolean hasGroup(String groupName) 
	{
		return permitsBecauseOfGroup.containsKey(groupName);
	}
	
	/**
	 * Returns true if there is any permission that the client has because of this role.
	 * in short if the client has been assigned this role.
	 * @param roleName
	 * @return
	 */
	public boolean hasRole(String roleName) 
	{
		return permitsBecauseOfRoles.containsKey(roleName);
	}


	/**
	 * Returns a list of domains, if there is no permission which does not limit the domain.
	 * if there exist such a permission which provides unlimited domain access, this method returns empty collection
	 * @param action
	 * @param resource
	 * @param domainType
	 * @return
	 */
	public List<String> hasPermissionReturnLimitingDomains(String action, String resource, String domainType) 
	{
		PermitKey pkey = new PermitKey(action, resource);
		String permitKey = pkey.getKey();
		hasPermissionThrowException(action, resource);
		HashMap<String, String> collection = new HashMap<>(); // Collecting the domain names here..
		
		// Cool so the permission is present. 
		for (Permit p: permissions)
		{
			PermitKey permissionKey = p.getPermitKey();
			
			if (permissionKey.getKey().equals(permitKey) || permissionKey.isSuperPermit() || permissionKey.areAllActionsAllowedOnResource(resource) || permissionKey.areAllResourcesIncludedForAction(action))
			{
				// Lets check if it has a domain.
				if (p.getDomain() != null && p.getDomain().getDomainType().equals(domainType)) 
					collection.put(p.getDomain().getName(),"Y");
				else
				{
					// Well it is a permission which does not have a limiting domain associated with it..
					// so we must return an empty list.
					collection.clear();
					break;
				}
			}
		}
		
		List<String> domains = new ArrayList<>();
		domains.addAll(collection.values());
		return domains;
	}
	
}
