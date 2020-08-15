package com.v2solve.app.security.restmodel.request;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = false)
public class DeleteClientRequest extends BaseRequest {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	
	/**
	 * Unique Identifier for the client.
	 */
	String clientIdentifier;
}
