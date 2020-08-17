package com.v2solve.app.security;

import javax.persistence.EntityManagerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.v2solve.app.security.sdk.SecurityManangementAPIImpl;
import com.v2solve.app.security.restapi.SecurityContextAPI;
import com.v2solve.app.security.restapi.SecurityManagementAPI;
import com.v2solve.app.security.sdk.SecurityContextAPIImpl;

/**
 * This is the application configuration class. 
 * It creates appropriate beans required for serving API requests 
 * on the controllers. There are other security configuration 
 * classes as well in the package.
 * @author Saurin Magiawala
 *
 */
@Configuration
public class AppConfig 
{

	/**
	 * Returns the SecurityManagementAPI bean
	 * @param emf
	 * @return
	 */
	@Bean(name = "localSecurityManagementIMPL")
	public SecurityManangementAPIImpl securityAPIImpl (@Autowired final EntityManagerFactory emf)
	{
		return new SecurityManangementAPIImpl(emf);
	}
	
	/**
	 * Returns the SecurityManagementAPI bean
	 * @param emf
	 * @return
	 */
	@Bean (name="securityAPI")
	public SecurityManagementAPI securityAPI (@Autowired final EntityManagerFactory emf)
	{
		return new SecurityManangementAPIImpl(emf);
	}
	
	
	/**
	 * Returns a Security Context API implementation bean.
	 * @param emf
	 * @return
	 */
	@Bean
	public SecurityContextAPI securityContextAPI (@Autowired final EntityManagerFactory emf)
	{
		return new SecurityContextAPIImpl(emf);
	}
}
