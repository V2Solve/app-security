package com.v2solve.app.security.restimpl;


import com.v2solve.app.security.restapi.SecurityContextAPI;
import com.v2solve.app.security.restmodel.request.GetSecurityContextRequest;
import com.v2solve.app.security.restmodel.request.GetSecuritySetupRequest;
import com.v2solve.app.security.restmodel.request.SecurityAPIRequest;
import com.v2solve.app.security.restmodel.response.GetSecurityContextResponse;
import com.v2solve.app.security.restmodel.response.GetSecuritySetupResponse;
import com.v2solve.app.security.restmodel.response.SecurityAPIResponse;


public class ContextAPIImpl extends BaseApiImpl implements SecurityContextAPI 
{
	static final String contextUri = "v1/contextapi";
	
			
	public ContextAPIImpl (String appSecurityServerEndPoint,AuthHeaderValueProvider authHeaderValueProvider)
	{
		super(appSecurityServerEndPoint,contextUri,authHeaderValueProvider);
	}
	
	@Override
	public SecurityAPIResponse hasPermission(SecurityAPIRequest request) 
	{
		return implementRequest("/hasPermission", request, SecurityAPIResponse.class);
	}

	@Override
	public SecurityAPIResponse hasPermissionReturnRoles(SecurityAPIRequest request) 
	{
		return implementRequest("/hasPermissionReturnRoles", request, SecurityAPIResponse.class);	
	}

	@Override
	public SecurityAPIResponse hasPermissionReturnGroups(SecurityAPIRequest request) 
	{
		return implementRequest("/hasPermissionReturnGroups", request, SecurityAPIResponse.class);		
	}

	@Override
	public SecurityAPIResponse hasPermissionReturnScopes(SecurityAPIRequest request) 
	{
		return implementRequest("/hasPermissionReturnScopes", request, SecurityAPIResponse.class);		
	}

	@Override
	public SecurityAPIResponse hasPermissionInScope(SecurityAPIRequest request) 
	{
		return implementRequest("/hasPermissionInScope", request, SecurityAPIResponse.class);		
	}

	@Override
	public SecurityAPIResponse hasRole(SecurityAPIRequest request) 
	{
		return implementRequest("/hasRole", request, SecurityAPIResponse.class);		
	}

	@Override
	public SecurityAPIResponse hasGroup(SecurityAPIRequest request) 
	{
		return implementRequest("/hasGroup", request, SecurityAPIResponse.class);		
	}

	@Override
	public GetSecurityContextResponse getSecurityContext(GetSecurityContextRequest request) 
	{
		return implementRequest("/getSecurityContext", request, GetSecurityContextResponse.class);		
	}

	@Override
	public SecurityAPIResponse hasPermissions(SecurityAPIRequest request) 
	{
		return implementRequest("/hasPermissions", request, SecurityAPIResponse.class);		
	}

	@Override
	public GetSecuritySetupResponse getSecuritySetup(GetSecuritySetupRequest request) {
		return implementRequest("/getSecuritySetup", request, GetSecuritySetupResponse.class);
	}

}
