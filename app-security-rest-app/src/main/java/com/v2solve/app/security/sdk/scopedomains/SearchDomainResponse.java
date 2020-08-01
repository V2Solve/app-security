package com.v2solve.app.security.sdk.scopedomains;

import java.util.List;

import com.v2solve.app.security.sdk.BaseResponse;
import com.v2solve.app.security.sdk.PagingInformation;
import com.v2solve.app.security.sdk.RequestStatusInformation;
import com.v2solve.app.security.securitymodel.Domain;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = false)
public class SearchDomainResponse extends BaseResponse {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public SearchDomainResponse(RequestStatusInformation rsi, PagingInformation pageInfo) {
		super(rsi, pageInfo);
	}

	public SearchDomainResponse(RequestStatusInformation rsi) {
		super(rsi);
	}
	
	
	List<Domain> domains;
}
