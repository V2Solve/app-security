package com.v2solve.app.security.sdk.permission;

import com.v2solve.app.security.sdk.BaseRequest;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = false)
public class DeletePermissionRequest extends BaseRequest {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	/**
	 * The permission name to be deleted..
	 */
	String name;
}
