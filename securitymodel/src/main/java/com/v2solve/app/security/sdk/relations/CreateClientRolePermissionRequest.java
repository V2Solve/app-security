package com.v2solve.app.security.sdk.relations;

import com.v2solve.app.security.sdk.BaseRequest;

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
	
	
	// The owning app
	String appIdentifier;
	
	
	// value of the permission. (allow, deny)
	String value;
}