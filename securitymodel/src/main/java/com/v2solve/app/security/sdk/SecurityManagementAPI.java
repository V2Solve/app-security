package com.v2solve.app.security.sdk;

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
	
	
	SearchApplicationsResponse implementRequest(SearchApplicationsRequest request);
	
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
	
}