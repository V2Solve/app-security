package com.v2solve.app.security.securitymodel;


import lombok.AllArgsConstructor;
import lombok.Data;

/**
 * Represents a Permit (Or Permission) and the associated data of how that permission came about..
 * @author Saurins
 *
 */
@Data
@AllArgsConstructor
public class Permit implements java.io.Serializable 
{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	PermitKey permitKey;
	boolean allowed;		// whether this is an allowed permission, or a deny..
	Domain domain;	        // The domains at which this permit key applies. if null, this is a root domainless permission
							// meaning applies at all domains.
	String role;		    // The roles because of which this permission is available..
	String group;			// The group because of which this permission is available..
	Scope scope;			// The scope of this permit.
}
