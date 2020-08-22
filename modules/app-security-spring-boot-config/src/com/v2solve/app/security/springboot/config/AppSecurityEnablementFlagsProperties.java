package com.v2solve.app.security.springboot.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Configuration
@ConfigurationProperties(prefix = "v2solve.appsecurityclient.connection")
public class AppSecurityEnablementFlagsProperties 
{
	static final String BasicConnectionEnabledPropertyKey = "v2solve.appsecurityclient.connection.basic";
	static final String OAuth2ConnectionEnabledPropertyKey = "v2solve.appsecurityclient.connection.oauth2";
	
	/**
	 * Whether basic is enabled
	 */
	boolean basic;
	
	/**
	 * Whether auth2 is enabled
	 */
	boolean oauth2;
}
