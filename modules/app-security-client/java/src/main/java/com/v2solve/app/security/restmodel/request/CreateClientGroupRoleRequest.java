package com.v2solve.app.security.restmodel.request;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = false)
public class CreateClientGroupRoleRequest extends BaseRequest {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	// The group,
	String groupName;
	
	// The role
	String roleName;
	
	// The domain
	String domainName;
	
	// Whether this should be propogated down.
	boolean propogate;
	
	// The appIdentifier.
	String appIdentifier;
}
