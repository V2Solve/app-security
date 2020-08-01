package com.v2solve.app.security.sdk;

import com.v2solve.app.security.securitymodel.Domain;

/**
 * Contains domain types and constants used for this application
 * @author Saurin Magiawala
 *
 */
public class Domains 
{
	public static String APP_DOMAIN_TYPE = "AppDomain";
	
	public static Domain appDomain(String domainName)
	{
		return new Domain (domainName,APP_DOMAIN_TYPE);
	}
	
}
