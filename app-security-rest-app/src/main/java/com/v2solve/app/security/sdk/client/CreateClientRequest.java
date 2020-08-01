package com.v2solve.app.security.sdk.client;

import com.v2solve.app.security.sdk.BaseRequest;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = false)
public class CreateClientRequest extends BaseRequest {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	
	/**
	 * The Application ID which is creating this client , if null, it means its a global client.
	 */
	String appIdentifier;
	
	/**
	 * Unique Identifier for the client.
	 */
	String clientIdentifier;
	
	
	/**
	 * The description of the client.
	 */
	String description;
}
