package com.v2solve.app.security.restmodel.response;

import java.util.List;

import com.v2solve.app.security.restmodel.PagingInformation;
import com.v2solve.app.security.restmodel.RequestStatusInformation;
import com.v2solve.app.security.securitymodel.Action;
import com.v2solve.app.security.securitymodel.BasicAuthClient;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@EqualsAndHashCode(callSuper = false)
@NoArgsConstructor
public class SearchBasicAuthClientResponse extends BaseResponse {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public SearchBasicAuthClientResponse(RequestStatusInformation rsi, PagingInformation pageInfo) {
		super(rsi, pageInfo);
		
	}

	public SearchBasicAuthClientResponse(RequestStatusInformation rsi) {
		super(rsi);
		
	}

	/**
	 * The result of the search
	 */
	List<BasicAuthClient> basicAuthClients;
}
