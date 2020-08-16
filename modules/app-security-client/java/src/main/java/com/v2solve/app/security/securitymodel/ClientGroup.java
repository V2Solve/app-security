package com.v2solve.app.security.securitymodel;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Represents an Client Group which is utilizing this model.
 * @author Saurin Magiawala
 *
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ClientGroup 
{
	/**
	 * A unique identifier for the role
	 */
	String name;
	
	/**
	 * The Description.
	 */
	String description;
	
	/**
	 * The owning app if any associated with the  record.
	 */
	String appIdentifier;
}
