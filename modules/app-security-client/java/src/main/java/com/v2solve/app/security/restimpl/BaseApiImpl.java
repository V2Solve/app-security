package com.v2solve.app.security.restimpl;

import java.util.Map;

import org.springframework.http.MediaType;
import org.springframework.util.Assert;
import org.springframework.util.StringUtils;
import org.springframework.web.reactive.function.client.ClientResponse;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.reactive.function.client.ClientResponse.Headers;
import org.springframework.web.reactive.function.client.WebClient.Builder;

import com.v2solve.app.security.restmodel.request.BaseRequest;

import reactor.core.publisher.Mono;

public class BaseApiImpl {

	AuthHeaderValueProvider vp;
	String appSecurityServerEndPoint;
	String baseUri;
	
	
	private void setUpBaseUri ()
	{
		if (appSecurityServerEndPoint.endsWith("/"))
			appSecurityServerEndPoint += baseUri;
		else
			appSecurityServerEndPoint += "/" + baseUri;
	}
	
	public BaseApiImpl (String serverEndPoint,String baseUri,AuthHeaderValueProvider ahvp)
	{
		this.appSecurityServerEndPoint = serverEndPoint;
		this.vp = ahvp;
		this.baseUri = baseUri;
		
		Assert.isTrue(!StringUtils.isEmpty(appSecurityServerEndPoint),"ServerEndpoint not provided.");
		Assert.isTrue(!StringUtils.isEmpty(baseUri),"baseUri not provided.");
		Assert.isTrue(ahvp != null,"AuthHeaderValueProvider cannot be null in this constructor.");
		
		setUpBaseUri();
	}
	
	public BaseApiImpl (String serverEndPoint,String baseUri)
	{
		this.vp = null;
		this.appSecurityServerEndPoint = serverEndPoint;
		this.baseUri = baseUri;
		
		Assert.isTrue(!StringUtils.isEmpty(appSecurityServerEndPoint),"ServerEndpoint not provided.");
		Assert.isTrue(!StringUtils.isEmpty(baseUri),"baseUri not provided.");
		
		setUpBaseUri();
	}
	
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
	
	
	<T> T getMappedResponse (Mono<ClientResponse> crM, Class<T> clzz)
	{
		ClientResponse cr = crM.block();
		Mono<T> mT = cr.bodyToMono(clzz);
		T t = mT.block();
		
		if (t == null)
		{
			String headerValues = null;
			
			// Lets just try to get it as normal object.
			Mono<Object> objM = cr.bodyToMono(Object.class);
			Object obj = objM.block();
			// Lets capture headers as well..
			Headers hdrs = cr.headers();
			if (hdrs != null)
			{
			   org.springframework.http.HttpHeaders httpHdrs = hdrs.asHttpHeaders();
			   if (httpHdrs != null)
			   {
				   headerValues = "" + httpHdrs.values();
			   }
			}
			
			throw new RuntimeException("Could not convert reponse back to " + clzz.getName() + " response object was: " + obj + " status code was: " + cr.rawStatusCode() + " and headers were: " + headerValues);
		}
		
		
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
	
}
