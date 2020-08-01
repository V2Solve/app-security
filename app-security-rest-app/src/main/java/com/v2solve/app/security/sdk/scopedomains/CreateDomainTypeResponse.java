package com.v2solve.app.security.sdk.scopedomains;

import com.v2solve.app.security.sdk.BaseResponse;
import com.v2solve.app.security.sdk.PagingInformation;
import com.v2solve.app.security.sdk.RequestStatusInformation;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = false)
public class CreateDomainTypeResponse extends BaseResponse {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public CreateDomainTypeResponse(RequestStatusInformation rsi, PagingInformation pageInfo) {
		super(rsi, pageInfo);
	}

	public CreateDomainTypeResponse(RequestStatusInformation rsi) {
		super(rsi);
	}
}
