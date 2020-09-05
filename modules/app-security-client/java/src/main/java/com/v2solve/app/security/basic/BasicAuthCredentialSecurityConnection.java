package com.v2solve.app.security.basic;

import java.util.List;

import com.v2solve.app.security.connection.AppSecurityConnection;
import com.v2solve.app.security.restapi.SecurityContextAPI;
import com.v2solve.app.security.restapi.SecurityManagementAPI;
import com.v2solve.app.security.restimpl.AuthHeaderValueProvider;
import com.v2solve.app.security.restimpl.ContextAPIImpl;
import com.v2solve.app.security.restimpl.SecurityManagementAPIImpl;
import com.v2solve.app.security.restmodel.request.GetSecurityContextRequest;
import com.v2solve.app.security.restmodel.response.GetSecurityContextResponse;
import com.v2solve.app.security.securitymodel.AppSecurityContext;
import com.v2solve.app.security.securitymodel.AppSecurityContextImpl;

/**
 * This is a connection class which will connect to the App Security server and 
 * get security contexts as required.
 * @author Saurinya
 */
public class BasicAuthCredentialSecurityConnection implements AppSecurityConnection,AuthHeaderValueProvider
{
	BasicAuthCredentials credentials = null;
	String appSecurityServerEndpoint = null;
	SecurityContextAPI scapi = null;
	SecurityManagementAPI smapi = null;
	
	public BasicAuthCredentialSecurityConnection(BasicAuthCredentials credentials,String appSecurityServerEndpoint) 
	{
		this.credentials = credentials;
		this.appSecurityServerEndpoint = appSecurityServerEndpoint;
		scapi = new ContextAPIImpl(appSecurityServerEndpoint, this);
		smapi = new SecurityManagementAPIImpl(appSecurityServerEndpoint, this);
	}
	
	@Override
	public AppSecurityContext getSecurityContext(String clientIdentifier,List<String> assumeGroups) 
	{
		GetSecurityContextRequest gscr = new GetSecurityContextRequest();
		if (clientIdentifier != null)
			gscr.setClientId(clientIdentifier);
		
		if (assumeGroups != null)
			gscr.setGroups(assumeGroups);
		
		GetSecurityContextResponse gscrr = scapi.getSecurityContext(gscr);
		return new AppSecurityContextImpl(gscrr.getAppClient(),gscrr.getPermissions());
	}
	
	@Override
	public SecurityManagementAPI getSecurityManagementApi ()
	{
		return smapi;
	}
	
	
	@Override
	public SecurityContextAPI getSecurityContextApi ()
	{
		return scapi;
	}
	

	@Override
	public String getAuthHeaderValue() 
	{
		return "Basic " + credentials.getBasicAuthValue();
	}
}