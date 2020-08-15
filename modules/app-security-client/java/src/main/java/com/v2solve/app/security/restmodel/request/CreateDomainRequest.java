package com.v2solve.app.security.restmodel.request;

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
