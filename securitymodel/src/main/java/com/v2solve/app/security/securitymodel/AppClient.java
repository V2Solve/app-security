package com.v2solve.app.security.securitymodel;

import lombok.AllArgsConstructor;
import lombok.Data;


/**
 * Represents a client.
 * @author Saurin Magiawala
 *
 */
@Data
@AllArgsConstructor
public class AppClient implements java.io.Serializable 
{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	/**
	 * The unique ID by which the client is identified in the system, must be unique in the entire system.
	 */
	String clientIdentifier;
	
	
	/**
	 * Description of the client.
	 */
	String description;
	
	/**
	 * The owning app if any associated with the record.
	 */
	String appIdentifier;
}
