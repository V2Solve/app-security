package com.v2solve.app.security.oauth2;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class OAuthClientTokenCredentials 
{
	/**
	 * The client id..
	 */
	String clientId;
	
	/**
	 * The client secret
	 */
	String clientSecret;
	
	/**
	 * The issuerDomain from where tokenUri could be obtained.
	 */
	String issuerDomain;
}
