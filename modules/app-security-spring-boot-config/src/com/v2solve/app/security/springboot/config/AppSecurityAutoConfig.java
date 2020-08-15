package com.v2solve.app.security.springboot.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Conditional;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.util.Assert;

import com.v2solve.app.security.basic.BasicAuthCredentialSecurityConnection;
import com.v2solve.app.security.basic.BasicAuthCredentials;
import com.v2solve.app.security.connection.AppSecurityConnection;
import com.v2solve.app.security.oauth2.OAuth2ClientCredentialSecurityConnection;
import com.v2solve.app.security.oauth2.OAuthClientTokenCredentials;

@Configuration
public class AppSecurityAutoConfig 
{

	@Bean
	@Conditional(AppSecurityConfigConditions.OAuth2SecurityConditions.class)
	public AppSecurityConnection appSecurityOauth2Connection (@Autowired Environment env)
	{
		return readOAuth2Connection(env);
	}

	@Bean
	@Conditional(AppSecurityConfigConditions.BasicSecurityConditions.class)
	public AppSecurityConnection appSecurityBasicConnection (@Autowired Environment env)
	{
		return readBasicConnection(env);
	}
	
	
	BasicAuthCredentialSecurityConnection readBasicConnection (Environment env)
	{
		String user           = env.getProperty("com.v2solve.app.security.connection.basic.username");
		String password       = env.getProperty("com.v2solve.app.security.connection.basic.password");
		String serverEndPoint = env.getProperty("com.v2solve.app.security.connection.serverEndPoint");
		
		Assert.isTrue(user != null,"Property com.v2solve.app.security.connection.basic.username is missing.");
		Assert.isTrue(password != null,"Property com.v2solve.app.security.connection.basic.password is missing.");
		Assert.isTrue(serverEndPoint != null,"Property com.v2solve.app.security.connection.serverEndPoint is missing.");
		
		BasicAuthCredentials bac = new BasicAuthCredentials(user, password);
		BasicAuthCredentialSecurityConnection bacsc = new BasicAuthCredentialSecurityConnection(bac, serverEndPoint);
		return bacsc;
	}
	
	
	OAuth2ClientCredentialSecurityConnection  readOAuth2Connection (Environment env)
	{
		String clientId           = env.getProperty("com.v2solve.app.security.connection.oauth2.clientId");
		String clientSecret       = env.getProperty("com.v2solve.app.security.connection.oauth2.clientSecret");
		String issuerDomain       = env.getProperty("com.v2solve.app.security.connection.oauth2.issuerDomain");
		String serverEndPoint = env.getProperty("com.v2solve.app.security.connection.serverEndPoint");
		
		Assert.isTrue(clientId != null, "Property com.v2solve.app.security.connection.oauth2.clientId is missing");
		Assert.isTrue(clientSecret != null, "Property com.v2solve.app.security.connection.oauth2.clientSecret is missing");
		Assert.isTrue(issuerDomain != null, "Property com.v2solve.app.security.connection.oauth2.issuerDomain is missing");
		Assert.isTrue(serverEndPoint != null, "Property com.v2solve.app.security.connection.serverEndPoint is missing");
		
		OAuthClientTokenCredentials creds = new OAuthClientTokenCredentials(clientId, clientSecret, issuerDomain);
		OAuth2ClientCredentialSecurityConnection occsc = new OAuth2ClientCredentialSecurityConnection(creds, serverEndPoint);
		return occsc;
	}
	
}
