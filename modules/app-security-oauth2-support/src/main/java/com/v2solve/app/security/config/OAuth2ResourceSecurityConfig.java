package com.v2solve.app.security.config;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Conditional;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.oauth2.jwt.JwtDecoder;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;

import com.v2solve.app.security.utility.oauth2.MultiJWTDecoder;
import com.v2solve.app.security.utility.oauth2.ExtendedOAuth2ClientProperties;
import com.v2solve.app.security.utility.oauth2.OAuth2Utils;

import lombok.extern.slf4j.Slf4j;

@Configuration
@Conditional(ConfigConditions.EnableJwtSecurity.class)
@Slf4j
public class OAuth2ResourceSecurityConfig extends CommonAuthConfig {

    @Value("${app.security.authwhitelist:\"\"}")
    String [] authWhiteList;
    
    @Autowired
    ApplicationContext appCtx;
    
    @Bean
    @ConfigurationProperties(prefix = "v2solve.app.security.jwt")
    OAuth2SecurityProperties jwtSecurityProperties ()
    {
    	return new OAuth2SecurityProperties();
    }
	
	@Override
	protected void configure(HttpSecurity http) throws Exception 
	{
		http.csrf().csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse());
		http.cors().configurationSource(corsConfigurationSource());
		http.headers().frameOptions().disable();
		
		OAuth2SecurityProperties oauth2SecurityProperties = appCtx.getBean(OAuth2SecurityProperties.class);
		
		// Lets create the client repository..
		ExtendedOAuth2ClientProperties client = oauth2SecurityProperties.getClient();
		Map<String, JwtDecoder> mapOfDecoders = OAuth2Utils.getMapOfJwtDecoders(client);
		
		if (mapOfDecoders != null && !mapOfDecoders.isEmpty())
		{
			MultiJWTDecoder mjwtD = new MultiJWTDecoder(mapOfDecoders);
			http.oauth2ResourceServer().jwt().decoder(mjwtD);
		}
		else
		{
			log.error("No client registrations are available in the configuration, security may not behave as expected.");
			http.oauth2ResourceServer();
		}
		
	    http
	      .antMatcher("/**")
	      .authorizeRequests()
	      .antMatchers(authWhiteList)
	      .permitAll()
	      .anyRequest()
	      .authenticated();
	}
}
