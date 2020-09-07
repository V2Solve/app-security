package com.v2solve.app.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.http.MediaType;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.v2solve.app.security.connection.AppSecurityConnection;
import com.v2solve.app.security.restapi.SecurityContextAPI;
import com.v2solve.app.security.restapi.SecurityManagementAPI;
import com.v2solve.app.security.restmodel.request.BaseRequest;
import com.v2solve.app.security.restmodel.request.CreateActionRequest;
import com.v2solve.app.security.restmodel.request.CreateApplicationRequest;
import com.v2solve.app.security.restmodel.request.CreateBasicAuthClientRequest;
import com.v2solve.app.security.restmodel.request.CreateClientGroupRequest;
import com.v2solve.app.security.restmodel.request.CreateClientGroupRoleRequest;
import com.v2solve.app.security.restmodel.request.CreateClientRequest;
import com.v2solve.app.security.restmodel.request.CreateClientRolePermissionRequest;
import com.v2solve.app.security.restmodel.request.CreateClientRoleRequest;
import com.v2solve.app.security.restmodel.request.CreateDomainRequest;
import com.v2solve.app.security.restmodel.request.CreateDomainTypeRequest;
import com.v2solve.app.security.restmodel.request.CreateGroupMembershipRequest;
import com.v2solve.app.security.restmodel.request.CreatePermissionRequest;
import com.v2solve.app.security.restmodel.request.CreateResourceRequest;
import com.v2solve.app.security.restmodel.request.CreateScopeRequest;
import com.v2solve.app.security.restmodel.request.CreateScopeTypeRequest;
import com.v2solve.app.security.restmodel.request.DeleteActionRequest;
import com.v2solve.app.security.restmodel.request.DeleteApplicationRequest;
import com.v2solve.app.security.restmodel.request.DeleteBasicAuthClientRequest;
import com.v2solve.app.security.restmodel.request.DeleteClientGroupRequest;
import com.v2solve.app.security.restmodel.request.DeleteClientGroupRoleRequest;
import com.v2solve.app.security.restmodel.request.DeleteClientRequest;
import com.v2solve.app.security.restmodel.request.DeleteClientRolePermissionRequest;
import com.v2solve.app.security.restmodel.request.DeleteClientRoleRequest;
import com.v2solve.app.security.restmodel.request.DeleteDomainRequest;
import com.v2solve.app.security.restmodel.request.DeleteDomainTypeRequest;
import com.v2solve.app.security.restmodel.request.DeleteGroupMembershipRequest;
import com.v2solve.app.security.restmodel.request.DeletePermissionRequest;
import com.v2solve.app.security.restmodel.request.DeleteResourceRequest;
import com.v2solve.app.security.restmodel.request.DeleteScopeRequest;
import com.v2solve.app.security.restmodel.request.DeleteScopeTypeRequest;
import com.v2solve.app.security.restmodel.request.GetSecurityContextRequest;
import com.v2solve.app.security.restmodel.request.GetSecuritySetupRequest;
import com.v2solve.app.security.restmodel.request.SearchActionRequest;
import com.v2solve.app.security.restmodel.request.SearchApplicationRequest;
import com.v2solve.app.security.restmodel.request.SearchBasicAuthClientRequest;
import com.v2solve.app.security.restmodel.request.SearchChangeLogRequest;
import com.v2solve.app.security.restmodel.request.SearchClientGroupRequest;
import com.v2solve.app.security.restmodel.request.SearchClientGroupRoleRequest;
import com.v2solve.app.security.restmodel.request.SearchClientRequest;
import com.v2solve.app.security.restmodel.request.SearchClientRolePermissionRequest;
import com.v2solve.app.security.restmodel.request.SearchClientRoleRequest;
import com.v2solve.app.security.restmodel.request.SearchDomainRequest;
import com.v2solve.app.security.restmodel.request.SearchDomainTypeRequest;
import com.v2solve.app.security.restmodel.request.SearchPermissionRequest;
import com.v2solve.app.security.restmodel.request.SearchResourceRequest;
import com.v2solve.app.security.restmodel.request.SearchScopeRequest;
import com.v2solve.app.security.restmodel.request.SearchScopeTypeRequest;
import com.v2solve.app.security.restmodel.request.SecurityAPIRequest;
import com.v2solve.app.security.restmodel.response.CreateActionResponse;
import com.v2solve.app.security.restmodel.response.CreateApplicationResponse;
import com.v2solve.app.security.restmodel.response.CreateBasicAuthClientResponse;
import com.v2solve.app.security.restmodel.response.CreateClientGroupResponse;
import com.v2solve.app.security.restmodel.response.CreateClientGroupRoleResponse;
import com.v2solve.app.security.restmodel.response.CreateClientResponse;
import com.v2solve.app.security.restmodel.response.CreateClientRolePermissionResponse;
import com.v2solve.app.security.restmodel.response.CreateClientRoleResponse;
import com.v2solve.app.security.restmodel.response.CreateDomainResponse;
import com.v2solve.app.security.restmodel.response.CreateDomainTypeResponse;
import com.v2solve.app.security.restmodel.response.CreateGroupMembershipResponse;
import com.v2solve.app.security.restmodel.response.CreatePermissionResponse;
import com.v2solve.app.security.restmodel.response.CreateResourceResponse;
import com.v2solve.app.security.restmodel.response.CreateScopeResponse;
import com.v2solve.app.security.restmodel.response.CreateScopeTypeResponse;
import com.v2solve.app.security.restmodel.response.DeleteActionResponse;
import com.v2solve.app.security.restmodel.response.DeleteApplicationResponse;
import com.v2solve.app.security.restmodel.response.DeleteBasicAuthClientResponse;
import com.v2solve.app.security.restmodel.response.DeleteClientGroupResponse;
import com.v2solve.app.security.restmodel.response.DeleteClientGroupRoleResponse;
import com.v2solve.app.security.restmodel.response.DeleteClientResponse;
import com.v2solve.app.security.restmodel.response.DeleteClientRolePermissionResponse;
import com.v2solve.app.security.restmodel.response.DeleteClientRoleResponse;
import com.v2solve.app.security.restmodel.response.DeleteDomainResponse;
import com.v2solve.app.security.restmodel.response.DeleteDomainTypeResponse;
import com.v2solve.app.security.restmodel.response.DeleteGroupMembershipResponse;
import com.v2solve.app.security.restmodel.response.DeletePermissionResponse;
import com.v2solve.app.security.restmodel.response.DeleteResourceResponse;
import com.v2solve.app.security.restmodel.response.DeleteScopeResponse;
import com.v2solve.app.security.restmodel.response.DeleteScopeTypeResponse;
import com.v2solve.app.security.restmodel.response.GetSecurityContextResponse;
import com.v2solve.app.security.restmodel.response.GetSecuritySetupResponse;
import com.v2solve.app.security.restmodel.response.SearchActionResponse;
import com.v2solve.app.security.restmodel.response.SearchApplicationResponse;
import com.v2solve.app.security.restmodel.response.SearchBasicAuthClientResponse;
import com.v2solve.app.security.restmodel.response.SearchChangeLogResponse;
import com.v2solve.app.security.restmodel.response.SearchClientGroupResponse;
import com.v2solve.app.security.restmodel.response.SearchClientGroupRoleResponse;
import com.v2solve.app.security.restmodel.response.SearchClientResponse;
import com.v2solve.app.security.restmodel.response.SearchClientRolePermissionResponse;
import com.v2solve.app.security.restmodel.response.SearchClientRoleResponse;
import com.v2solve.app.security.restmodel.response.SearchDomainResponse;
import com.v2solve.app.security.restmodel.response.SearchDomainTypeResponse;
import com.v2solve.app.security.restmodel.response.SearchPermissionResponse;
import com.v2solve.app.security.restmodel.response.SearchResourceResponse;
import com.v2solve.app.security.restmodel.response.SearchScopeResponse;
import com.v2solve.app.security.restmodel.response.SearchScopeTypeResponse;
import com.v2solve.app.security.restmodel.response.SecurityAPIResponse;




