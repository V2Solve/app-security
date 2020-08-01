package com.v2solve.app.security.sdk.application;

import com.v2solve.app.security.sdk.BaseRequest;
import com.v2solve.app.security.securitymodel.Domain;
import com.v2solve.app.security.securitymodel.Scope;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = false)
public class SecurityAPIRequest extends BaseRequest {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	/**
	 * Request Parameters - depending on the request some of these would be set.
	 */
	String action;
	String resource;
	String roleName;
	String groupName;
	Scope scope;
	Domain resourceDomain;
	
	
	/**
	 * Support for multiple resource asks.. only works with certain api calls..
	 */
	String [] resources;
}
