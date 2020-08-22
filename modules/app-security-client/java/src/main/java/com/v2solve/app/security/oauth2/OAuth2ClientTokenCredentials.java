package com.v2solve.app.security.oauth2;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OAuth2ClientTokenCredentials 
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