/**
 * This is a proxy controller which will proxy the requests from a client such as angular to the backend utilizing
 * a trusted AppSecurityConnection. 
 * @author Saurinya
 *
 */
@RestController
@RequestMapping(path = {"/v1/contextapi","/v1/managementapi"},produces = MediaType.APPLICATION_JSON_VALUE)
public class AppSecurityProxyController implements SecurityContextAPI,SecurityManagementAPI 
{
	@Autowired AppSecurityConnection connection;
	
	@Autowired ApplicationContext appCtx;

	private void insertLoggedInId (BaseRequest br)
	{
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		
		if (auth.isAuthenticated())
		{
			String clientId = auth.getName();
			br.setClientId(clientId);
		}
	}
	
	@Override
	@RequestMapping(method = RequestMethod.POST, path = "/deleteClient")
	public DeleteClientResponse implementRequest(@RequestBody DeleteClientRequest request) 
	{
		insertLoggedInId(request);
		return connection.getSecurityManagementApi().implementRequest(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/createClient")
	public CreateClientResponse implementRequest(@RequestBody CreateClientRequest request) 
	{
		insertLoggedInId(request);
		return connection.getSecurityManagementApi().implementRequest(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/createApplication")
	public CreateApplicationResponse implementRequest(@RequestBody CreateApplicationRequest request) 
	{
		insertLoggedInId(request);
		return connection.getSecurityManagementApi().implementRequest(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/deleteApplication")
	public DeleteApplicationResponse implementRequest(@RequestBody DeleteApplicationRequest request) 
	{
		insertLoggedInId(request);
		return connection.getSecurityManagementApi().implementRequest(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/createAction")
	public CreateActionResponse implementRequest(@RequestBody CreateActionRequest request) 
	{
		insertLoggedInId(request);
		return connection.getSecurityManagementApi().implementRequest(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/deleteAction")
	public DeleteActionResponse implementRequest(@RequestBody DeleteActionRequest request) 
	{
		insertLoggedInId(request);
		return connection.getSecurityManagementApi().implementRequest(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/createResource")
	public CreateResourceResponse implementRequest(@RequestBody CreateResourceRequest request) 
	{
		insertLoggedInId(request);
		return connection.getSecurityManagementApi().implementRequest(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/deleteResource")
	public DeleteResourceResponse implementRequest(@RequestBody DeleteResourceRequest request) 
	{
		insertLoggedInId(request);
		return connection.getSecurityManagementApi().implementRequest(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/createPermission")
	public CreatePermissionResponse implementRequest(@RequestBody CreatePermissionRequest request) 
	{
		insertLoggedInId(request);
		return connection.getSecurityManagementApi().implementRequest(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/deletePermission")
	public DeletePermissionResponse implementRequest(@RequestBody DeletePermissionRequest request) 
	{
		insertLoggedInId(request);
		return connection.getSecurityManagementApi().implementRequest(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/deleteClientGroup")
	public DeleteClientGroupResponse implementRequest(@RequestBody DeleteClientGroupRequest request) 
	{
		insertLoggedInId(request);
		return connection.getSecurityManagementApi().implementRequest(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/createGroupMembership")
	public CreateGroupMembershipResponse implementRequest(@RequestBody CreateGroupMembershipRequest request) 
	{
		insertLoggedInId(request);
		return connection.getSecurityManagementApi().implementRequest(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/deleteGroupMembership")
	public DeleteGroupMembershipResponse implementRequest(@RequestBody DeleteGroupMembershipRequest request) 
	{
		insertLoggedInId(request);
		return connection.getSecurityManagementApi().implementRequest(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/searchApplications")
	public SearchApplicationResponse implementRequest(@RequestBody SearchApplicationRequest request) 
	{
		insertLoggedInId(request);
		return connection.getSecurityManagementApi().implementRequest(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/searchActions")
	public SearchActionResponse implementRequest(@RequestBody SearchActionRequest request) 
	{
		insertLoggedInId(request);
		return connection.getSecurityManagementApi().implementRequest(request);
	}
	
	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/searchResources")
	public SearchResourceResponse implementRequest(@RequestBody SearchResourceRequest request) 
	{
		insertLoggedInId(request);
		return connection.getSecurityManagementApi().implementRequest(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/searchClients")
	public SearchClientResponse implementRequest(@RequestBody SearchClientRequest request) 
	{
		insertLoggedInId(request);
		return connection.getSecurityManagementApi().implementRequest(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/searchClientGroups")
	public SearchClientGroupResponse implementRequest(@RequestBody SearchClientGroupRequest request) 
	{
		insertLoggedInId(request);
		return connection.getSecurityManagementApi().implementRequest(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/searchClientRoles")
	public SearchClientRoleResponse implementRequest(@RequestBody SearchClientRoleRequest request) 
	{
		insertLoggedInId(request);
		return connection.getSecurityManagementApi().implementRequest(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/searchDomainTypes")
	public SearchDomainTypeResponse implementRequest(@RequestBody SearchDomainTypeRequest request) 
	{
		insertLoggedInId(request);
		return connection.getSecurityManagementApi().implementRequest(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/searchScopeTypes")
	public SearchScopeTypeResponse implementRequest(@RequestBody SearchScopeTypeRequest request) 
	{
		insertLoggedInId(request);
		return connection.getSecurityManagementApi().implementRequest(request);
	}

	
	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/createClientGroup")
	public CreateClientGroupResponse implementRequest(@RequestBody CreateClientGroupRequest request) 
	{
		insertLoggedInId(request);
		return connection.getSecurityManagementApi().implementRequest(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/createClientRole")
	public CreateClientRoleResponse implementRequest(@RequestBody CreateClientRoleRequest request) 
	{
		insertLoggedInId(request);
		return connection.getSecurityManagementApi().implementRequest(request);
	}
	

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/createDomainType")
	public CreateDomainTypeResponse implementRequest(@RequestBody CreateDomainTypeRequest request) 
	{
		insertLoggedInId(request);
		return connection.getSecurityManagementApi().implementRequest(request);
	}


	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/createScopeType")
	public CreateScopeTypeResponse implementRequest(@RequestBody CreateScopeTypeRequest request) 
	{
		insertLoggedInId(request);
		return connection.getSecurityManagementApi().implementRequest(request);
	}
	
	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/createScope")
	public CreateScopeResponse implementRequest(@RequestBody CreateScopeRequest request) 
	{
		insertLoggedInId(request);
		return connection.getSecurityManagementApi().implementRequest(request);
	}
	

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/deleteScope")
	public DeleteScopeResponse implementRequest(@RequestBody DeleteScopeRequest request) 
	{
		insertLoggedInId(request);
		return connection.getSecurityManagementApi().implementRequest(request);
	}

	
	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/deleteClientRole")
	public DeleteClientRoleResponse implementRequest(@RequestBody DeleteClientRoleRequest request) 
	{
		insertLoggedInId(request);
		return connection.getSecurityManagementApi().implementRequest(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/deleteDomainType")
	public DeleteDomainTypeResponse implementRequest(@RequestBody DeleteDomainTypeRequest request) 
	{
		insertLoggedInId(request);
		return connection.getSecurityManagementApi().implementRequest(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/deleteScopeType")
	public DeleteScopeTypeResponse implementRequest(@RequestBody DeleteScopeTypeRequest request) 
	{
		insertLoggedInId(request);
		return connection.getSecurityManagementApi().implementRequest(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/searchPermissions")
	public SearchPermissionResponse implementRequest(@RequestBody SearchPermissionRequest request) 
	{
		insertLoggedInId(request);
		return connection.getSecurityManagementApi().implementRequest(request);
	}
	
	
	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/searchScopes")
	public SearchScopeResponse implementRequest(@RequestBody SearchScopeRequest request) 
	{
		insertLoggedInId(request);
		return connection.getSecurityManagementApi().implementRequest(request);
	}
	

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/createDomain")
	public CreateDomainResponse implementRequest(@RequestBody CreateDomainRequest request) 
	{
		insertLoggedInId(request);
		return connection.getSecurityManagementApi().implementRequest(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/deleteDomain")
	public DeleteDomainResponse implementRequest(@RequestBody DeleteDomainRequest request) 
	{
		insertLoggedInId(request);
		return connection.getSecurityManagementApi().implementRequest(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/searchDomains")
	public SearchDomainResponse implementRequest(@RequestBody SearchDomainRequest request) 
	{
		insertLoggedInId(request);
		return connection.getSecurityManagementApi().implementRequest(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/createClientGroupRole")
	public CreateClientGroupRoleResponse implementRequest(@RequestBody CreateClientGroupRoleRequest request) 
	{
		insertLoggedInId(request);
		return connection.getSecurityManagementApi().implementRequest(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/deleteClientGroupRole")
	public DeleteClientGroupRoleResponse implementRequest(@RequestBody DeleteClientGroupRoleRequest request) 
	{
		insertLoggedInId(request);
		return connection.getSecurityManagementApi().implementRequest(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/searchClientGroupRoles")
	public SearchClientGroupRoleResponse implementRequest(@RequestBody SearchClientGroupRoleRequest request) 
	{
		insertLoggedInId(request);
		return connection.getSecurityManagementApi().implementRequest(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/createClientRolePermission")
	public CreateClientRolePermissionResponse implementRequest(@RequestBody CreateClientRolePermissionRequest request) 
	{
		insertLoggedInId(request);
		return connection.getSecurityManagementApi().implementRequest(request);	
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/deleteClientRolePermission")
	public DeleteClientRolePermissionResponse implementRequest(@RequestBody DeleteClientRolePermissionRequest request) 
	{
		insertLoggedInId(request);
		return connection.getSecurityManagementApi().implementRequest(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/searchClientRolePermissions")
	public SearchClientRolePermissionResponse implementRequest(@RequestBody SearchClientRolePermissionRequest request) 
	{
		insertLoggedInId(request);
		return connection.getSecurityManagementApi().implementRequest(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/searchChangeLogs")
	public SearchChangeLogResponse implementRequest(@RequestBody SearchChangeLogRequest request) 
	{
		insertLoggedInId(request);
		return connection.getSecurityManagementApi().implementRequest(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/createBasicAuthClient")
	public CreateBasicAuthClientResponse implementRequest(@RequestBody CreateBasicAuthClientRequest request) 
	{
		insertLoggedInId(request);
		return connection.getSecurityManagementApi().implementRequest(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/deleteBasicAuthClient")
	public DeleteBasicAuthClientResponse implementRequest(@RequestBody DeleteBasicAuthClientRequest request) 
	{
		insertLoggedInId(request);
		return connection.getSecurityManagementApi().implementRequest(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/searchBasicAuthClients")
	public SearchBasicAuthClientResponse implementRequest(@RequestBody SearchBasicAuthClientRequest request) 
	{
		insertLoggedInId(request);
		return connection.getSecurityManagementApi().implementRequest(request);
	}

	
	
	@Override
	@RequestMapping(method = RequestMethod.POST, path = "/hasPermission")
	public SecurityAPIResponse hasPermission(@RequestBody SecurityAPIRequest request) 
	{
		insertLoggedInId(request);
		return connection.getSecurityContextApi().hasPermission(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST, path = "/hasPermissionReturnRoles")
	public SecurityAPIResponse hasPermissionReturnRoles(@RequestBody SecurityAPIRequest request) 
	{
		insertLoggedInId(request);
		return connection.getSecurityContextApi().hasPermissionReturnRoles(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST, path = "/hasPermissionReturnGroups")
	public SecurityAPIResponse hasPermissionReturnGroups(@RequestBody SecurityAPIRequest request) 
	{
		insertLoggedInId(request);
		return connection.getSecurityContextApi().hasPermissionReturnGroups(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST, path = "/hasPermissionReturnScopes")
	public SecurityAPIResponse hasPermissionReturnScopes(@RequestBody SecurityAPIRequest request) 
	{
		insertLoggedInId(request);
		return connection.getSecurityContextApi().hasPermissionReturnScopes(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST, path = "/hasPermissionInScope")
	public SecurityAPIResponse hasPermissionInScope(@RequestBody SecurityAPIRequest request) 
	{
		insertLoggedInId(request);
		return connection.getSecurityContextApi().hasPermissionInScope(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST, path = "/hasRole")
	public SecurityAPIResponse hasRole(@RequestBody SecurityAPIRequest request) 
	{
		insertLoggedInId(request);
		return connection.getSecurityContextApi().hasRole(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST, path = "/hasGroup")
	public SecurityAPIResponse hasGroup(@RequestBody SecurityAPIRequest request) 
	{
		insertLoggedInId(request);
		return connection.getSecurityContextApi().hasGroup(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/getSecurityContext")
	public GetSecurityContextResponse getSecurityContext(@RequestBody GetSecurityContextRequest request) 
	{
		insertLoggedInId(request);
		GetSecurityContextResponse resp = connection.getSecurityContextApi().getSecurityContext(request);
		return resp;
	}

	@Override
	@RequestMapping(method = RequestMethod.POST, path = "/hasPermissions")
	public SecurityAPIResponse hasPermissions(@RequestBody SecurityAPIRequest request) 
	{
		insertLoggedInId(request);
		return connection.getSecurityContextApi().hasPermissions(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST, path = "/getSecuritySetup")
	public GetSecuritySetupResponse getSecuritySetup(GetSecuritySetupRequest request) {
		insertLoggedInId(request);
		return connection.getSecurityContextApi().getSecuritySetup(request);
	}
	
}
