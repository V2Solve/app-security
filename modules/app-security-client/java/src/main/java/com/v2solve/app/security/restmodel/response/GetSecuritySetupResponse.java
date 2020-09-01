package com.v2solve.app.security.restmodel.response;

import com.v2solve.app.security.restmodel.PagingInformation;
import com.v2solve.app.security.restmodel.RequestStatusInformation;
import com.v2solve.app.security.securitymodel.SecuritySetupModel;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@EqualsAndHashCode(callSuper = false)
@NoArgsConstructor
public class GetSecuritySetupResponse extends BaseResponse 
{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public GetSecuritySetupResponse(RequestStatusInformation rsi, PagingInformation pageInfo) {
		super(rsi, pageInfo);
	}

	public GetSecuritySetupResponse(RequestStatusInformation rsi) {
		super(rsi);
	}
	
	SecuritySetupModel securitySetup;
}
