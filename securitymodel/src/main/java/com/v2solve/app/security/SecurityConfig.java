package com.v2solve.app.security;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Base64;
import java.util.List;
import java.util.StringTokenizer;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.www.BasicAuthenticationEntryPoint;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;

import com.v2solve.app.security.BasicAuthUserListProperties.UserInformation;

import lombok.extern.slf4j.Slf4j;

@Configuration
@Slf4j
public class SecurityConfig extends WebSecurityConfigurerAdapter {

	public SecurityConfig() {
		// TODO Auto-generated constructor stub
	}
	
    @Value("${app.security.authwhitelist:\"\"}")
    String [] auth_whitelist;
	
    @Value("${app.security.basic.realm:securityrealm}")
    String realmName;

    
    @Bean
    public PasswordEncoder gmPasswordEncoder() {
        return new BCryptPasswordEncoder();
    }
    
    
    
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
		http.httpBasic().authenticationEntryPoint(new BasicAuthenticationEntryPoint() {
			@Override
			public void afterPropertiesSet() {
				setRealmName(realmName);
				super.afterPropertiesSet();
			}
		});
		
	    http
	      .antMatcher("/**")
	      .authorizeRequests()
	      .antMatchers(auth_whitelist)
	      .permitAll()
	      .anyRequest()
	      .authenticated();
	}
	
	
    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth,@Autowired BasicAuthUserListProperties basicUserList) throws Exception 
    {
    	log.debug("Configuring Global Users..");
    	
    	if (basicUserList != null && basicUserList.getUsers() != null)
    	{
    		for (UserInformation ui: basicUserList.getUsers())
    		{
    			List<String> roles = new ArrayList<>();
    			
    			if (ui.getRoles() != null)
    			{
    				StringTokenizer st = new StringTokenizer(ui.getRoles(),",; ");
    				while (st.hasMoreTokens())
    				{
    					roles.add(st.nextToken());
    				}
    			}
    			
    			log.debug("Adding user: " + ui.getUsername() + " with roles: " + roles);
    			log.debug("Authorization: " + "Basic " + Base64.getEncoder().encodeToString((ui.getUsername()+":"+ui.getPassword()).getBytes()));
    			
    			String rolesstr [] = roles.toArray(new String[0]);
    			
    	        auth.inMemoryAuthentication()
    	          .withUser(ui.getUsername()).password(gmPasswordEncoder().encode(ui.getPassword()))
    	          .authorities(rolesstr);
    		}
    	}
    	else
    	{
    		log.warn("No users have been configured for Basic Authentication , could not find configuration, gm.security.basic-auth-user-list.users[0].username = ..... and so forth");
    	}
    }    
	
}
