package com.v2solve.app.security.restapi;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.v2solve.app.security.sdk.SecurityManagementAPI;
import com.v2solve.app.security.sdk.application.CreateApplicationRequest;
import com.v2solve.app.security.sdk.application.CreateApplicationResponse;
import com.v2solve.app.security.sdk.application.DeleteApplicationRequest;
import com.v2solve.app.security.sdk.application.DeleteApplicationResponse;
import com.v2solve.app.security.sdk.application.SearchApplicationsRequest;
import com.v2solve.app.security.sdk.application.SearchApplicationsResponse;
import com.v2solve.app.security.sdk.application.SearchChangeLogRequest;
import com.v2solve.app.security.sdk.application.SearchChangeLogResponse;
import com.v2solve.app.security.sdk.client.CreateClientRequest;
import com.v2solve.app.security.sdk.client.CreateClientResponse;
import com.v2solve.app.security.sdk.client.DeleteClientRequest;
import com.v2solve.app.security.sdk.client.DeleteClientResponse;
import com.v2solve.app.security.sdk.client.SearchClientRequest;
import com.v2solve.app.security.sdk.client.SearchClientResponse;
import com.v2solve.app.security.sdk.groups.CreateClientGroupRequest;
import com.v2solve.app.security.sdk.groups.CreateClientGroupResponse;
import com.v2solve.app.security.sdk.groups.DeleteClientGroupRequest;
import com.v2solve.app.security.sdk.groups.DeleteClientGroupResponse;
import com.v2solve.app.security.sdk.groups.SearchClientGroupRequest;
import com.v2solve.app.security.sdk.groups.SearchClientGroupResponse;
import com.v2solve.app.security.sdk.permission.CreateActionRequest;
import com.v2solve.app.security.sdk.permission.CreateActionResponse;
import com.v2solve.app.security.sdk.permission.CreatePermissionRequest;
import com.v2solve.app.security.sdk.permission.CreatePermissionResponse;
import com.v2solve.app.security.sdk.permission.CreateResourceRequest;
import com.v2solve.app.security.sdk.permission.CreateResourceResponse;
import com.v2solve.app.security.sdk.permission.DeleteActionRequest;
import com.v2solve.app.security.sdk.permission.DeleteActionResponse;
import com.v2solve.app.security.sdk.permission.DeletePermissionRequest;
import com.v2solve.app.security.sdk.permission.DeletePermissionResponse;
import com.v2solve.app.security.sdk.permission.DeleteResourceRequest;
import com.v2solve.app.security.sdk.permission.DeleteResourceResponse;
import com.v2solve.app.security.sdk.permission.SearchActionRequest;
import com.v2solve.app.security.sdk.permission.SearchActionResponse;
import com.v2solve.app.security.sdk.permission.SearchPermissionRequest;
import com.v2solve.app.security.sdk.permission.SearchPermissionResponse;
import com.v2solve.app.security.sdk.permission.SearchResourceRequest;
import com.v2solve.app.security.sdk.permission.SearchResourceResponse;
import com.v2solve.app.security.sdk.relations.CreateClientGroupRoleRequest;
import com.v2solve.app.security.sdk.relations.CreateClientGroupRoleResponse;
import com.v2solve.app.security.sdk.relations.CreateClientRolePermissionRequest;
import com.v2solve.app.security.sdk.relations.CreateClientRolePermissionResponse;
import com.v2solve.app.security.sdk.relations.CreateGroupMembershipRequest;
import com.v2solve.app.security.sdk.relations.CreateGroupMembershipResponse;
import com.v2solve.app.security.sdk.relations.DeleteClientGroupRoleRequest;
import com.v2solve.app.security.sdk.relations.DeleteClientGroupRoleResponse;
import com.v2solve.app.security.sdk.relations.DeleteClientRolePermissionRequest;
import com.v2solve.app.security.sdk.relations.DeleteClientRolePermissionResponse;
import com.v2solve.app.security.sdk.relations.DeleteGroupMembershipRequest;
import com.v2solve.app.security.sdk.relations.DeleteGroupMembershipResponse;
import com.v2solve.app.security.sdk.relations.SearchClientGroupRoleRequest;
import com.v2solve.app.security.sdk.relations.SearchClientGroupRoleResponse;
import com.v2solve.app.security.sdk.relations.SearchClientRolePermissionRequest;
import com.v2solve.app.security.sdk.relations.SearchClientRolePermissionResponse;
import com.v2solve.app.security.sdk.roles.CreateClientRoleRequest;
import com.v2solve.app.security.sdk.roles.CreateClientRoleResponse;
import com.v2solve.app.security.sdk.roles.DeleteClientRoleRequest;
import com.v2solve.app.security.sdk.roles.DeleteClientRoleResponse;
import com.v2solve.app.security.sdk.roles.SearchClientRoleRequest;
import com.v2solve.app.security.sdk.roles.SearchClientRoleResponse;
import com.v2solve.app.security.sdk.scopedomains.CreateDomainRequest;
import com.v2solve.app.security.sdk.scopedomains.CreateDomainResponse;
import com.v2solve.app.security.sdk.scopedomains.CreateDomainTypeRequest;
import com.v2solve.app.security.sdk.scopedomains.CreateDomainTypeResponse;
import com.v2solve.app.security.sdk.scopedomains.CreateScopeRequest;
import com.v2solve.app.security.sdk.scopedomains.CreateScopeResponse;
import com.v2solve.app.security.sdk.scopedomains.CreateScopeTypeRequest;
import com.v2solve.app.security.sdk.scopedomains.CreateScopeTypeResponse;
import com.v2solve.app.security.sdk.scopedomains.DeleteDomainRequest;
import com.v2solve.app.security.sdk.scopedomains.DeleteDomainResponse;
import com.v2solve.app.security.sdk.scopedomains.DeleteDomainTypeRequest;
import com.v2solve.app.security.sdk.scopedomains.DeleteDomainTypeResponse;
import com.v2solve.app.security.sdk.scopedomains.DeleteScopeRequest;
import com.v2solve.app.security.sdk.scopedomains.DeleteScopeResponse;
import com.v2solve.app.security.sdk.scopedomains.DeleteScopeTypeRequest;
import com.v2solve.app.security.sdk.scopedomains.DeleteScopeTypeResponse;
import com.v2solve.app.security.sdk.scopedomains.SearchDomainRequest;
import com.v2solve.app.security.sdk.scopedomains.SearchDomainResponse;
import com.v2solve.app.security.sdk.scopedomains.SearchDomainTypeRequest;
import com.v2solve.app.security.sdk.scopedomains.SearchDomainTypeResponse;
import com.v2solve.app.security.sdk.scopedomains.SearchScopeRequest;
import com.v2solve.app.security.sdk.scopedomains.SearchScopeResponse;
import com.v2solve.app.security.sdk.scopedomains.SearchScopeTypeRequest;
import com.v2solve.app.security.sdk.scopedomains.SearchScopeTypeResponse;

