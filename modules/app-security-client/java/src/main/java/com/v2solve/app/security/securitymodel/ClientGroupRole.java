package com.v2solve.app.security.securitymodel;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Represents a Assignment of a role to a client group.
 * @author Saurin Magiawala
 *
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ClientGroupRole {


	// Unique key in the system, identifying the Association.
	String key;
	
	// Name of the group
	String groupName;
	
	// Name of the role;
	String roleName;	
	
	// Name of the domain if any is associated at this level.
	String domainName;
	
	// Owning app for this association.
	String appIdentifier;
	
	/**
	 * If this flag is true - it means that the permission should propogate down
	 * the domain hierarchy. If false, then it should only be applicable to the domain where it is assigned. 
	 */
	boolean propogate;
}
