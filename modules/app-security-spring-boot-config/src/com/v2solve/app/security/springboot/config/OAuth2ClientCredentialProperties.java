package com.v2solve.app.security.springboot.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

import com.v2solve.app.security.oauth2.OAuth2ClientTokenCredentials;

import lombok.Data;

@Configuration
@ConfigurationProperties(prefix = "v2solve.appsecurityclient.connection")
@Data
public class OAuth2ClientCredentialProperties 
{
	String serverEndPoint;
	OAuth2ClientTokenCredentials oauth2Credentials;
}
