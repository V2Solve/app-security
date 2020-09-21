package com.v2solve.app.security;

import javax.persistence.EntityManagerFactory;
import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.cloud.task.configuration.EnableTask;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.core.env.Environment;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.v2solve.app.security.sdk.SecurityManangementAPIImpl;
import com.v2solve.app.security.config.BasicSecurityProperties;
import com.v2solve.app.security.config.EnableSecurity;
import com.v2solve.app.security.container.Initializer;
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
@EnableSecurity
@EnableTask
public class AppConfig 
{
    @Primary
    @ConfigurationProperties(prefix="spring.datasource")
    public DataSource dataSource() {
        return DataSourceBuilder.create().build();
    }
	

    @Bean
    @ConfigurationProperties(prefix = "v2solve.app.security.initializer")
    InitializerConfig initializerConfig ()
    {
    	return new InitializerConfig();
    }
    
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
	
	
	@Bean
	ApplicationRunner initializerTask (@Autowired final EntityManagerFactory emf,
			                           @Autowired Environment springEnvironment,
			                           @Autowired PasswordEncoder passwordEncoder,
			                           @Autowired InitializerConfig initializerConfig)
	{
		return new Initializer(emf, springEnvironment, passwordEncoder,initializerConfig);
	}
}
