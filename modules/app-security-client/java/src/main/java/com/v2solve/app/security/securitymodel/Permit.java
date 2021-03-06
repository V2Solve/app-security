package com.v2solve.app.security.securitymodel;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Represents a Permit (Or Permission) and the associated data of how that permission came about..
 * @author Saurins
 *
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
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
	String role;		    // The role because of which this permission is available..
	String group;			// The group because of which this permission is available..
	Scope scope;			// The scope of this permit.
	boolean propogate;		// Whether the permission is to be propogated down the Domain Hiearchy or not..
}
