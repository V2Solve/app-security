package com.v2solve.app.security.restmodel.request;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = false)
public class CreateBasicAuthClientRequest extends BaseRequest
{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	String name;
	String password;
	boolean enabled;
	String appIdentifier;
}
