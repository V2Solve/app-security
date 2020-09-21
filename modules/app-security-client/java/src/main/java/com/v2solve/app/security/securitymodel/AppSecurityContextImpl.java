package com.v2solve.app.security.securitymodel;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.StringTokenizer;

import org.springframework.util.StringUtils;

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

	// The client whose security context this is
	AppClient client;
	
	// The list of Permissions that are present for this client.
	List<Permit> permissions;
	
	// Key is permitkey for outer hashmap, and domain key for inner hashMap.
	HashMap<String, HashMap<String,List<Permit>>> allowedPermissionsOnDomain = new HashMap<>();
	
	//Key is permitKey name for outer hashmap and domain Key for inner hashmap
	HashMap<String, HashMap<String,List<Permit>>> deniedPermissionsOnDomain = new HashMap<>();
	
	HashMap<String, Permit> allowedPermissions = new HashMap<>();
	HashMap<String, Permit> deniedPermissions = new HashMap<>();
	
	// Key is the domainKey for the domain..
	HashMap<String, Domain> involvedDomains = new HashMap<>();
	
	
	// Quick reference map to get a list of permission on domain. The key to the map is the domainKey.
	HashMap<String, List<Permit>> ApermissionsOnDomains = new HashMap<>();
	HashMap<String, List<Permit>> DpermissionsOnDomains = new HashMap<>();
	
	// Key to the map is permitKey Hashmap keys are domains..
	HashMap<String, HashMap<String,String>> domainsHavingPermit   = new HashMap<>();
	
	
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
	
	void addPermitToDomainMap (Permit permit)
	{
		if (permit.getDomain() != null)
		{
			Domain d= permit.getDomain();
			
			involvedDomains.put(d.getDomainKey(), d);	// Lets store the domain for faster retrieval next time..
			
			HashMap<String, String> domainNames = domainsHavingPermit.get(permit.getPermitKey().getKey());
			if (domainNames == null)
			{
				domainNames = new HashMap<>();
				domainsHavingPermit.put(permit.getPermitKey().getKey(), domainNames);
			}
			domainNames.put(d.getDomainKey(), d.getName());
			
			
			if (permit.isAllowed())
			{
				List<Permit> permits = ApermissionsOnDomains.get(d.getDomainKey());
				
				if (permits == null)
				{
					permits = new ArrayList<>();
					ApermissionsOnDomains.put(d.getDomainKey(), permits);
				}
				
				permits.add(permit);
			}
			else
			{
				List<Permit> permits = DpermissionsOnDomains.get(d.getDomainKey());
				
				if (permits == null)
				{
					permits = new ArrayList<>();
					DpermissionsOnDomains.put(d.getDomainKey(), permits);
				}
				
				permits.add(permit);
			}
		}
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
				addPermitToDomainMap(permit);
				
				Domain d = permit.getDomain();
				String permitKey = permit.getPermitKey().getKey();
				
				if (d != null)
				{
					if (permit.isAllowed())
					{	
						HashMap<String,List<Permit>> domains = allowedPermissionsOnDomain.get(permitKey);
						
						if (domains == null)
						{
							domains= new HashMap<>();
							allowedPermissionsOnDomain.put(permitKey, domains);
						}
						
						List<Permit> listOfPermits = domains.get(d.getDomainKey());
						
						if (listOfPermits == null)
						{
							listOfPermits = new ArrayList<>();
							domains.put(d.getDomainKey(), listOfPermits);
						}
							
						listOfPermits.add(permit);
					}	
					else
					{
						HashMap<String,List<Permit>> domains = deniedPermissionsOnDomain.get(permitKey);
						
						if (domains == null)
						{
							domains= new HashMap<>();
							deniedPermissionsOnDomain.put(permitKey, domains);
						}
						
						List<Permit> listOfPermits = domains.get(d.getDomainKey());
						if (listOfPermits == null)
						{
							listOfPermits = new ArrayList<>();
							domains.put(d.getDomainKey(), listOfPermits);
						}

						listOfPermits.add(permit);
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
	 * Returns true if it is allowed on any domain..
	 * @param action
	 * @param resource
	 * @return
	 */
	boolean isAllowedOnAnyDomain (String action,String resource)
	{
		PermitKey pkey = new PermitKey(action, resource);
		String permitKey = pkey.getKey();
		
		// Lets see if there is any root level permissions for deny..
		if (deniedPermissions.containsKey(permitKey))
			return false; // Explicit Denial
		
		// Okay now lets check if there is explicit allowed at a global level.
		if (allowedPermissions.containsKey(permitKey))
			return true;  // allowed without respect to any resourcedomain

		if (allowedPermissionsOnDomain != null)
		{
			if (allowedPermissionsOnDomain.containsKey(permitKey))
				return true;
		}
		
		return false;
	}
	
	
	/**
	 * Returns true if permit key is allowed at the domain
	 * @param permitKey
	 * @param domain
	 * @return
	 */
	boolean isDomainAllowed (PermitKey permitKey,Domain domain)
	{
		String pKey = permitKey.getKey();
		String dKey = domain.getDomainKey();

		{	// This block does a quick direct check..
			List<Permit> allowedPermits = ApermissionsOnDomains.get(dKey);
			
			if (allowedPermits != null)
			{
				// Lets check if this permission is in it..
				for (Permit p: allowedPermits)
				{
					if (p.getPermitKey().getKey().equals(pKey))
					{
						// Okay so it is explicitly allowed..
						return true;
					}
				}
			}
		}

		{	// Now let us check using the permission...
			HashMap<String, List<Permit>> allowedPermits = allowedPermissionsOnDomain.get(pKey);
			
			if (allowedPermits != null)
			{
				// Lets go through each of the domains that are denied by this permit and check to see if that domain is a hierachy
				for (String eachDomainKey: allowedPermits.keySet())
				{
					List<Permit> listOfPermits = allowedPermits.get(dKey);
					
					if (listOfPermits != null)
					{
						for (Permit dp: listOfPermits)
						{
							if (dp.isPropogate())
							{
								Domain d = involvedDomains.get(eachDomainKey);
								if (d.isPartOfHiearchy(domain.getName()))
									return true;	// allowed if it is part of hiearchy
							}
							else
							{
								if (dKey.equals(domain.getDomainKey()))
								{
									return true; // allowed if it is this domain.
								}
							}
						}
					}
				}
			}
		}
		
		return false;
	}
	
	
	/**
	 * returns true if the domain is denied at this permitkey.
	 * @param permitKey
	 * @param domain
	 * @return
	 */
	boolean isDomainDenied (PermitKey permitKey,Domain domain)
	{
		String pKey = permitKey.getKey();
		String dKey = domain.getDomainKey();
		
		{	// This block does a quick direct check..
			List<Permit> deniedPermits = DpermissionsOnDomains.get(dKey);
			
			if (deniedPermits != null)
			{
				// Lets check if this permission is in it..
				for (Permit p: deniedPermits)
				{
					if (p.getPermitKey().getKey().equals(pKey))
					{
						// Okay so it is explicitly denied.
						return true;
					}
				}
			}
		}
		
		{	// Now let us check using the permission...
			HashMap<String, List<Permit>> deniedPermits = deniedPermissionsOnDomain.get(pKey);
			
			if (deniedPermits != null)
			{
				// Lets go through each of the domains that are denied by this permit and check to see if that domain is a hierachy
				for (String eachDomainKey: deniedPermits.keySet())
				{
					List<Permit> listOfPermits = deniedPermits.get(dKey);
					
					if (listOfPermits != null)
					{
						for (Permit dp: listOfPermits)
						{
							if (dp.isPropogate())
							{
								Domain d = involvedDomains.get(eachDomainKey);
								if (d.isPartOfHiearchy(domain.getName()))
									return true;	// Denied if it is part of hiearchy
							}
							else
							{
								if (dKey.equals(domain.getDomainKey()))
								{
									return true; // denied if it is this domain.
								}
							}
						}
					}
				}
			}
		}
		
		return false;
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
		// If a domain is not passed, then return true if it is allowed on any domain..
		if (domain == null)
			return isAllowedOnAnyDomain(action, resource);
		
		PermitKey permitKey = new PermitKey(action, resource);
		
		// Lets see if there is any root level permissions for deny..
		if (deniedPermissions.containsKey(permitKey.getKey()))
			return false; // Explicit Denial
		
		// Lets check to see if domain is denied.
		boolean domainDenied = isDomainDenied(permitKey, domain);
		if (domainDenied)
			return false;
		
		// Okay now lets check if there is explicit allowed at a global level.
		if (allowedPermissions.containsKey(permitKey.getKey()))
			return true;  // allowed without respect to any resourcedomain
		
		
		boolean domainAllowed = isDomainAllowed(permitKey, domain);
		if (domainAllowed)
			return true;
		
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
			String ppkey = p.getPermitKey().getKey();
			boolean permissionMatch = false;
			
			permissionMatch = ppkey.equals(permitKey);
			if (!permissionMatch)
				permissionMatch = ppkey.equals(PermitKey.SUPER_PERMIT.getKey());
			if (!permissionMatch)
				permissionMatch = ppkey.equals(PermitKey.allActionsOnResource(resource).getKey());
			if (!permissionMatch)
				permissionMatch = ppkey.equals(PermitKey.allResourcesForAction(action).getKey());
			
			if (permissionMatch)
			{
				if (resourceDomain != null)
				{
					// Let us see if this is a domain match..
					boolean domainMatch = false;
					
					if (p.getDomain() != null)
					{
						String domainKey = p.getDomain().getDomainKey();
						
						if (!p.isPropogate())
						{
							if (domainKey.equals(resourceDomain.getDomainKey()))
							{
								domainMatch = true;
							}
						}
						else
						{
							if (p.getDomain().getDomainType().equals(resourceDomain.getDomainType()))
							{
								if (p.getDomain().isPartOfHiearchy(resourceDomain.getName()))
								{
									domainMatch = true;
								}
								
							}
						}
					}
					
					if (!domainMatch)
						continue;  // Nope continue..
				}
				
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
				if (s.getScopeType().equals(scope.getScopeType()))
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
		
		domains.addAll(collection.keySet());
		
		return domains;
	}


	@Override
	public void checkNoLimitingDomain(String action, String resource, String domainType) 
	{
		List<String> domains = hasPermissionReturnLimitingDomains(action, resource, domainType);
		if (domains == null || domains.isEmpty())
			return; // all good.
		
		throw new PermissionException("Permission for " + action + " on " + resource + " is limited for domainType: " + domainType);
	}
	
	
	/*
	 * Returns all the domain names where there is some involvement in some fashion whatsover.
	 * filters by the domain type..
	 */
	@Override
	public final List<String> getInvolvedDomains (String domainType)
	{
		List<String> namesOfDomainsAndDescendants = new ArrayList<>();
		
		if (involvedDomains != null)
		{
			for (Domain d: involvedDomains.values())
			{
				if (d != null && d.getDomainType().equals(domainType))
				{
					d.addNamesOfYouAndYourDescendants(namesOfDomainsAndDescendants);
				}
			}
		}
		
		return namesOfDomainsAndDescendants;
	}
	
	/**
	 * Returns the list of permissions which makes up this context.
	 * @return
	 */
	@Override
	public List<Permit> getListOfPermissions ()
	{
		return this.permissions;
	}

	@Override
	public Set<String> hasPermissionReturnScopeValues(String action, String resource, Domain resourceDomain,
			String scopeType, String... scopeAssignmentTypes) 
	{
		Set<String> scopeValues = new HashSet<>();
		
		List<Scope> scopes = hasPermissionReturnScopes(action, resource, resourceDomain);
		
		if (scopes != null)
		{
			for (Scope scope: scopes)
			{
				String scopeValue = null;
				if (StringUtils.isEmpty(scopeType) || scope.getScopeType().equals(scopeType))
				{
					// Good the scope type matches.. lets see if it is a particular type of scopeAssignment that we are looking for...
					if (scopeAssignmentTypes == null || scopeAssignmentTypes.length <= 0)
							scopeValue = scope.getScopeValue();
					else
					{
						// Lets compare if the assignmentType is in..
						for (String asgType: scopeAssignmentTypes)
						{
							if (asgType.equals(scope.getAssignmentType()))
							{
								scopeValue = scope.getScopeValue();
								break;
							}
						}
					}
				}
				
				if (!StringUtils.isEmpty(scopeValue))
				{
					StringTokenizer st = new StringTokenizer(scopeValue," ;,");
					
					while (st.hasMoreTokens())
					{
						scopeValues.add(st.nextToken());
					}
				}
			}
		}
		
		return scopeValues;
	}

}