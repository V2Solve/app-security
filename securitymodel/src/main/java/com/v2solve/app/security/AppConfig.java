package com.v2solve.app.security;

import javax.persistence.EntityManagerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import com.v2solve.app.security.sdk.SecurityManagementAPI;
import com.v2solve.app.security.sdk.SecurityManangementAPIImpl;
import com.v2solve.app.security.sdk.SecurityContextAPI;
import com.v2solve.app.security.sdk.SecurityContextAPIImpl;

@Configuration
public class AppConfig 
{
	@Bean
	public SecurityManagementAPI securityAPI (@Autowired EntityManagerFactory emf)
	{
		return new SecurityManangementAPIImpl(emf);
	}
	
	@Bean
	public SecurityContextAPI securityContextAPI (@Autowired EntityManagerFactory emf)
	{
		return new SecurityContextAPIImpl(emf);
	}
}
