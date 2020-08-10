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
	public static final String CLIENT_SCOPE_ALL    = "ALL";		// Indicates all records  
	public static final String CLIENT_SCOPE_OWN    = "OWN";	    // Own Records
	public static final String CLIENT_SCOPE_DOMAIN = "DOMAIN";	// Indicates domain level records.
	
	public static final String SCOPE_ASSIGN_GROUP_TO_CLIENT               = "ASSIGN_GROUP_TO_CLIENT";
	public static final String SCOPE_ASSIGN_ROLE_TO_GROUP                 = "ASSIGN_ROLE_TO_GROUP";
	
	public static final String SCOPE_CLIENT_ROLE        				  = "CLIENT_ROLE";
	public static final String SCOPE_CLIENT_GROUP        			      = "CLIENT_GROUP";
	
	public static final String VALUES_SCOPE_TYPE = "VALUES";
	
	public static Scope assignGroupToClientScope (String value)
	{
		return new Scope (SCOPE_ASSIGN_GROUP_TO_CLIENT,VALUES_SCOPE_TYPE,value,null,null);
	}

	public static Scope assignRoleToGroupScope (String value)
	{
		return new Scope (SCOPE_ASSIGN_ROLE_TO_GROUP,VALUES_SCOPE_TYPE,value,null,null);
	}

	public static Scope clientRoleScope (String value)
	{
		return new Scope (SCOPE_CLIENT_ROLE,VALUES_SCOPE_TYPE,value,null,null);
	}

	public static Scope clientGroupScope (String value)
	{
		return new Scope (SCOPE_CLIENT_GROUP,VALUES_SCOPE_TYPE,value,null,null);
	}
	
}
