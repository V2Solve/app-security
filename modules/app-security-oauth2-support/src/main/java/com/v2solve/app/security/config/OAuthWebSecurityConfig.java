package com.v2solve.app.security.config;



import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Conditional;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.oauth2.client.registration.ClientRegistration;
import org.springframework.security.oauth2.client.registration.ClientRegistrationRepository;
import org.springframework.security.oauth2.client.registration.InMemoryClientRegistrationRepository;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;
import com.v2solve.app.security.utility.oauth2.ExtendedOAuth2ClientProperties;
import com.v2solve.app.security.utility.oauth2.OAuth2Utils;

import lombok.extern.slf4j.Slf4j;


/**
 * Use this class as configuration to enable oauth type web security. (meaning a logon page will be provided for logging on).
 * This is useful when the UI application is being served as a part of the spring boot application itself.
 * @author Saurin Magiawala
 *
 */
@Configuration
@Conditional(ConfigConditions.EnableOAuth2Security.class)
@Slf4j
public class OAuthWebSecurityConfig extends CommonAuthConfig {

    @Value("${app.security.authwhitelist:\"\"}")
    String [] authWhiteList;
    
    @Autowired
    ApplicationContext appCtx;
    
    @Bean
    @ConfigurationProperties(prefix = "v2solve.app.security.oauth2")
    OAuth2SecurityProperties oauth2SecurityProperties ()
    {
    	return new OAuth2SecurityProperties();
    }
    
    
    @Bean("configuredClientRepository")
    ClientRegistrationRepository configuredClientRegistrationRepository (@Autowired OAuth2SecurityProperties oauth2SecurityProperties)
    {
		try 
		{
			ExtendedOAuth2ClientProperties client = oauth2SecurityProperties.getClient();
			List<ClientRegistration> clientRegistrations = OAuth2Utils.getListOfClientRegistrations(client);
			if (clientRegistrations != null)
			{
				InMemoryClientRegistrationRepository imrC = new InMemoryClientRegistrationRepository(clientRegistrations);
				return imrC;
			}
		} 
		catch (RuntimeException e)
		{
			throw e;
		}
		catch (Throwable e)
		{
			throw new RuntimeException(e);
		}
		
		return null;
    }
    
	
	@Override
	protected void configure(HttpSecurity http) throws Exception 
	{
		http.csrf().csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse());
		http.cors().configurationSource(corsConfigurationSource());
		http.headers().frameOptions().disable();
		
		ClientRegistrationRepository clientRepository = appCtx.getBean("configuredClientRepository",ClientRegistrationRepository.class);
		
		if (clientRepository == null)
		{
			log.error("No client registrations are available in the configuration, security may not behave as expected.");
			http.oauth2Login();
		}
		else
		{
			http.oauth2Login().clientRegistrationRepository(clientRepository);
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