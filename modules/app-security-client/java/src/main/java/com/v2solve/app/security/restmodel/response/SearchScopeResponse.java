package com.v2solve.app.security.restmodel.response;

import java.util.List;

import com.v2solve.app.security.restmodel.PagingInformation;
import com.v2solve.app.security.restmodel.RequestStatusInformation;
import com.v2solve.app.security.securitymodel.Scope;


import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@EqualsAndHashCode(callSuper = false)
@NoArgsConstructor
public class SearchScopeResponse extends BaseResponse {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public SearchScopeResponse(RequestStatusInformation rsi, PagingInformation pageInfo) {
		super(rsi, pageInfo);
	}

	public SearchScopeResponse(RequestStatusInformation rsi) {
		super(rsi);
	}
	
	
	List<Scope> scopes;
}
