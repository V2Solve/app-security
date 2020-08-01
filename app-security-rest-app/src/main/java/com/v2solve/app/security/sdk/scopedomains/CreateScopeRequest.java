package com.v2solve.app.security.sdk.scopedomains;

import com.v2solve.app.security.sdk.BaseRequest;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = false)
public class CreateScopeRequest extends BaseRequest 
{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	String name;
	String description;
	String value;
	String scopeType;
	String appIdentifier;
}
