package com.v2solve.app.security.restimpl;


import java.util.Map;

import org.springframework.http.MediaType;
import org.springframework.web.reactive.function.client.ClientResponse;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.reactive.function.client.WebClient.Builder;

import com.v2solve.app.security.restapi.SecurityManagementAPI;
import com.v2solve.app.security.restmodel.request.BaseRequest;
import com.v2solve.app.security.restmodel.request.CreateActionRequest;
import com.v2solve.app.security.restmodel.request.CreateApplicationRequest;
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
import com.v2solve.app.security.restmodel.request.SearchApplicationsRequest;
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
import com.v2solve.app.security.restmodel.response.SearchApplicationsResponse;
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

import reactor.core.publisher.Mono;

// Remote over the network rest mapping for the SecurityManagementAPI..
public class SecurityManagementAPIImpl implements SecurityManagementAPI
{
	AuthHeaderValueProvider vp = null;
	String appSecurityServerEndPoint = null;
	
	WebClient getWebClient ()
	{
		String authHeaderValue = null;
		if (vp != null)
			authHeaderValue = vp.getAuthHeaderValue();
		
		Builder builder = WebClient.builder();
		if (authHeaderValue != null && authHeaderValue.trim().length() > 0)
			builder.defaultHeader("Authorization", authHeaderValue);
			builder.baseUrl(appSecurityServerEndPoint);
		
		return builder.build();
	}
			
	public SecurityManagementAPIImpl (String appSecurityServerEndPoint,AuthHeaderValueProvider authHeaderValueProvider)
	{
		this.vp = authHeaderValueProvider;
	}
	
	<T> T getMappedResponse (Mono<ClientResponse> crM, Class<T> clzz)
	{
		ClientResponse cr = crM.block();
		Mono<T> mT = cr.bodyToMono(clzz);
		T t = mT.block();
		return t;
	}
	
	<T> T implementRequest (String endPointUri, BaseRequest br,Class<T> responseClass)
	{
		WebClient wc = getWebClient();
		Mono<ClientResponse> response = wc.post()
										  .uri(endPointUri, (Map<?,?>)null)
				                          .accept(MediaType.APPLICATION_JSON)
				                          .bodyValue(br)
				                          .exchange();
		return getMappedResponse(response, responseClass);
	}

	@Override
	public DeleteClientResponse implementRequest(DeleteClientRequest request) {
		
		return implementRequest("",request,DeleteClientResponse.class);
		
	}

	@Override
	public CreateClientResponse implementRequest(CreateClientRequest request) {
		
		return implementRequest("",request,CreateClientResponse.class);
	}

	@Override
	public CreateApplicationResponse implementRequest(CreateApplicationRequest request) {
		
		return implementRequest("",request,CreateApplicationResponse.class);
		
	}

	@Override
	public DeleteApplicationResponse implementRequest(DeleteApplicationRequest request) {
		
		return implementRequest("",request,DeleteApplicationResponse.class);
		
	}

	@Override
	public CreateActionResponse implementRequest(CreateActionRequest request) {
		
		return implementRequest("",request,CreateActionResponse.class);
		
	}

	@Override
	public DeleteActionResponse implementRequest(DeleteActionRequest request) {
		
		return implementRequest("",request,DeleteActionResponse.class);
		
	}

	@Override
	public CreateResourceResponse implementRequest(CreateResourceRequest request) {
		
		return implementRequest("",request,CreateResourceResponse.class);
		
	}

	@Override
	public DeleteResourceResponse implementRequest(DeleteResourceRequest request) {
		
		return implementRequest("",request,DeleteResourceResponse.class);
		
	}

	@Override
	public CreatePermissionResponse implementRequest(CreatePermissionRequest request) {
		
		return implementRequest("",request,CreatePermissionResponse.class);
		
	}

	@Override
	public DeletePermissionResponse implementRequest(DeletePermissionRequest request) {
		
		return implementRequest("",request,DeletePermissionResponse.class);
		
	}

	@Override
	public CreateGroupMembershipResponse implementRequest(CreateGroupMembershipRequest request) {
		
		return implementRequest("",request,CreateGroupMembershipResponse.class);
		
	}

	@Override
	public DeleteGroupMembershipResponse implementRequest(DeleteGroupMembershipRequest request) {
		
		return implementRequest("",request,DeleteGroupMembershipResponse.class);
		
	}

	@Override
	public SearchApplicationsResponse implementRequest(SearchApplicationsRequest request) {
		
		return implementRequest("",request,SearchApplicationsResponse.class);
		
	}

	@Override
	public SearchActionResponse implementRequest(SearchActionRequest request) {
		
		return implementRequest("",request,SearchActionResponse.class);
		
	}

	@Override
	public SearchResourceResponse implementRequest(SearchResourceRequest request) {
		
		return implementRequest("",request,SearchResourceResponse.class);
		
	}

