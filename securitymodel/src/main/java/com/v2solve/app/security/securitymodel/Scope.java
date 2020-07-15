package com.v2solve.app.security.securitymodel;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.StringTokenizer;

import lombok.AllArgsConstructor;
import lombok.Data;


/**
 * Represents a scope object which can be assigned while assigning a role to a group.
 * It defines the scope over which the permit is applicable.
 * @author Saurin Magiawala
 *
 */
@Data
@AllArgsConstructor
public class Scope implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	String scopeName;
	String scopeType;
	String scopeValue;
	String description;
	
	/**
	 * The Owning App if any.
	 */
	String appIdentifier;
	
	public String getScopeKey ()
	{
		return scopeType + "-" + scopeName;
	}
	
	public String toString ()
	{
		return " scopeName: " + scopeName + " of type: " + scopeType + " over values: " + scopeValue;
	}

	/**
	 * returns string tokens from the scope value with (assuming there are spaces, commas or semicolons..)
	 * @return
	 */
	public List<String> getValueTokens()
	{
		List<String> values = new ArrayList<>();
		
		StringTokenizer st = new StringTokenizer(scopeValue," ,;");
		
		while (st.hasMoreTokens())
		{
			values.add(st.nextToken());
		}
		
		return values;
	}

}
