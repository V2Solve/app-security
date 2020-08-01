package com.v2solve.app.security.sdk;

import com.v2solve.app.security.securitymodel.Scope;

/**
 * This class contains definitions of the scopes that are used for this application.
 * 
 *
 */
public class Scopes 
{
	// Client Scopes
	public static final String CLIENT_SCOPE_ALL = "ALL";		// Indicates ALL records  
	public static final String CLIENT_SCOPE_OWN    = "OWN";	    // Own Records
	
	public static final String CLIENT_GROUP_MEMBERSHIP_SCOPE        = "CLIENT_GROUP_MEMBERSHIP";
	public static final String CLIENT_GROUP_ROLE_ROLE_SCOPE         = "CLIENT_GROUP_ROLE_ROLE_MEMBERSHIP";
	public static final String CLIENT_GROUP_ROLE_GROUP_SCOPE        = "CLIENT_GROUP_ROLE_GROUP_MEMBERSHIP";
	public static final String VALUES_SCOPE_TYPE = "VALUES";
	
	public static Scope clientGroupMembershipScope (String value)
	{
		return new Scope (CLIENT_GROUP_MEMBERSHIP_SCOPE,VALUES_SCOPE_TYPE,value,null,null);
	}

	public static Scope clientGroupRoleRoleMembershipScope (String value)
	{
		return new Scope (CLIENT_GROUP_ROLE_ROLE_SCOPE,VALUES_SCOPE_TYPE,value,null,null);
	}

	public static Scope clientGroupRoleGroupMembershipScope (String value)
	{
		return new Scope (CLIENT_GROUP_ROLE_GROUP_SCOPE,VALUES_SCOPE_TYPE,value,null,null);
	}
	
}
