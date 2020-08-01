package com.v2solve.app.security.sdk.relations;

import com.v2solve.app.security.sdk.BaseRequest;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = false)
public class CreateGroupMembershipRequest extends BaseRequest {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	/**
	 * The application if any is creating this association..
	 */
	String appIdentifier;
	
	/**
	 *  The client which needs to be associated.
	 */
	String clientIdentifier;
	
	/**
	 * The Group which needs to be associated.
	 */
	String clientGroupIdentifier;
}
