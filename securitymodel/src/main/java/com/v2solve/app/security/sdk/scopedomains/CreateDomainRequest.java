package com.v2solve.app.security.sdk.scopedomains;

import com.v2solve.app.security.sdk.BaseRequest;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = false)
public class CreateDomainRequest extends BaseRequest {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	/**
	 * Name of the domain
	 */
	String name;
	
	/**
	 * Description
	 */
	String description;
	
	
	/**
	 * Owning App
	 */
	String appIdentifier;
	
	/**
	 * The Parent Domain.
	 */
	String parentDomain;
	
	/**
	 * The Type of domain it is.
	 */
	String domainType;
}
