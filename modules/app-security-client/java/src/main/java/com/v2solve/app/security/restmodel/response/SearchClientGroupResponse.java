package com.v2solve.app.security.restmodel.response;

import java.util.List;

import com.v2solve.app.security.restmodel.PagingInformation;
import com.v2solve.app.security.restmodel.RequestStatusInformation;
import com.v2solve.app.security.securitymodel.ClientGroup;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@EqualsAndHashCode(callSuper = false)
@NoArgsConstructor
public class SearchClientGroupResponse extends BaseResponse {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public SearchClientGroupResponse(RequestStatusInformation rsi, PagingInformation pageInfo) {
		super(rsi, pageInfo);
	}

	public SearchClientGroupResponse(RequestStatusInformation rsi) {
		super(rsi);
	}
	
	List<ClientGroup> clientGroups;
}
