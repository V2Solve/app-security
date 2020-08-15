package com.v2solve.app.security.restmodel.response;

import java.util.List;

import com.v2solve.app.security.restmodel.PagingInformation;
import com.v2solve.app.security.restmodel.RequestStatusInformation;
import com.v2solve.app.security.securitymodel.AppClient;
import com.v2solve.app.security.securitymodel.Permit;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = false)
public class GetSecurityContextResponse extends BaseResponse 
{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public GetSecurityContextResponse(RequestStatusInformation rsi, PagingInformation pageInfo) {
		super(rsi, pageInfo);
	}

	public GetSecurityContextResponse(RequestStatusInformation rsi) {
		super(rsi);
	}
	
	/**
	 * The client for which the permissions list is being provided..
	 */
	AppClient appClient;
	
	/**
	 * The list of permissions.
	 */
	List<Permit> permissions;
}
