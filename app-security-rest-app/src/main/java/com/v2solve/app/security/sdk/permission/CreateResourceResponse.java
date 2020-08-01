package com.v2solve.app.security.sdk.permission;

import com.v2solve.app.security.sdk.BaseResponse;
import com.v2solve.app.security.sdk.PagingInformation;
import com.v2solve.app.security.sdk.RequestStatusInformation;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = false)
public class CreateResourceResponse extends BaseResponse {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public CreateResourceResponse(RequestStatusInformation rsi, PagingInformation pageInfo) {
		super(rsi, pageInfo);
	}

	public CreateResourceResponse(RequestStatusInformation rsi) {
		super(rsi);
	}
}
