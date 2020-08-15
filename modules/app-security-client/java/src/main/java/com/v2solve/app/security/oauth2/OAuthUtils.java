package com.v2solve.app.security.oauth2;

import org.springframework.security.oauth2.client.endpoint.OAuth2ClientCredentialsGrantRequest;
import org.springframework.security.oauth2.client.endpoint.WebClientReactiveClientCredentialsTokenResponseClient;
import org.springframework.security.oauth2.client.registration.ClientRegistration;
import org.springframework.security.oauth2.client.registration.ClientRegistrations;
import org.springframework.security.oauth2.core.OAuth2AccessToken;
import org.springframework.security.oauth2.core.endpoint.OAuth2AccessTokenResponse;


import reactor.core.publisher.Mono;

/**
 * Utility functions for OAuth.
 * @author Saurinya
 *
 */
public class OAuthUtils 
{
	/**
	 * Obtains a client token, by building a client registration object from the issuerDomain,
	 * 
	 * @param clientId
	 * @param clientSecret
	 * @param issuerDomain
	 * @return
	 */
	public static OAuth2AccessToken getClientCredentialToken (String clientId,String clientSecret,String issuerDomain)
	{
		ClientRegistration cr = ClientRegistrations.fromIssuerLocation(issuerDomain)
				                                   .clientId(clientId).clientSecret(clientSecret).build();
		OAuth2ClientCredentialsGrantRequest o2cc = new OAuth2ClientCredentialsGrantRequest(cr);
		WebClientReactiveClientCredentialsTokenResponseClient wrcctr = new WebClientReactiveClientCredentialsTokenResponseClient();
		Mono<OAuth2AccessTokenResponse> responseM = wrcctr.getTokenResponse(o2cc);
		OAuth2AccessTokenResponse response = responseM.block();
		OAuth2AccessToken accessToken = response.getAccessToken();
		return accessToken;
	}
	
	
	
	
}
