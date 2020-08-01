package com.v2solve.app.security.sdk.permission;

import java.util.List;

import com.v2solve.app.security.sdk.BaseResponse;
import com.v2solve.app.security.sdk.PagingInformation;
import com.v2solve.app.security.sdk.RequestStatusInformation;
import com.v2solve.app.security.securitymodel.Action;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = false)
public class SearchActionResponse extends BaseResponse {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public SearchActionResponse(RequestStatusInformation rsi, PagingInformation pageInfo) {
		super(rsi, pageInfo);
		
	}

	public SearchActionResponse(RequestStatusInformation rsi) {
		super(rsi);
		
	}

	/**
	 * The result of the search on actions.
	 */
	List<Action> actions;
}
