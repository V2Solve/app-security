package com.v2solve.app.security.restimpl;

import java.util.Map;
import org.springframework.http.MediaType;
import org.springframework.web.reactive.function.client.ClientResponse;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.reactive.function.client.WebClient.Builder;

import com.v2solve.app.security.restapi.SecurityContextAPI;
import com.v2solve.app.security.restmodel.request.BaseRequest;
import com.v2solve.app.security.restmodel.request.GetSecurityContextRequest;
import com.v2solve.app.security.restmodel.request.SecurityAPIRequest;
import com.v2solve.app.security.restmodel.response.GetSecurityContextResponse;
import com.v2solve.app.security.restmodel.response.SecurityAPIResponse;


import reactor.core.publisher.Mono;

public class ContextAPIImpl implements SecurityContextAPI 
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
			
	public ContextAPIImpl (String appSecurityServerEndPoint,AuthHeaderValueProvider authHeaderValueProvider)
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

}
