package com.v2solve.app.security.restimpl;


import com.v2solve.app.security.restapi.SecurityManagementAPI;
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
import com.v2solve.app.security.restmodel.request.CreateTrustedBasicAppRequest;
import com.v2solve.app.security.restmodel.request.RequestUtils;
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
import com.v2solve.app.security.restmodel.response.CreateTrustedBasicAppResponse;
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

// Remote over the network rest mapping for the SecurityManagementAPI..
public class SecurityManagementAPIImpl extends BaseApiImpl implements SecurityManagementAPI
{
	static final String contextUri = "v1/managementapi";
	
	public SecurityManagementAPIImpl (String appSecurityServerEndPoint,AuthHeaderValueProvider authHeaderValueProvider)
	{
		super(appSecurityServerEndPoint, contextUri,authHeaderValueProvider);
	}

	@Override
	public DeleteClientResponse implementRequest(DeleteClientRequest request) {
		
		return implementRequest(RequestUtils.getRequestEndpointBasedOnClass(request),request,DeleteClientResponse.class);
		
	}

	@Override
	public CreateClientResponse implementRequest(CreateClientRequest request) {
		
		return implementRequest(RequestUtils.getRequestEndpointBasedOnClass(request),request,CreateClientResponse.class);
	}

	@Override
	public CreateApplicationResponse implementRequest(CreateApplicationRequest request) {
		
		return implementRequest(RequestUtils.getRequestEndpointBasedOnClass(request),request,CreateApplicationResponse.class);
		
	}

	@Override
	public DeleteApplicationResponse implementRequest(DeleteApplicationRequest request) {
		
		return implementRequest(RequestUtils.getRequestEndpointBasedOnClass(request),request,DeleteApplicationResponse.class);
		
	}

	@Override
	public CreateActionResponse implementRequest(CreateActionRequest request) {
		
		return implementRequest(RequestUtils.getRequestEndpointBasedOnClass(request),request,CreateActionResponse.class);
		
	}

	@Override
	public DeleteActionResponse implementRequest(DeleteActionRequest request) {
		
		return implementRequest(RequestUtils.getRequestEndpointBasedOnClass(request),request,DeleteActionResponse.class);
		
	}

	@Override
	public CreateResourceResponse implementRequest(CreateResourceRequest request) {
		
		return implementRequest(RequestUtils.getRequestEndpointBasedOnClass(request),request,CreateResourceResponse.class);
		
	}

	@Override
	public DeleteResourceResponse implementRequest(DeleteResourceRequest request) {
		
		return implementRequest(RequestUtils.getRequestEndpointBasedOnClass(request),request,DeleteResourceResponse.class);
		
	}

	@Override
	public CreatePermissionResponse implementRequest(CreatePermissionRequest request) {
		
		return implementRequest(RequestUtils.getRequestEndpointBasedOnClass(request),request,CreatePermissionResponse.class);
		
	}

	@Override
	public DeletePermissionResponse implementRequest(DeletePermissionRequest request) {
		
		return implementRequest(RequestUtils.getRequestEndpointBasedOnClass(request),request,DeletePermissionResponse.class);
		
	}

	@Override
	public CreateGroupMembershipResponse implementRequest(CreateGroupMembershipRequest request) {
		
		return implementRequest(RequestUtils.getRequestEndpointBasedOnClass(request),request,CreateGroupMembershipResponse.class);
		
	}

	@Override
	public DeleteGroupMembershipResponse implementRequest(DeleteGroupMembershipRequest request) {
		
		return implementRequest(RequestUtils.getRequestEndpointBasedOnClass(request),request,DeleteGroupMembershipResponse.class);
		
	}

	@Override
	public SearchApplicationResponse implementRequest(SearchApplicationRequest request) {
		
		return implementRequest(RequestUtils.getRequestEndpointBasedOnClass(request),request,SearchApplicationResponse.class);
		
	}

	@Override
	public SearchActionResponse implementRequest(SearchActionRequest request) {
		
		return implementRequest(RequestUtils.getRequestEndpointBasedOnClass(request),request,SearchActionResponse.class);
		
	}

