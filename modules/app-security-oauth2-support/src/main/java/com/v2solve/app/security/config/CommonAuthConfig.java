package com.v2solve.app.security.config;

import java.util.Arrays;

import javax.servlet.http.HttpServletRequest;

import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;

public class CommonAuthConfig extends WebSecurityConfigurerAdapter 
{

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
}
