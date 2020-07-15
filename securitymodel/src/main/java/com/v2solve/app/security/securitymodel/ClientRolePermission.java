package com.v2solve.app.security.securitymodel;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ClientRolePermission 
{
	/**
	 *  Unique Key in the system identifying the relationship.
	 */
	String key;
	
	// The role, to which the permission is assigned.
	String roleName;
	
	
	// The name of the permission in the system
	String permissionName;
	
	// value of the permission. (allow, deny)
	String value;
	
	// The owning app
	String appIdentifier;
}
