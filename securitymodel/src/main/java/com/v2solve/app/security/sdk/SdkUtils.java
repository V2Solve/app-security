package com.v2solve.app.security.sdk;

import java.util.List;

import javax.persistence.EntityManager;

import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;

import com.v2solve.app.security.securitymodel.ClientSecurityContext;
import com.v2solve.app.security.securitymodel.datalogic.SecurityDataLogic;

import com.v2solve.app.security.utility.StringUtils;


public class SdkUtils {

	public SdkUtils() {
		// TODO Auto-generated constructor stub
	}

	static ClientSecurityContext getClientSecurityContextForRequest(EntityManager em,BaseRequest br) 
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
		ClientSecurityContext asc = SecurityDataLogic.readAppSecurityContextForClient(em, clientId, additionalGroups);
		return asc;
	}
	
}