	@Override
	public SearchResourceResponse implementRequest(SearchResourceRequest request) {
		
		return implementRequest(RequestUtils.getRequestEndpointBasedOnClass(request),request,SearchResourceResponse.class);
		
	}

	@Override
	public SearchClientResponse implementRequest(SearchClientRequest request) {
		
		return implementRequest(RequestUtils.getRequestEndpointBasedOnClass(request),request,SearchClientResponse.class);
		
	}

	@Override
	public SearchClientGroupResponse implementRequest(SearchClientGroupRequest request) {
		
		return implementRequest(RequestUtils.getRequestEndpointBasedOnClass(request),request,SearchClientGroupResponse.class);
		
	}

	@Override
	public SearchClientRoleResponse implementRequest(SearchClientRoleRequest request) {
		
		return implementRequest(RequestUtils.getRequestEndpointBasedOnClass(request),request,SearchClientRoleResponse.class);
		
	}

	@Override
	public SearchDomainTypeResponse implementRequest(SearchDomainTypeRequest request) {
		
		return implementRequest(RequestUtils.getRequestEndpointBasedOnClass(request),request,SearchDomainTypeResponse.class);
		
	}

	@Override
	public SearchScopeTypeResponse implementRequest(SearchScopeTypeRequest request) {
		
		return implementRequest(RequestUtils.getRequestEndpointBasedOnClass(request),request,SearchScopeTypeResponse.class);
		
	}

	@Override
	public CreateClientGroupResponse implementRequest(CreateClientGroupRequest request) {
		
		return implementRequest(RequestUtils.getRequestEndpointBasedOnClass(request),request,CreateClientGroupResponse.class);
		
	}

	@Override
	public CreateClientRoleResponse implementRequest(CreateClientRoleRequest request) {
		
		return implementRequest(RequestUtils.getRequestEndpointBasedOnClass(request),request,CreateClientRoleResponse.class);
		
	}

	@Override
	public CreateDomainTypeResponse implementRequest(CreateDomainTypeRequest request) {
		
		return implementRequest(RequestUtils.getRequestEndpointBasedOnClass(request),request,CreateDomainTypeResponse.class);
		
	}

	@Override
	public CreateScopeTypeResponse implementRequest(CreateScopeTypeRequest request) {
		
		return implementRequest(RequestUtils.getRequestEndpointBasedOnClass(request),request,CreateScopeTypeResponse.class);
		
	}

	@Override
	public DeleteClientGroupResponse implementRequest(DeleteClientGroupRequest request) {
		
		return implementRequest(RequestUtils.getRequestEndpointBasedOnClass(request),request,DeleteClientGroupResponse.class);
		
	}

	@Override
	public DeleteClientRoleResponse implementRequest(DeleteClientRoleRequest request) {
		
		return implementRequest(RequestUtils.getRequestEndpointBasedOnClass(request),request,DeleteClientRoleResponse.class);
		
	}

	@Override
	public DeleteDomainTypeResponse implementRequest(DeleteDomainTypeRequest request) {
		
		return implementRequest(RequestUtils.getRequestEndpointBasedOnClass(request),request,DeleteDomainTypeResponse.class);
		
	}

	@Override
	public DeleteScopeTypeResponse implementRequest(DeleteScopeTypeRequest request) {
		
		return implementRequest(RequestUtils.getRequestEndpointBasedOnClass(request),request,DeleteScopeTypeResponse.class);
		
	}

	@Override
	public SearchPermissionResponse implementRequest(SearchPermissionRequest request) {
		
		return implementRequest(RequestUtils.getRequestEndpointBasedOnClass(request),request,SearchPermissionResponse.class);
		
	}

	@Override
	public CreateDomainResponse implementRequest(CreateDomainRequest request) {
		
		return implementRequest(RequestUtils.getRequestEndpointBasedOnClass(request),request,CreateDomainResponse.class);
		
	}

