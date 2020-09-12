import { Scope } from "../model/model";
import { Domain } from "../model/model";

/**
 * The different security actions
 */
export class SecurityActions {
	// CRUD actions..
	static CREATE: string = "CREATE";
	static READ: string   = "READ";
	static UPDATE: string = "UPDATE";
	static DELETE: string = "DELETE";
	static ASSUME: string = "ASSUME";
}

/**
 * This class contains definitions of items which are the security resources defined by admin application.
 * They mostly represent rows of data in different tables of the security model. An application which deals
 * with a different model will probably have this different.
 * 
 */
export class SecurityResources {

	static ACTION: string                     = "ACTION";
	static APPLICATION: string                = "APPLICATION";
	static RESOURCE: string                   = "RESOURCE";
	static CLIENT: string                     = "CLIENT";
	static PERMISSION: string                 = "PERMISSION";
	static CLIENT_ROLE: string                = "CLIENT_ROLE";
	static CLIENT_GROUP: string               = "CLIENT_GROUP";
	static CLIENT_GROUP_MEMBERSHIP: string    = "CLIENT_GROUP_MEMBERSHIP";
	static RESOURCE_DOMAIN: string            = "RESOURCE_DOMAIN";
	static RESOURCE_DOMAIN_TYPE: string       = "RESOURCE_DOMAIN_TYPE";
	static SCOPE_TYPE: string                 = "SCOPE_TYPE";
	static ROLE_SCOPE: string                 = "ROLE_SCOPE";
	static GROUP_ROLE_MEMBERSHIP:  string     = "GROUP_ROLE_MEMBERSHIP";
	static PERMISSION_ROLE_MEMBERSHIP: string = "PERMISSION_ROLE_MEMBERSHIP";
	static CHANGE_LOG: string                 = "CHANGE_LOG";
	static BASIC_AUTH_CLIENT: string          = "BASIC_AUTH_CLIENT";
	static ONBOARD_TRUSTED_APP: string        = "ONBOARD_TRUSTED_APP";
}


/**
 * These are different scopes that can come in play
 */
export class Scopes
{
	// Client Scopes
	static CLIENT_SCOPE_ALL: string = "ALL";		// Indicates ALL records  
	static CLIENT_SCOPE_OWN: string = "OWN";	    // Own Records
	
	static CLIENT_GROUP_MEMBERSHIP_SCOPE: string = "CLIENT_GROUP_MEMBERSHIP";
	static VALUES_SCOPE_TYPE: string = "VALUES";
	
	static clientGroupMembershipScope (value: string): Scope
	{
		return new Scope (this.CLIENT_GROUP_MEMBERSHIP_SCOPE,this.VALUES_SCOPE_TYPE,value);
	}

}

/**
 * Different domains..
 */
export class Domains
{
	static APP_DOMAIN_TYPE: string = "AppDomain";
	
	static appDomain(domainName: string): Domain
	{
		return new Domain (domainName,this.APP_DOMAIN_TYPE);
	}
	
}

/**
 * Predefined Security Groups and Roles in the system.
 */
export class SecurityGroupsAndRoles 
{
	static TRUSTED_APP_GROUP: string = "TRUSTED_APPS";
	static TRUSTED_APP_ROLE: string  = "TRUSTED_APP";
	static APP_OWNER_ROLE: string    = "APP_OWNER";
}
