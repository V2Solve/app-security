package com.v2solve.app.security.restmodel.response;

import java.util.List;

import com.v2solve.app.security.restmodel.PagingInformation;
import com.v2solve.app.security.restmodel.RequestStatusInformation;
import com.v2solve.app.security.securitymodel.ScopeType;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@EqualsAndHashCode(callSuper = false)
@NoArgsConstructor
public class SearchScopeTypeResponse extends BaseResponse {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public SearchScopeTypeResponse(RequestStatusInformation rsi, PagingInformation pageInfo) {
		super(rsi, pageInfo);
	}

	public SearchScopeTypeResponse(RequestStatusInformation rsi) {
		super(rsi);
	}
	
	
	List<ScopeType> scopeTypes;
}
