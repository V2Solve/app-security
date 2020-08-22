package com.v2solve.app.security.config;

import javax.servlet.http.HttpServletRequest;

import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;

public class CommonConfigAdapter extends WebSecurityConfigurerAdapter 
{
    CorsConfigurationSource corsConfigurationSource(CommonSecurityProperties csp) 
    {
    	if (csp == null)
    		return null;
    	
        CorsConfigurationSource ccs = new CorsConfigurationSource() 
        {
			@Override
			public CorsConfiguration getCorsConfiguration(HttpServletRequest request) {
				return csp.getCors();
			}
		};
		
		return ccs;
    }
    
    
    void setXframeOptions (HttpSecurity http, CommonSecurityProperties csp) 
    throws Exception
    {
    	http.headers().frameOptions().disable();	// Default..
    		
    	if (csp != null)
    	{
    		String xframeOption = csp.getXframeOption();
    		if (xframeOption != null)
    		{
    			if (xframeOption.equalsIgnoreCase("deny"))
    				http.headers().frameOptions().deny();
    			else if (xframeOption.equalsIgnoreCase("same-origin") || xframeOption.equalsIgnoreCase("sameorigin"))
    				http.headers().frameOptions().sameOrigin();
    		}
    	}
    }
    
    
    void setCommonConfiguration (HttpSecurity http, CommonSecurityProperties csp)
    throws Exception
    {
    	setXframeOptions(http, csp);
    	CorsConfigurationSource ccs = corsConfigurationSource(csp);
    	if (ccs != null)
    		http.cors().configurationSource(ccs);
    	else
    		http.cors().disable();
    	
    	http.csrf().csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse());
    }
}
