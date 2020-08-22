package com.v2solve.app.security.oauth2;

import java.time.Instant;
import java.util.List;

import org.springframework.security.oauth2.core.OAuth2AccessToken;

import com.v2solve.app.security.connection.AppSecurityConnection;
import com.v2solve.app.security.restapi.SecurityContextAPI;
import com.v2solve.app.security.restimpl.AuthHeaderValueProvider;
import com.v2solve.app.security.restimpl.ContextAPIImpl;
import com.v2solve.app.security.restmodel.request.GetSecurityContextRequest;
import com.v2solve.app.security.restmodel.response.GetSecurityContextResponse;
import com.v2solve.app.security.securitymodel.AppSecurityContext;
import com.v2solve.app.security.securitymodel.AppSecurityContextImpl;
import com.v2solve.app.security.utility.oauth2.OAuth2Utils;

/**
 * This is a connection class which will connect to the App Security server and 
 * get security contexts as required.
 * @author Saurinya
 */
public class OAuth2ClientCredentialSecurityConnection implements AppSecurityConnection,AuthHeaderValueProvider
{
	OAuth2ClientTokenCredentials credentials = null;
	String appSecurityServerEndpoint = null;
	OAuth2AccessToken accessToken = null;
	SecurityContextAPI scapi = null;
	
	public OAuth2ClientCredentialSecurityConnection(OAuth2ClientTokenCredentials credentials,String appSecurityServerEndpoint) 
	{
		this.credentials = credentials;
		this.appSecurityServerEndpoint = appSecurityServerEndpoint;
		scapi = new ContextAPIImpl(appSecurityServerEndpoint, this);
	}
	
	@Override
	public AppSecurityContext getSecurityContext(String clientIdentifier,List<String> assumeGroups) 
	{
		GetSecurityContextRequest gscr = new GetSecurityContextRequest();
		if (clientIdentifier != null)
			gscr.setCallingClientId(clientIdentifier);
		
		if (assumeGroups != null)
			gscr.setGroups(assumeGroups);
		
		GetSecurityContextResponse gscrr = scapi.getSecurityContext(gscr);
		return new AppSecurityContextImpl(gscrr.getAppClient(),gscrr.getPermissions());
	}

	@Override
	public String getAuthHeaderValue() 
	{
		Instant toCompare = Instant.now().minusSeconds(60);
		
		if (accessToken == null || accessToken.getExpiresAt().isAfter(toCompare))
		{
			accessToken = OAuth2Utils.getClientCredentialToken(credentials.getClientId(), credentials.getClientSecret(), credentials.getIssuerDomain());
		}
		
		return "Bearer " + accessToken.getTokenValue();
	}
}