package com.v2solve.app.security.securitymodel;

import java.io.Serializable;
import lombok.AllArgsConstructor;
import lombok.Data;


/**
 * Represents a DomainType in the security model
 * @author Saurin Magiawala
 *
 */
@Data
@AllArgsConstructor
public class DomainType implements Serializable 
{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	/**
	 * The name of the type.
	 */
	String name;
	
	/**
	 * Owning Application
	 */
	String appIdentifier;
}