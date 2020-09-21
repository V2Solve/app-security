package com.v2solve.app.security.container;


import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;


import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.core.env.Environment;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.util.StringUtils;

import com.v2solve.app.security.InitializerConfig;
import com.v2solve.app.security.config.BasicAuthUser;
import com.v2solve.app.security.model.entities.BasicAuthClient;
import com.v2solve.app.security.securitymodel.datalogic.DatalogicUtils;
import com.v2solve.app.security.utility.JPAUtils;
import com.v2solve.app.security.utility.TransactionWrapper;

import lombok.extern.slf4j.Slf4j;

@Slf4j
public class Initializer implements ApplicationRunner 
{
	EntityManagerFactory emf;
	Environment springEnvironment;
	PasswordEncoder passwordEncoder;
	InitializerConfig basicProps = null;
	
	public Initializer(EntityManagerFactory emf,Environment springEnvironment,PasswordEncoder passwordEncoder,InitializerConfig basicProps) 
	{
		this.emf = emf;
		this.springEnvironment=springEnvironment;
		this.passwordEncoder = passwordEncoder;
		this.basicProps = basicProps;
	}
	
	@Override
	public void run(ApplicationArguments args) throws Exception 
	{
		log.info("Initializer started..");
	
		EntityManager em = null;
		
		if (basicProps == null || basicProps.getBasicAuthUsers() == null || basicProps.getBasicAuthUsers().size() <= 0)
		{
			log.info("No basic auth users have been defined in environment. Initializer exited..");
			return;
		}
		
		// Okay so now atleast something is given, lets see if we can create the appropriate objects..
		
		if (em == null)
			em = this.emf.createEntityManager();
		
		TransactionWrapper tw = new TransactionWrapper(em);
		
		try
		{
			List<BasicAuthUser> basicAuthUsers = basicProps.getBasicAuthUsers();
			
			for (BasicAuthUser bau: basicAuthUsers)
			{
				if (!StringUtils.isEmpty(bau.getPassword()))
				createBasicAuthClientUserIfNotExisting(em, bau.getUsername(), bau.getPassword());
				else
					throw new RuntimeException("Password not provided for basic auth user: " + bau.getUsername());
			}
			
			tw.success();
		}
		catch (Throwable e)
		{
			log.error(com.v2solve.app.security.utility.StringUtils.traceString(e));
		}
		finally {
			
			if (tw != null)
				tw.commit();
			
			if (em != null)
				em.close();
		}
		
		log.info("Initializer done.");
	}

	
	void createBasicAuthClientUserIfNotExisting (EntityManager em, String username, String password)
	{
		BasicAuthClient bac = DatalogicUtils.findObjectReturnNull(em, BasicAuthClient.class, "name", username);
		
		if (bac == null)
		{
			// Great so now let us create an entry..
			bac = new BasicAuthClient();
			bac.setApplication(null);
			bac.setEnabled(true);
			bac.setName(username);
			bac.setUserPassword(this.passwordEncoder.encode(password));
			JPAUtils.createObject(em, bac);
			em.flush();
			log.info("Created basic auth client: " + username);
		}
		else
		{
			log.warn("Basic auth client: " + username + " already exists in basic auth clients .. will not update it or recreate it.");
		}
	}
}