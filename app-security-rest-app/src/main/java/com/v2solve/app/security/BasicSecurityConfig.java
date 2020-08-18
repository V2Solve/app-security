package com.v2solve.app.security;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Base64;
import java.util.List;
import java.util.StringTokenizer;

import javax.servlet.http.HttpServletRequest;
import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.www.BasicAuthenticationEntryPoint;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;

import com.v2solve.app.security.BasicAuthUserListProperties.UserInformation;

import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Configuration  // Commented of, because we are using OuthWebSecurity
@Slf4j
@NoArgsConstructor
public class BasicSecurityConfig extends WebSecurityConfigurerAdapter 
{
	
    @Value("${v2solve.app.security.authwhitelist:\"\"}")
    String [] authWhiteList;
	
    @Value("${v2solve.app.security.basic.realm:securityrealm:'v2sove-realm'}")
    String realmName;
    
    @Bean
    public PasswordEncoder nativePasswordEncoder() {
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
	      .antMatchers(authWhiteList)
	      .permitAll()
	      .anyRequest()
	      .authenticated();
	}
	
	
	/**
	 * Configures the global user list, by reading the users from the configuration properties.
	 * @param auth
	 * @param basicUserList
	 * @throws Exception
	 */
    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth,
    		@Autowired BasicAuthUserListProperties basicUserList,
    		@Autowired DataSource dataSource,
    		@Autowired Environment springEnv) 
    throws Exception 
    {
    	log.debug("configuring the jdbc authentication for basic auth.");
    	
    	auth.jdbcAuthentication()
    	    .dataSource(dataSource)
    	    .usersByUsernameQuery("select name as username,user_password as password,enabled from basic_auth_clients where name = ?")
    	    .authoritiesByUsernameQuery("select name as username,'ADMIN' as authority from basic_auth_clients where name = ?");
    		
    	if (basicUserList != null && basicUserList.getUsers() != null)
    	{
    		for (UserInformation ui: basicUserList.getUsers())
    		{
    			List<String> roles = new ArrayList<>();
    			
    			if (ui.getRoles() != null)
    			{
    				final StringTokenizer st = new StringTokenizer(ui.getRoles(),",; ");
    				while (st.hasMoreTokens())
    				{
    					roles.add(st.nextToken());
    				}
    			}
    			
    			log.debug("Adding user: " + ui.getUsername() + " with roles: " + roles);
    			log.debug("Authorization: " + "Basic " + Base64.getEncoder().encodeToString((ui.getUsername()+":"+ui.getPassword()).getBytes()));
    			
    			String rolesstr [] = roles.toArray(new String[0]);
    			
    	        auth.inMemoryAuthentication()
    	          .withUser(ui.getUsername()).password(nativePasswordEncoder().encode(ui.getPassword()))
    	          .authorities(rolesstr);
    		}
    	}
    	else
    	{
    		log.warn("No users have been configured for Basic Authentication, could not find configuration, v2solve.app.security.basic.users[0].username=..... and so forth");
    		log.warn("So at this point, only users present in the database may work for basic authentication");
    	}
    }    
}
