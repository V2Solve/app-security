package com.v2solve.app.security.restmodel.response;

import com.v2solve.app.security.restmodel.PagingInformation;
import com.v2solve.app.security.restmodel.RequestStatusInformation;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@EqualsAndHashCode(callSuper = false)
@NoArgsConstructor
public class DeleteClientGroupRoleResponse extends BaseResponse {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public DeleteClientGroupRoleResponse(RequestStatusInformation rsi, PagingInformation pageInfo) {
		super(rsi, pageInfo);
	}

	public DeleteClientGroupRoleResponse(RequestStatusInformation rsi) {
		super(rsi);
	}
}
