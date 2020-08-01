package com.v2solve.app.security.securitymodel;

import lombok.AllArgsConstructor;
import lombok.Data;

/**
 * Permission for purpose of domain model
 * @author Saurin Magiawala
 *
 */
@Data
@AllArgsConstructor
public class Permission {

	/**
	 * Name of the permission
	 */
	String name;
	
	
	/**
	 * The action involved.
	 */
	String action;
	
	
	/**
	 * The Resource
	 */
	String resource;
	
	
	/**
	 * Description of the permission
	 */
	String description;
	
	
	/**
	 * Owning App.
	 */
	String appIdentifier;
	
}
