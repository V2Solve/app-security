package com.v2solve.app.security.sdk;

import java.util.List;

import javax.persistence.EntityManager;

import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;

import com.v2solve.app.security.restmodel.request.BaseRequest;
import com.v2solve.app.security.securitymodel.AppSecurityContext;
import com.v2solve.app.security.securitymodel.datalogic.SecurityDataLogic;

import com.v2solve.app.security.utility.StringUtils;


/**
 * Common utility functions for SDK
 * @author Saurin Magiawala
 *
 */
public class SdkUtils 
{

	/**
	 * Given the base request, it looks to see if a calling client id is provided in the request. If yes, then
	 * it will use it to create the client security context, if not provided it will use the authencation object and use 
	 * the authenticated principal as the client and return its security context.
	 * @param em
	 * @param br
	 * @return
	 * @throws Security Exception if it cannot create a security context, because of whatever reason (if client id is not provided for example, or not found)
	 */
	static AppSecurityContext getClientSecurityContextForRequest(EntityManager em,BaseRequest br) 
	{
		String clientId = br.getCallingClientId();
		
		if (StringUtils.isNullOrZeroLength(clientId))
		{
			// Lets check to see if there is authentication in place..
			SecurityContext sc = SecurityContextHolder.getContext();
			
			if (sc != null && sc.getAuthentication() != null && sc.getAuthentication().isAuthenticated())
			{
				clientId = sc.getAuthentication().getName();
			}
			
			if (StringUtils.isNullOrZeroLength(clientId))
				throw new SecurityException("Calling client id, not provided, it is a required field.");
		}
		
		List<String> additionalGroups = br.getGroups();
		AppSecurityContext asc = SecurityDataLogic.readAppSecurityContextForClient(em, clientId, additionalGroups);
		return asc;
	}
	
}
