package com.v2solve.app.security.config;

import java.util.List;

import org.springframework.boot.context.properties.ConfigurationProperties;

import lombok.Data;

/**
 * This class maps the spring configuration properties for setting up the basic security
 * @author Saurinya
 *
 */
@ConfigurationProperties(prefix = "v2solve.app.security.basic")
@Data
public class BasicSecurityProperties 
{
	/**
	 * Configuration for basic security should only be enabled if this is true..
	 */
	boolean enable;
	
	/**
	 * The realm for the users.
	 */
	String  realm;
	
	/**
	 * List of users configured in the configuration.
	 */
	List<BasicAuthUser> users;
}