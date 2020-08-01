package com.v2solve.app.security.sdk.relations;

import com.v2solve.app.security.sdk.BaseResponse;
import com.v2solve.app.security.sdk.PagingInformation;
import com.v2solve.app.security.sdk.RequestStatusInformation;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = false)
public class DeleteGroupMembershipResponse extends BaseResponse {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public DeleteGroupMembershipResponse(RequestStatusInformation rsi, PagingInformation pageInfo) {
		super(rsi, pageInfo);
	}

	public DeleteGroupMembershipResponse(RequestStatusInformation rsi) {
		super(rsi);
	}
}
