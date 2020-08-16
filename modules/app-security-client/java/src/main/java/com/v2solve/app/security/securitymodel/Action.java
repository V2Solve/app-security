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
public class Action 
{
	/**
	 * A unique identifier for the action, should be unique in the entire system
	 */
	String actionName;
	
	/**
	 * The Description.
	 */
	String actionDescription;
	
	/**
	 * The owning app if any associated with the Action record.
	 */
	String appIdentifier;
}