	@Override
	public SearchClientResponse implementRequest(SearchClientRequest request) {
		
		return implementRequest("",request,SearchClientResponse.class);
		
	}

	@Override
	public SearchClientGroupResponse implementRequest(SearchClientGroupRequest request) {
		
		return implementRequest("",request,SearchClientGroupResponse.class);
		
	}

	@Override
	public SearchClientRoleResponse implementRequest(SearchClientRoleRequest request) {
		
		return implementRequest("",request,SearchClientRoleResponse.class);
		
	}

	@Override
	public SearchDomainTypeResponse implementRequest(SearchDomainTypeRequest request) {
		
		return implementRequest("",request,SearchDomainTypeResponse.class);
		
	}

	@Override
	public SearchScopeTypeResponse implementRequest(SearchScopeTypeRequest request) {
		
		return implementRequest("",request,SearchScopeTypeResponse.class);
		
	}

	@Override
	public CreateClientGroupResponse implementRequest(CreateClientGroupRequest request) {
		
		return implementRequest("",request,CreateClientGroupResponse.class);
		
	}

	@Override
	public CreateClientRoleResponse implementRequest(CreateClientRoleRequest request) {
		
		return implementRequest("",request,CreateClientRoleResponse.class);
		
	}

	@Override
	public CreateDomainTypeResponse implementRequest(CreateDomainTypeRequest request) {
		
		return implementRequest("",request,CreateDomainTypeResponse.class);
		
	}

	@Override
	public CreateScopeTypeResponse implementRequest(CreateScopeTypeRequest request) {
		
		return implementRequest("",request,CreateScopeTypeResponse.class);
		
	}

	@Override
	public DeleteClientGroupResponse implementRequest(DeleteClientGroupRequest request) {
		
		return implementRequest("",request,DeleteClientGroupResponse.class);
		
	}

	@Override
	public DeleteClientRoleResponse implementRequest(DeleteClientRoleRequest request) {
		
		return implementRequest("",request,DeleteClientRoleResponse.class);
		
	}

	@Override
	public DeleteDomainTypeResponse implementRequest(DeleteDomainTypeRequest request) {
		
		return implementRequest("",request,DeleteDomainTypeResponse.class);
		
	}

	@Override
	public DeleteScopeTypeResponse implementRequest(DeleteScopeTypeRequest request) {
		
		return implementRequest("",request,DeleteScopeTypeResponse.class);
		
	}

	@Override
	public SearchPermissionResponse implementRequest(SearchPermissionRequest request) {
		
		return implementRequest("",request,SearchPermissionResponse.class);
		
	}

	@Override
	public CreateDomainResponse implementRequest(CreateDomainRequest request) {
		
		return implementRequest("",request,CreateDomainResponse.class);
		
	}

	@Override
	public DeleteDomainResponse implementRequest(DeleteDomainRequest request) {
		
		return implementRequest("",request,DeleteDomainResponse.class);
		
	}

	@Override
	public SearchDomainResponse implementRequest(SearchDomainRequest request) {
		
		return implementRequest("",request,SearchDomainResponse.class);
		
	}

	@Override
	public CreateScopeResponse implementRequest(CreateScopeRequest request) {
		
		return implementRequest("",request,CreateScopeResponse.class);
		
	}

	@Override
	public SearchScopeResponse implementRequest(SearchScopeRequest request) {
		
		return implementRequest("",request,SearchScopeResponse.class);
		
	}

	@Override
	public DeleteScopeResponse implementRequest(DeleteScopeRequest request) {
		
		return implementRequest("",request,DeleteScopeResponse.class);
		
	}

	@Override
	public CreateClientGroupRoleResponse implementRequest(CreateClientGroupRoleRequest request) {
		
		return implementRequest("",request,CreateClientGroupRoleResponse.class);
		
	}

	@Override
	public DeleteClientGroupRoleResponse implementRequest(DeleteClientGroupRoleRequest request) {
		
		return implementRequest("",request,DeleteClientGroupRoleResponse.class);
		
	}

	@Override
	public SearchClientGroupRoleResponse implementRequest(SearchClientGroupRoleRequest request) {
		
		return implementRequest("",request,SearchClientGroupRoleResponse.class);
		
	}

	@Override
	public CreateClientRolePermissionResponse implementRequest(CreateClientRolePermissionRequest request) {
		
		return implementRequest("",request,CreateClientRolePermissionResponse.class);
		
	}

	@Override
	public DeleteClientRolePermissionResponse implementRequest(DeleteClientRolePermissionRequest request) {
		
		return implementRequest("",request,DeleteClientRolePermissionResponse.class);
		
	}

	@Override
	public SearchClientRolePermissionResponse implementRequest(SearchClientRolePermissionRequest request) {
		
		return implementRequest("",request,SearchClientRolePermissionResponse.class);
		
	}

	@Override
	public SearchChangeLogResponse implementRequest(SearchChangeLogRequest request) {
		
		return implementRequest("",request,SearchChangeLogResponse.class);
		
	}
	
}