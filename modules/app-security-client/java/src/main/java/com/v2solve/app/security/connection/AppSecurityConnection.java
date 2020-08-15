package com.v2solve.app.security.connection;

import java.util.List;

import com.v2solve.app.security.securitymodel.AppSecurityContext;

public interface AppSecurityConnection 
{
	/**
	 * Try to get a security context for the identified client..
	 * @param clientIdentifier - if null, then the authentication id is the client.
	 * @param assumeGroups - these are the groups that the client belongs too... just assume them, is what it means.
	 * @return
	 */
	AppSecurityContext getSecurityContext (String clientIdentifier,List<String> assumeGroups);
}
