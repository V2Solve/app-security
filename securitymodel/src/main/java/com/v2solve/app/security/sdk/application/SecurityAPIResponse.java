package com.v2solve.app.security.sdk.application;

import java.util.List;

import com.v2solve.app.security.sdk.BaseResponse;
import com.v2solve.app.security.sdk.PagingInformation;
import com.v2solve.app.security.sdk.RequestStatusInformation;
import com.v2solve.app.security.securitymodel.Scope;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = false)
public class SecurityAPIResponse extends BaseResponse 
{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public SecurityAPIResponse(RequestStatusInformation rsi, PagingInformation pageInfo) {
		super(rsi, pageInfo);
	}

	public SecurityAPIResponse(RequestStatusInformation rsi) {
		super(rsi);
	}
	
	/**
	 * Used for true false type of return data..
	 */
	Boolean result;
	
	// Group Names
	List<String> groups;
	
	// Role Names;
	List<String> roles;
	
	// List of scopes
	List<Scope> scopes;
	
	
	/**
	 * Support for multiple asks.. only works with certain API calls also, the order of results is along how it was asked.
	 */
	Boolean [] results;
}
