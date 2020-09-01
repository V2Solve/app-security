package com.v2solve.app.security.securitymodel;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * This represents the complete security model, which can be downloaded to a disk, 
 * and could be managed offline.
 * @author Saurinya
 *
 */
@Data
@NoArgsConstructor
public class SecuritySetupModel 
{
	HashMap<String,Application> applications;
	HashMap<String,AppClient> clients;
	HashMap<String, Action> actions;
	HashMap<String, Resource> resources;
	HashMap<String,ScopeType> scopeTypes;
	HashMap<String,DomainType> domainTypes;
	HashMap<String,Scope> scopes;
	HashMap<String,Domain> domains;
	HashMap<String,Permission> permissions;
	HashMap<String, ClientRole> clientRoles;
	HashMap<String,ClientGroup> clientGroups;
	List<ClientRolePermission> roleToPermissions;
	List<ClientGroupRole> roleToGroups;
	List<ClientGroupMembership> clientsToGroups;
	boolean fixedDomainHiearchy = false;
	
	
	public AppSecurityContext getSecurityContext(String clientIdentifier,List<String> assumeGroups)
	{
		if (clientIdentifier == null)
			throw new RuntimeException("ClientIdentifier must be passed.");
		
		AppClient ac=null;
		// Lets figure out if this client existss..
		if (clients != null)
		{
			ac = clients.get(clientIdentifier);
		}
		
		boolean memoryClient = false;
		
		if (ac == null)
		{
			memoryClient = true;
			ac = new AppClient(clientIdentifier, "MemoryClient", null);
		}
		
		List<String> groupsBelongedTo = new ArrayList<>();
		
		if (!memoryClient)
		{
			if (clientsToGroups != null)
			{
				for (ClientGroupMembership cgm: clientsToGroups)
				{
					if (cgm.getClientName() != null && cgm.getClientName().equals(clientIdentifier))
						groupsBelongedTo.add(cgm.getGroupName());
				}
			}
		}
		
		// Lets also check if other groups have been provided.
		if (assumeGroups != null)
			groupsBelongedTo.addAll(assumeGroups);
		
		// Okay so now that we have all the groups, lets figure out the roles that they are assigned to..
		List<ClientGroupRole> clientGroupRolesAssigned = new ArrayList<>();
		
		if (groupsBelongedTo != null && !groupsBelongedTo.isEmpty())
		{
			for (String groupName: groupsBelongedTo)
			{
				if (roleToGroups != null)
				{
					for (ClientGroupRole cgr: roleToGroups)
					{
						if (groupName.equals(cgr.getGroupName()))
						{
							// Okay so this group Matches the name...
							clientGroupRolesAssigned.add(cgr);
						}
					}
				}
			}
		}
		
		List<Permit> permits = new ArrayList<>();
		
		// Okay so now if roles have been assigned..
		if (!clientGroupRolesAssigned.isEmpty())
		{
			// Lets figure out permissions..
			for (ClientGroupRole cgr: clientGroupRolesAssigned)
			{
				if (roleToPermissions != null && !roleToPermissions.isEmpty())
				{
					for (ClientRolePermission crp: roleToPermissions)
					{
						if (crp.getRoleName().equals(cgr.getRoleName()))
						{
							// Okay so this role permission is assigned to the grouprole..
							// Lets get the permission.
							if (permissions != null)
							{
								Permission p = permissions.get(crp.getPermissionName());
								if (p != null)
								{
									Permit permit = new Permit();
									PermitKey pk = new PermitKey(p.getAction(), p.getResource());
									permit.setAllowed(crp.getValue().toLowerCase().startsWith("allow"));
									permit.setGroup(cgr.getGroupName());
									permit.setRole(crp.getRoleName());
									permit.setPropogate(cgr.isPropogate());
									if (cgr.getDomainName() != null)
									{
										Domain d = getDomainWithHiearchy(cgr.getDomainName());
										permit.setDomain(d);
									}
									
									if (crp.getScopeName() != null)
									{
										Scope scp = scopes.get(crp.getScopeName());
										if (scp != null)
											permit.setScope(scp);
									}
									
									permits.add(permit);
								}
							}
							
							
						}
					}
				}
			}
		}
		
		return new AppSecurityContextImpl(ac,permits);
	}
	
	
	synchronized private Domain getDomainWithHiearchy (String domainName)
	{
		if (domains == null)
			return null;
		if (fixedDomainHiearchy == true)
			return domains.get(domainName);

		// Lets fix domain hiearchy first..
		for (Domain d: domains.values())
		{
			if (d.getParentDomain() != null)
			{
				Domain pd = domains.get(d.getParentDomain().getName());
				if (pd != null)
				{
					d.setParentDomain(pd);
					pd.addChildDomain(d);
				}
			}
		}
		
		fixedDomainHiearchy = true;
		
		return domains.get(domainName);
	}
	
}
