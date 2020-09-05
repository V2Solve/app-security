package com.v2solve.app.security.fromlocal;

import java.util.List;
import org.springframework.util.Assert;
import com.v2solve.app.security.connection.AppSecurityConnection;
import com.v2solve.app.security.restapi.SecurityContextAPI;
import com.v2solve.app.security.restapi.SecurityManagementAPI;
import com.v2solve.app.security.restmodel.request.GetSecurityContextRequest;
import com.v2solve.app.security.securitymodel.AppSecurityContext;
import com.v2solve.app.security.securitymodel.SecuritySetupModel;

/**
 * This is a connection class which will use a java object model to return SecurityContexts.. 
 * and get security contexts as required.
 * @author Saurinya
 */
public class SecurityGraphSecurityConnection implements AppSecurityConnection
{
	SecuritySetupModel securitySetupModel = null;
	
	public SecurityGraphSecurityConnection(SecuritySetupModel securitySetupModel) 
	{
		Assert.isTrue(securitySetupModel != null,"securitySetupModel cannot be null..");
		this.securitySetupModel = securitySetupModel;
	}
	
	@Override
	public AppSecurityContext getSecurityContext(String clientIdentifier,List<String> assumeGroups) 
	{
		GetSecurityContextRequest gscr = new GetSecurityContextRequest();
		if (clientIdentifier != null)
			gscr.setCallingClientId(clientIdentifier);
		
		if (assumeGroups != null)
			gscr.setGroups(assumeGroups);
		
		return getSecurityContext(gscr);
	}


	@Override
	public SecurityContextAPI getSecurityContextApi() {
		throw new RuntimeException("getSecurityContextApi method is not supported in a graph security connection.");
	}

	@Override
	public SecurityManagementAPI getSecurityManagementApi() {
		throw new RuntimeException("getSecurityManagementApi method is not supported in a graph security connection.");
	}

	
	private AppSecurityContext getSecurityContext (GetSecurityContextRequest request)
	{
		return securitySetupModel.getSecurityContext(request.getCallingClientId(), request.getGroups());
	}
}