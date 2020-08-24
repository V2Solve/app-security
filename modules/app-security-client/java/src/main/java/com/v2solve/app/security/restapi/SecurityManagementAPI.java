package com.v2solve.app.security.restapi;

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

public interface SecurityManagementAPI 
{
	DeleteClientResponse implementRequest(DeleteClientRequest request);

	CreateClientResponse implementRequest(CreateClientRequest request);

	CreateApplicationResponse implementRequest(CreateApplicationRequest request);

	DeleteApplicationResponse implementRequest(DeleteApplicationRequest request);

	CreateActionResponse implementRequest(CreateActionRequest request);

	DeleteActionResponse implementRequest(DeleteActionRequest request);

	CreateResourceResponse implementRequest(CreateResourceRequest request);

	DeleteResourceResponse implementRequest(DeleteResourceRequest request);

	CreatePermissionResponse implementRequest(CreatePermissionRequest request);

	DeletePermissionResponse implementRequest(DeletePermissionRequest request);

	CreateGroupMembershipResponse implementRequest(CreateGroupMembershipRequest request);

	DeleteGroupMembershipResponse implementRequest(DeleteGroupMembershipRequest request);
	
	
	SearchApplicationResponse implementRequest(SearchApplicationRequest request);
	
	SearchActionResponse implementRequest(SearchActionRequest request);
	
	SearchResourceResponse implementRequest(SearchResourceRequest request);
	
	SearchClientResponse implementRequest(SearchClientRequest request);
	
	SearchClientGroupResponse implementRequest(SearchClientGroupRequest request);
	
	SearchClientRoleResponse implementRequest(SearchClientRoleRequest request);
	
	SearchDomainTypeResponse implementRequest (SearchDomainTypeRequest request);
	
	SearchScopeTypeResponse implementRequest (SearchScopeTypeRequest request);

	CreateClientGroupResponse implementRequest(CreateClientGroupRequest request);
	
	CreateClientRoleResponse implementRequest(CreateClientRoleRequest request);

	CreateDomainTypeResponse implementRequest(CreateDomainTypeRequest request);

	CreateScopeTypeResponse implementRequest(CreateScopeTypeRequest request);

	DeleteClientGroupResponse implementRequest(DeleteClientGroupRequest request);
	
	DeleteClientRoleResponse implementRequest(DeleteClientRoleRequest request);

	DeleteDomainTypeResponse implementRequest(DeleteDomainTypeRequest request);

	DeleteScopeTypeResponse implementRequest(DeleteScopeTypeRequest request);

	SearchPermissionResponse implementRequest(SearchPermissionRequest request);
	
	CreateDomainResponse implementRequest(CreateDomainRequest request);

	DeleteDomainResponse implementRequest(DeleteDomainRequest request);
	
	SearchDomainResponse implementRequest(SearchDomainRequest request);

	CreateScopeResponse implementRequest(CreateScopeRequest request);

	SearchScopeResponse implementRequest(SearchScopeRequest request);

	DeleteScopeResponse implementRequest(DeleteScopeRequest request);
	
	CreateClientGroupRoleResponse implementRequest (CreateClientGroupRoleRequest request);
	
	DeleteClientGroupRoleResponse implementRequest (DeleteClientGroupRoleRequest request);
	
	SearchClientGroupRoleResponse implementRequest (SearchClientGroupRoleRequest request);
	
	CreateClientRolePermissionResponse implementRequest (CreateClientRolePermissionRequest request);
	
	DeleteClientRolePermissionResponse implementRequest (DeleteClientRolePermissionRequest request);
	
	SearchClientRolePermissionResponse implementRequest (SearchClientRolePermissionRequest request);	
	
	SearchChangeLogResponse implementRequest (SearchChangeLogRequest request);
	
	CreateBasicAuthClientResponse implementRequest (CreateBasicAuthClientRequest request);
	
	DeleteBasicAuthClientResponse implementRequest (DeleteBasicAuthClientRequest request);
	
	SearchBasicAuthClientResponse implementRequest (SearchBasicAuthClientRequest request);
}