@RestController
@RequestMapping(path = "/v1/managementapi", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
public class ManagementAPIController implements SecurityManagementAPI 
{
	@Autowired
	SecurityManagementAPI implementation = null;
	
	@Override
	@RequestMapping(method = RequestMethod.POST, path = "/deleteClient")
	public DeleteClientResponse implementRequest(@RequestBody DeleteClientRequest request) {
		return implementation.implementRequest(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/createClient")
	public CreateClientResponse implementRequest(@RequestBody CreateClientRequest request) {
		return implementation.implementRequest(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/createApplication")
	public CreateApplicationResponse implementRequest(@RequestBody CreateApplicationRequest request) {
		return implementation.implementRequest(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/deleteApplication")
	public DeleteApplicationResponse implementRequest(@RequestBody DeleteApplicationRequest request) {
		return implementation.implementRequest(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/createAction")
	public CreateActionResponse implementRequest(@RequestBody CreateActionRequest request) {
		return implementation.implementRequest(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/deleteAction")
	public DeleteActionResponse implementRequest(@RequestBody DeleteActionRequest request) {
		return implementation.implementRequest(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/createResource")
	public CreateResourceResponse implementRequest(@RequestBody CreateResourceRequest request) {
		return implementation.implementRequest(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/deleteResource")
	public DeleteResourceResponse implementRequest(@RequestBody DeleteResourceRequest request) {
		return implementation.implementRequest(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/createPermission")
	public CreatePermissionResponse implementRequest(@RequestBody CreatePermissionRequest request) {
		return implementation.implementRequest(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/deletePermission")
	public DeletePermissionResponse implementRequest(@RequestBody DeletePermissionRequest request) {
		return implementation.implementRequest(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/deleteClientGroup")
	public DeleteClientGroupResponse implementRequest(@RequestBody DeleteClientGroupRequest request) {
		return implementation.implementRequest(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/createGroupMembership")
	public CreateGroupMembershipResponse implementRequest(@RequestBody CreateGroupMembershipRequest request) {
		return implementation.implementRequest(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/deleteGroupMembership")
	public DeleteGroupMembershipResponse implementRequest(@RequestBody DeleteGroupMembershipRequest request) {
		return implementation.implementRequest(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/searchApplications")
	public SearchApplicationsResponse implementRequest(@RequestBody SearchApplicationsRequest request) {
		return implementation.implementRequest(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/searchActions")
	public SearchActionResponse implementRequest(@RequestBody SearchActionRequest request) {
		return implementation.implementRequest(request);
	}
	
	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/searchResources")
	public SearchResourceResponse implementRequest(@RequestBody SearchResourceRequest request) {
		return implementation.implementRequest(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/searchClients")
	public SearchClientResponse implementRequest(@RequestBody SearchClientRequest request) {
		return implementation.implementRequest(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/searchClientGroups")
	public SearchClientGroupResponse implementRequest(@RequestBody SearchClientGroupRequest request) {
		return implementation.implementRequest(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/searchClientRoles")
	public SearchClientRoleResponse implementRequest(@RequestBody SearchClientRoleRequest request) {
		return implementation.implementRequest(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/searchDomainTypes")
	public SearchDomainTypeResponse implementRequest(@RequestBody SearchDomainTypeRequest request) {
		return implementation.implementRequest(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/searchScopeTypes")
	public SearchScopeTypeResponse implementRequest(@RequestBody SearchScopeTypeRequest request) {
		return implementation.implementRequest(request);
	}

	
	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/createClientGroup")
	public CreateClientGroupResponse implementRequest(@RequestBody CreateClientGroupRequest request) {
		return implementation.implementRequest(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/createClientRole")
	public CreateClientRoleResponse implementRequest(@RequestBody CreateClientRoleRequest request) {
		return implementation.implementRequest(request);
	}
	

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/createDomainType")
	public CreateDomainTypeResponse implementRequest(@RequestBody CreateDomainTypeRequest request) {
		return implementation.implementRequest(request);
	}


	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/createScopeType")
	public CreateScopeTypeResponse implementRequest(@RequestBody CreateScopeTypeRequest request) {
		return implementation.implementRequest(request);
	}
	
	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/createScope")
	public CreateScopeResponse implementRequest(@RequestBody CreateScopeRequest request) {
		return implementation.implementRequest(request);
	}
	

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/deleteScope")
	public DeleteScopeResponse implementRequest(@RequestBody DeleteScopeRequest request) {
		return implementation.implementRequest(request);
	}

	
	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/deleteClientRole")
	public DeleteClientRoleResponse implementRequest(@RequestBody DeleteClientRoleRequest request) {
		return implementation.implementRequest(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/deleteDomainType")
	public DeleteDomainTypeResponse implementRequest(@RequestBody DeleteDomainTypeRequest request) {
		return implementation.implementRequest(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/deleteScopeType")
	public DeleteScopeTypeResponse implementRequest(@RequestBody DeleteScopeTypeRequest request) {
		return implementation.implementRequest(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/searchPermissions")
	public SearchPermissionResponse implementRequest(@RequestBody SearchPermissionRequest request) {
		return implementation.implementRequest(request);
	}
	
	
	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/searchScopes")
	public SearchScopeResponse implementRequest(@RequestBody SearchScopeRequest request) {
		return implementation.implementRequest(request);
	}
	

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/createDomain")
	public CreateDomainResponse implementRequest(@RequestBody CreateDomainRequest request) {
		return implementation.implementRequest(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/deleteDomain")
	public DeleteDomainResponse implementRequest(@RequestBody DeleteDomainRequest request) {
		return implementation.implementRequest(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/searchDomains")
	public SearchDomainResponse implementRequest(@RequestBody SearchDomainRequest request) {
		return implementation.implementRequest(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/createClientGroupRole")
	public CreateClientGroupRoleResponse implementRequest(@RequestBody CreateClientGroupRoleRequest request) {
		return implementation.implementRequest(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/deleteClientGroupRole")
	public DeleteClientGroupRoleResponse implementRequest(@RequestBody DeleteClientGroupRoleRequest request) {
		return implementation.implementRequest(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/searchClientGroupRoles")
	public SearchClientGroupRoleResponse implementRequest(@RequestBody SearchClientGroupRoleRequest request) {
		return implementation.implementRequest(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/createClientRolePermission")
	public CreateClientRolePermissionResponse implementRequest(@RequestBody CreateClientRolePermissionRequest request) {
		return implementation.implementRequest(request);	
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/deleteClientRolePermission")
	public DeleteClientRolePermissionResponse implementRequest(@RequestBody DeleteClientRolePermissionRequest request) {
		return implementation.implementRequest(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/searchClientRolePermissions")
	public SearchClientRolePermissionResponse implementRequest(@RequestBody SearchClientRolePermissionRequest request) {
		return implementation.implementRequest(request);
	}

	@Override
	@RequestMapping(method = RequestMethod.POST,path = "/searchChangeLogs")
	public SearchChangeLogResponse implementRequest(@RequestBody SearchChangeLogRequest request) 
	{
		return implementation.implementRequest(request);
	}

}
