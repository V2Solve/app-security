package com.v2solve.app.security.securitymodel;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Represents an application which is utilizing this model.
 * @author Saurin Magiawala
 *
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Application 
{
	/**
	 * A unique identifier for the application, should be unique in the entire system
	 */
	String appIdentifier;
	
	
	/**
	 * A short identifier, this also should be unique in the entire system.
	 */
	String shortIdentifier;
	
	
	/**
	 * The Application Description.
	 */
	String appDescription;
}
