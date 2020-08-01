package com.v2solve.app.security.sdk.scopedomains;

import java.util.List;

import com.v2solve.app.security.sdk.BaseResponse;
import com.v2solve.app.security.sdk.PagingInformation;
import com.v2solve.app.security.sdk.RequestStatusInformation;
import com.v2solve.app.security.securitymodel.DomainType;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = false)
public class SearchDomainTypeResponse extends BaseResponse {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public SearchDomainTypeResponse(RequestStatusInformation rsi, PagingInformation pageInfo) {
		super(rsi, pageInfo);
	}

	public SearchDomainTypeResponse(RequestStatusInformation rsi) {
		super(rsi);
	}
	
	
	List<DomainType> domainTypes;
}
