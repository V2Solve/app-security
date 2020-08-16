package com.v2solve.app.security.restmodel.response;

import java.util.List;

import com.v2solve.app.security.restmodel.PagingInformation;
import com.v2solve.app.security.restmodel.RequestStatusInformation;
import com.v2solve.app.security.securitymodel.Permission;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@EqualsAndHashCode(callSuper = false)
@NoArgsConstructor
public class SearchPermissionResponse extends BaseResponse {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public SearchPermissionResponse(RequestStatusInformation rsi, PagingInformation pageInfo) {
		super(rsi, pageInfo);
		
	}

	public SearchPermissionResponse(RequestStatusInformation rsi) {
		super(rsi);
		
	}

	/**
	 * The result of the search on the records.
	 */
	List<Permission> permissions;
}
