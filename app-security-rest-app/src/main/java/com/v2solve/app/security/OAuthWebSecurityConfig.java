package com.v2solve.app.security;


import java.util.Arrays;

import javax.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import lombok.extern.slf4j.Slf4j;

/**
 * Use this class as configuration to enable oauth type web security. (meaning a logon page will be provided for logging on).
 * This is useful when the UI application is being served as a part of the spring boot application itself.
 * @author Saurin Magiawala
 *
 */
// @Configuration
@Slf4j
public class OAuthWebSecurityConfig extends WebSecurityConfigurerAdapter {

	
    @Value("${app.security.authwhitelist:\"\"}")
    String [] authWhiteList;
	
    CorsConfigurationSource corsConfigurationSource() 
    {
        CorsConfigurationSource ccs = new CorsConfigurationSource() 
        {
			@Override
			public CorsConfiguration getCorsConfiguration(HttpServletRequest request) {
		        CorsConfiguration configuration = new CorsConfiguration();
		        configuration.setAllowedOrigins(Arrays.asList(CorsConfiguration.ALL));
		        configuration.setAllowedMethods(Arrays.asList(CorsConfiguration.ALL));
		        configuration.setAllowedHeaders(Arrays.asList(CorsConfiguration.ALL));
//		        configuration.setAllowCredentials(true);
				return configuration;
			}
		};
		
		return ccs;
    }
    
    
	@Override
	protected void configure(HttpSecurity http) throws Exception 
	{
		http.csrf().disable();
		http.cors().configurationSource(corsConfigurationSource());
		http.headers().frameOptions().disable();
		http.oauth2Login();
		
	    http
	      .antMatcher("/**")
	      .authorizeRequests()
	      .antMatchers(authWhiteList)
	      .permitAll()
	      .anyRequest()
	      .authenticated();
	}
	
}
