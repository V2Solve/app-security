package com.v2solve.app.security.sdk.application;

import com.v2solve.app.security.sdk.BaseRequest;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = false)
public class SearchApplicationsRequest extends BaseRequest 
{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	/**
	 * The appIdentifier that you wish to Search For.
	 */
	String appIdentifier;
}
