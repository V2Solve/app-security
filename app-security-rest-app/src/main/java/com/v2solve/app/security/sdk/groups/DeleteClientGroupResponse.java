package com.v2solve.app.security.sdk.groups;

import com.v2solve.app.security.sdk.BaseResponse;
import com.v2solve.app.security.sdk.PagingInformation;
import com.v2solve.app.security.sdk.RequestStatusInformation;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = false)
public class DeleteClientGroupResponse extends BaseResponse {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public DeleteClientGroupResponse(RequestStatusInformation rsi, PagingInformation pageInfo) {
		super(rsi, pageInfo);
	}

	public DeleteClientGroupResponse(RequestStatusInformation rsi) {
		super(rsi);
	}
}