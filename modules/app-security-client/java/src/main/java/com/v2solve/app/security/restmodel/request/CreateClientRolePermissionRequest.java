package com.v2solve.app.security.restmodel.request;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = false)
public class CreateClientRolePermissionRequest extends BaseRequest {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	
	// The role, to which the permission is assigned.
	String roleName;
	
	
	// The name of the permission in the system
	String permissionName;
	
	// The name of the scope if any to be applied.
	String scopeName;
	
	// The owning app
	String appIdentifier;
	
	
	// value of the permission. (allow, deny)
	String value;
}