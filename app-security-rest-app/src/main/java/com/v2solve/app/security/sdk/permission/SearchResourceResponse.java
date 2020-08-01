package com.v2solve.app.security.sdk.permission;

import java.util.List;

import com.v2solve.app.security.sdk.BaseResponse;
import com.v2solve.app.security.sdk.PagingInformation;
import com.v2solve.app.security.sdk.RequestStatusInformation;
import com.v2solve.app.security.securitymodel.Resource;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = false)
public class SearchResourceResponse extends BaseResponse {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public SearchResourceResponse(RequestStatusInformation rsi, PagingInformation pageInfo) {
		super(rsi, pageInfo);
		
	}

	public SearchResourceResponse(RequestStatusInformation rsi) {
		super(rsi);
		
	}

	/**
	 * The result of the search on actions.
	 */
	List<Resource> resources;
}
