package com.v2solve.app.security.restmodel.response;

import com.v2solve.app.security.restmodel.PagingInformation;
import com.v2solve.app.security.restmodel.RequestStatusInformation;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@EqualsAndHashCode(callSuper = false)
@NoArgsConstructor
public class CreateScopeTypeResponse extends BaseResponse {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public CreateScopeTypeResponse(RequestStatusInformation rsi, PagingInformation pageInfo) {
		super(rsi, pageInfo);
	}

	public CreateScopeTypeResponse(RequestStatusInformation rsi) {
		super(rsi);
	}
}
