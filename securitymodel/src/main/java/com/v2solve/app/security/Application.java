package com.v2solve.app.security;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import lombok.NoArgsConstructor;


/**
 * Main Spring boot class for the application
 * @author Saurinya
 *
 */
@SpringBootApplication
@NoArgsConstructor
public class Application 
{
	/**
	 * Standard run method.
	 * @param args
	 */
	public static void main (final String args [])
	{
		SpringApplication.run(Application.class, args);
	}
	
}
