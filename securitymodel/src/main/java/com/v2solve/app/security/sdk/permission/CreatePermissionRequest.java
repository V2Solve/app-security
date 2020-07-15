package com.v2solve.app.security.sdk.permission;

import com.v2solve.app.security.sdk.BaseRequest;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = false)
public class CreatePermissionRequest extends BaseRequest {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	/**
	 * The Owning app.
	 */
	String appIdentifier;
	
	/**
	 * The name of the permission
	 */
	String name;
	
	/**
	 * Description of the permission
	 */
	String description;
	
	/**
	 * actionName for this permission
	 */
	String actionName;
	
	/**
	 * Resource name for this permission
	 */
	String resourceName;
}
