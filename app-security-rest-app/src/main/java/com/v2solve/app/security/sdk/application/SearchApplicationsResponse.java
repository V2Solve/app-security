package com.v2solve.app.security.sdk.application;

import java.util.List;

import com.v2solve.app.security.sdk.BaseResponse;
import com.v2solve.app.security.sdk.PagingInformation;
import com.v2solve.app.security.sdk.RequestStatusInformation;
import com.v2solve.app.security.securitymodel.Application;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = false)
public class SearchApplicationsResponse extends BaseResponse {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public SearchApplicationsResponse(RequestStatusInformation rsi, PagingInformation pageInfo) {
		super(rsi, pageInfo);
	}

	public SearchApplicationsResponse(RequestStatusInformation rsi) {
		super(rsi);
	}
	
	/**
	 * The result of the search.
	 */
	List<Application> applications;
}
