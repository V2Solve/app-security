package com.v2solve.app.security.sdk.roles;

import com.v2solve.app.security.sdk.BaseRequest;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = false)
public class CreateClientRoleRequest extends BaseRequest {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	
	String name;
	String description;
	String appIdentifier;
}
