package com.v2solve.app.security.securitymodel;

import lombok.AllArgsConstructor;
import lombok.Data;

/**
 * Represents a Assignment of a role to a client group.
 * @author Saurin Magiawala
 *
 */
@Data
@AllArgsConstructor
public class ClientGroupRole {


	// Unique key in the system, identifying the Association.
	String key;
	
	// Name of the group
	String groupName;
	
	// Name of the role;
	String roleName;	
	
	// Name of the domain if any is associated at this level.
	String domainName;
	
	// Name of the scope if any associated.
	String scopeName;
	
	// Owning app for this association.
	String appIdentifier;
	
}
