package com.v2solve.app.security.springboot.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Conditional;
import org.springframework.context.annotation.Configuration;
import org.springframework.util.Assert;

import com.v2solve.app.security.basic.BasicAuthCredentialSecurityConnection;
import com.v2solve.app.security.basic.BasicAuthCredentials;
import com.v2solve.app.security.connection.AppSecurityConnection;
import com.v2solve.app.security.oauth2.OAuth2ClientCredentialSecurityConnection;
import com.v2solve.app.security.oauth2.OAuth2ClientTokenCredentials;

import lombok.extern.slf4j.Slf4j;

@Configuration
@Slf4j
public class AppSecurityAutoConfig 
{
	@Autowired
	OAuth2ClientCredentialProperties oauth2CCprops;
	
	@Autowired BasicCredentialProperties basicCprops;

	@Bean
	@Conditional(AppSecurityConfigConditions.OAuth2SecurityConditions.class)
	public AppSecurityConnection appSecurityOauth2Connection (@Autowired OAuth2ClientCredentialProperties oauth2CCprops)
	{
		OAuth2ClientTokenCredentials octc = oauth2CCprops.getOauth2Credentials();
		Assert.isTrue(octc!=null, "OAuth2ClientCredentials properties are not set! / AppSecurityConnection CANNOT be created.");
		
		Assert.isTrue(octc.getClientId() != null, "Property clientId not provided for AppSecurityConnection.");
		Assert.isTrue(octc.getClientSecret() != null, "Property clientSecret not provided for AppSecurityConnection");
		Assert.isTrue(octc.getIssuerDomain() != null, "Property issuerDomain not provided for AppSecurityConnection");
		Assert.isTrue(oauth2CCprops.getServerEndPoint() != null, "Property serverEndPoint not provided for AppSecurityConnection");
		log.info("AppSecurityOAuth2Connection: "+oauth2CCprops.getServerEndPoint());
		log.info("AppSecurityOAuth2Connection (cliendId): "+octc.getClientId());
		log.info("AppSecurityOAuth2Connection (issuerDomain): "+octc.getIssuerDomain());
		return new OAuth2ClientCredentialSecurityConnection(octc, oauth2CCprops.getServerEndPoint());
	}

	@Bean
	@Conditional(AppSecurityConfigConditions.BasicSecurityConditions.class)
	public AppSecurityConnection appSecurityBasicConnection (@Autowired BasicCredentialProperties basicCprops)
	{
		BasicAuthCredentials bac = basicCprops.getBasicCredentials();
		Assert.isTrue(bac!=null, "BasicAuthCredential properties are not set! / AppSecurityConnection CANNOT be created.");
		
		Assert.isTrue(bac.getUsername() != null,"Property username is missing for AppSecurityConnection");
		Assert.isTrue(bac.getPassword() != null,"Property password is missing for AppSecurityConnection");
		Assert.isTrue(basicCprops.getServerEndPoint() != null,"Property serverEndPoint is missing for AppSecurityConnection");

		log.info("AppSecurityBasicAuthConnection: "+basicCprops.getServerEndPoint());
		log.info("AppSecurityBasicAuthConnection (username): "+bac.getUsername());
		
		return new BasicAuthCredentialSecurityConnection(bac,basicCprops.getServerEndPoint());
	}
	
}