	@Override
	public DeleteDomainResponse implementRequest(DeleteDomainRequest request) {
		
		return implementRequest(RequestUtils.getRequestEndpointBasedOnClass(request),request,DeleteDomainResponse.class);
		
	}

	@Override
	public SearchDomainResponse implementRequest(SearchDomainRequest request) {
		
		return implementRequest(RequestUtils.getRequestEndpointBasedOnClass(request),request,SearchDomainResponse.class);
		
	}

	@Override
	public CreateScopeResponse implementRequest(CreateScopeRequest request) {
		
		return implementRequest(RequestUtils.getRequestEndpointBasedOnClass(request),request,CreateScopeResponse.class);
		
	}

	@Override
	public SearchScopeResponse implementRequest(SearchScopeRequest request) {
		
		return implementRequest(RequestUtils.getRequestEndpointBasedOnClass(request),request,SearchScopeResponse.class);
		
	}

	@Override
	public DeleteScopeResponse implementRequest(DeleteScopeRequest request) {
		
		return implementRequest(RequestUtils.getRequestEndpointBasedOnClass(request),request,DeleteScopeResponse.class);
		
	}

	@Override
	public CreateClientGroupRoleResponse implementRequest(CreateClientGroupRoleRequest request) {
		
		return implementRequest(RequestUtils.getRequestEndpointBasedOnClass(request),request,CreateClientGroupRoleResponse.class);
		
	}

	@Override
	public DeleteClientGroupRoleResponse implementRequest(DeleteClientGroupRoleRequest request) {
		
		return implementRequest(RequestUtils.getRequestEndpointBasedOnClass(request),request,DeleteClientGroupRoleResponse.class);
		
	}

	@Override
	public SearchClientGroupRoleResponse implementRequest(SearchClientGroupRoleRequest request) {
		
		return implementRequest(RequestUtils.getRequestEndpointBasedOnClass(request),request,SearchClientGroupRoleResponse.class);
		
	}

	@Override
	public CreateClientRolePermissionResponse implementRequest(CreateClientRolePermissionRequest request) {
		
		return implementRequest(RequestUtils.getRequestEndpointBasedOnClass(request),request,CreateClientRolePermissionResponse.class);
		
	}

	@Override
	public DeleteClientRolePermissionResponse implementRequest(DeleteClientRolePermissionRequest request) {
		
		return implementRequest(RequestUtils.getRequestEndpointBasedOnClass(request),request,DeleteClientRolePermissionResponse.class);
		
	}

	@Override
	public SearchClientRolePermissionResponse implementRequest(SearchClientRolePermissionRequest request) {
		
		return implementRequest(RequestUtils.getRequestEndpointBasedOnClass(request),request,SearchClientRolePermissionResponse.class);
		
	}

	@Override
	public SearchChangeLogResponse implementRequest(SearchChangeLogRequest request) {
		
		return implementRequest(RequestUtils.getRequestEndpointBasedOnClass(request),request,SearchChangeLogResponse.class);
		
	}

	@Override
	public CreateBasicAuthClientResponse implementRequest(CreateBasicAuthClientRequest request) {
		return implementRequest(RequestUtils.getRequestEndpointBasedOnClass(request),request,CreateBasicAuthClientResponse.class);
	}

	@Override
	public DeleteBasicAuthClientResponse implementRequest(DeleteBasicAuthClientRequest request) {
		return implementRequest(RequestUtils.getRequestEndpointBasedOnClass(request),request,DeleteBasicAuthClientResponse.class);
	}

	@Override
	public SearchBasicAuthClientResponse implementRequest(SearchBasicAuthClientRequest request) {
		return implementRequest(RequestUtils.getRequestEndpointBasedOnClass(request),request,SearchBasicAuthClientResponse.class);
	}

	@Override
	public CreateTrustedBasicAppResponse implementRequest(CreateTrustedBasicAppRequest request) {
		return implementRequest(RequestUtils.getRequestEndpointBasedOnClass(request),request,CreateTrustedBasicAppResponse.class);
	}
	
}