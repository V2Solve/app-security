package com.v2solve.app.security.securitymodel;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Represents an resource which is utilizing this model.
 * @author Saurin Magiawala
 *
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Resource {

	/**
	 * Name of the Resource
	 */
	String name;
	
	
	/**
	 * The Description of the resource
	 */
	String description;
	
	/**
	 * The declaring app.
	 */
	String appIdentifier;
	
}
