package com.v2solve.app.security.securitymodel;

import javax.persistence.EntityManager;

import com.v2solve.app.security.securitymodel.datalogic.SecurityDataLogic;

public class ClientSecurityContextFactory 
{
	EntityManager em;
	
	public ClientSecurityContextFactory (EntityManager em)
	{
		this.em = em;
	}
	
	public ClientSecurityContext getSecurityContextForClient(String clientIdentifier)
	{
		return SecurityDataLogic.readAppSecurityContextForClient(em, clientIdentifier);
	}
}
