package com.v2solve.app.security.restapi;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.v2solve.app.security.sdk.SecurityContextAPI;
import com.v2solve.app.security.sdk.application.GetSecurityContextRequest;
import com.v2solve.app.security.sdk.application.GetSecurityContextResponse;
import com.v2solve.app.security.sdk.application.SecurityAPIRequest;
import com.v2solve.app.security.sdk.application.SecurityAPIResponse;



@RestController
@RequestMapping(path = "/v1/contextapi", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
public class ContextAPIController implements SecurityContextAPI 
{
	
	@Autowired
	SecurityContextAPI implementation;

	@Override
	@RequestMapping(method = RequestMethod.POST, path = "/hasPermission")
	public SecurityAPIResponse hasPermission(@RequestBody SecurityAPIRequest request) {
		return implementation.hasPermission(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST, path = "/hasPermissionReturnRoles")
	public SecurityAPIResponse hasPermissionReturnRoles(@RequestBody SecurityAPIRequest request) {
		return implementation.hasPermissionReturnRoles(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST, path = "/hasPermissionReturnGroups")
	public SecurityAPIResponse hasPermissionReturnGroups(@RequestBody SecurityAPIRequest request) {
		return implementation.hasPermissionReturnGroups(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST, path = "/hasPermissionReturnScopes")
	public SecurityAPIResponse hasPermissionReturnScopes(@RequestBody SecurityAPIRequest request) {
		return implementation.hasPermissionReturnScopes(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST, path = "/hasPermissionInScope")
	public SecurityAPIResponse hasPermissionInScope(@RequestBody SecurityAPIRequest request) {
		return implementation.hasPermissionInScope(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST, path = "/hasRole")
	public SecurityAPIResponse hasRole(@RequestBody SecurityAPIRequest request) {
		return implementation.hasRole(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST, path = "/hasGroup")
	public SecurityAPIResponse hasGroup(@RequestBody SecurityAPIRequest request) {
		return implementation.hasGroup(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/getSecurityContext")
	public GetSecurityContextResponse getSecurityContext(@RequestBody GetSecurityContextRequest request) 
	{
		GetSecurityContextResponse resp = implementation.getSecurityContext(request);
		return resp;
	}

	@Override
	@RequestMapping(method = RequestMethod.POST, path = "/hasPermissions")
	public SecurityAPIResponse hasPermissions(@RequestBody SecurityAPIRequest request) {
		return implementation.hasPermissions(request);
	}
}
