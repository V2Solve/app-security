package com.v2solve.app.security.restapi;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

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
import com.v2solve.app.security.sdk.SecurityManangementAPIImpl;

@RestController
@RequestMapping(path = "/v1/managementapi", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
public class ManagementAPIController implements SecurityManagementAPI 
{
	@Autowired
	SecurityManagementAPI securityAPI;
	
	@Autowired
	SecurityManangementAPIImpl localSecurityManagementIMPL;
	
	@Autowired PasswordEncoder passwordEncoder;
	
	@Override
	@RequestMapping(method = RequestMethod.POST, path = "/deleteClient")
	public DeleteClientResponse implementRequest(@RequestBody DeleteClientRequest request) {
		return securityAPI.implementRequest(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/createClient")
	public CreateClientResponse implementRequest(@RequestBody CreateClientRequest request) {
		return securityAPI.implementRequest(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/createApplication")
	public CreateApplicationResponse implementRequest(@RequestBody CreateApplicationRequest request) {
		return securityAPI.implementRequest(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/deleteApplication")
	public DeleteApplicationResponse implementRequest(@RequestBody DeleteApplicationRequest request) {
		return securityAPI.implementRequest(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/createAction")
	public CreateActionResponse implementRequest(@RequestBody CreateActionRequest request) {
		return securityAPI.implementRequest(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/deleteAction")
	public DeleteActionResponse implementRequest(@RequestBody DeleteActionRequest request) {
		return securityAPI.implementRequest(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/createResource")
	public CreateResourceResponse implementRequest(@RequestBody CreateResourceRequest request) {
		return securityAPI.implementRequest(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/deleteResource")
	public DeleteResourceResponse implementRequest(@RequestBody DeleteResourceRequest request) {
		return securityAPI.implementRequest(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/createPermission")
	public CreatePermissionResponse implementRequest(@RequestBody CreatePermissionRequest request) {
		return securityAPI.implementRequest(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/deletePermission")
	public DeletePermissionResponse implementRequest(@RequestBody DeletePermissionRequest request) {
		return securityAPI.implementRequest(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/deleteClientGroup")
	public DeleteClientGroupResponse implementRequest(@RequestBody DeleteClientGroupRequest request) {
		return securityAPI.implementRequest(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/createGroupMembership")
	public CreateGroupMembershipResponse implementRequest(@RequestBody CreateGroupMembershipRequest request) {
		return securityAPI.implementRequest(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/deleteGroupMembership")
	public DeleteGroupMembershipResponse implementRequest(@RequestBody DeleteGroupMembershipRequest request) {
		return securityAPI.implementRequest(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/searchApplications")
	public SearchApplicationResponse implementRequest(@RequestBody SearchApplicationRequest request) {
		return securityAPI.implementRequest(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/searchActions")
	public SearchActionResponse implementRequest(@RequestBody SearchActionRequest request) {
		return securityAPI.implementRequest(request);
	}
	
	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/searchResources")
	public SearchResourceResponse implementRequest(@RequestBody SearchResourceRequest request) {
		return securityAPI.implementRequest(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/searchClients")
	public SearchClientResponse implementRequest(@RequestBody SearchClientRequest request) {
		return securityAPI.implementRequest(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/searchClientGroups")
	public SearchClientGroupResponse implementRequest(@RequestBody SearchClientGroupRequest request) {
		return securityAPI.implementRequest(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/searchClientRoles")
	public SearchClientRoleResponse implementRequest(@RequestBody SearchClientRoleRequest request) {
		return securityAPI.implementRequest(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/searchDomainTypes")
	public SearchDomainTypeResponse implementRequest(@RequestBody SearchDomainTypeRequest request) {
		return securityAPI.implementRequest(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/searchScopeTypes")
	public SearchScopeTypeResponse implementRequest(@RequestBody SearchScopeTypeRequest request) {
		return securityAPI.implementRequest(request);
	}

	
	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/createClientGroup")
	public CreateClientGroupResponse implementRequest(@RequestBody CreateClientGroupRequest request) {
		return securityAPI.implementRequest(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/createClientRole")
	public CreateClientRoleResponse implementRequest(@RequestBody CreateClientRoleRequest request) {
		return securityAPI.implementRequest(request);
	}
	

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/createDomainType")
	public CreateDomainTypeResponse implementRequest(@RequestBody CreateDomainTypeRequest request) {
		return securityAPI.implementRequest(request);
	}


	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/createScopeType")
	public CreateScopeTypeResponse implementRequest(@RequestBody CreateScopeTypeRequest request) {
		return securityAPI.implementRequest(request);
	}
	
	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/createScope")
	public CreateScopeResponse implementRequest(@RequestBody CreateScopeRequest request) {
		return securityAPI.implementRequest(request);
	}
	

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/deleteScope")
	public DeleteScopeResponse implementRequest(@RequestBody DeleteScopeRequest request) {
		return securityAPI.implementRequest(request);
	}

	
	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/deleteClientRole")
	public DeleteClientRoleResponse implementRequest(@RequestBody DeleteClientRoleRequest request) {
		return securityAPI.implementRequest(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/deleteDomainType")
	public DeleteDomainTypeResponse implementRequest(@RequestBody DeleteDomainTypeRequest request) {
		return securityAPI.implementRequest(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/deleteScopeType")
	public DeleteScopeTypeResponse implementRequest(@RequestBody DeleteScopeTypeRequest request) {
		return securityAPI.implementRequest(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/searchPermissions")
	public SearchPermissionResponse implementRequest(@RequestBody SearchPermissionRequest request) {
		return securityAPI.implementRequest(request);
	}
	
	
	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/searchScopes")
	public SearchScopeResponse implementRequest(@RequestBody SearchScopeRequest request) {
		return securityAPI.implementRequest(request);
	}
	

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/createDomain")
	public CreateDomainResponse implementRequest(@RequestBody CreateDomainRequest request) {
		return securityAPI.implementRequest(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/deleteDomain")
	public DeleteDomainResponse implementRequest(@RequestBody DeleteDomainRequest request) {
		return securityAPI.implementRequest(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/searchDomains")
	public SearchDomainResponse implementRequest(@RequestBody SearchDomainRequest request) {
		return securityAPI.implementRequest(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/createClientGroupRole")
	public CreateClientGroupRoleResponse implementRequest(@RequestBody CreateClientGroupRoleRequest request) {
		return securityAPI.implementRequest(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/deleteClientGroupRole")
	public DeleteClientGroupRoleResponse implementRequest(@RequestBody DeleteClientGroupRoleRequest request) {
		return securityAPI.implementRequest(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/searchClientGroupRoles")
	public SearchClientGroupRoleResponse implementRequest(@RequestBody SearchClientGroupRoleRequest request) {
		return securityAPI.implementRequest(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/createClientRolePermission")
	public CreateClientRolePermissionResponse implementRequest(@RequestBody CreateClientRolePermissionRequest request) {
		return securityAPI.implementRequest(request);	
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/deleteClientRolePermission")
	public DeleteClientRolePermissionResponse implementRequest(@RequestBody DeleteClientRolePermissionRequest request) {
		return securityAPI.implementRequest(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/searchClientRolePermissions")
	public SearchClientRolePermissionResponse implementRequest(@RequestBody SearchClientRolePermissionRequest request) {
		return securityAPI.implementRequest(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/searchChangeLogs")
	public SearchChangeLogResponse implementRequest(@RequestBody SearchChangeLogRequest request) 
	{
		return securityAPI.implementRequest(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/createBasicAuthClient")
	public CreateBasicAuthClientResponse implementRequest(@RequestBody CreateBasicAuthClientRequest request) {
		return localSecurityManagementIMPL.implementRequest(request,passwordEncoder);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/deleteBasicAuthClient")
	public DeleteBasicAuthClientResponse implementRequest(@RequestBody DeleteBasicAuthClientRequest request) {
		return securityAPI.implementRequest(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/searchBasicAuthClients")
	public SearchBasicAuthClientResponse implementRequest(@RequestBody SearchBasicAuthClientRequest request) {
		return securityAPI.implementRequest(request);
	}

}
