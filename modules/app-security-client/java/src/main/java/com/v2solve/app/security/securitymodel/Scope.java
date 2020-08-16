package com.v2solve.app.security.securitymodel;

import java.io.IOException;
import java.io.LineNumberReader;
import java.io.Serializable;
import java.io.StringReader;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.StringTokenizer;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


/**
 * Represents a scope object which can be assigned while assigning a role to a group.
 * It defines the scope over which the permit is applicable.
 * @author Saurin Magiawala
 *
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
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
	
	
	/**
	 * Expects the scopevalue of the form property>=<comma,seperated,values>
	 * It goes through it line by line, and adds the property and its list of values to the hashmap if provided,
	 * if limitData is null, and it needs to create one,it will.
	 * @param limitData
	 * @return
	 * @throws IOException
	 */
	public HashMap<String, List<String>> getLimitDataOnFields (HashMap<String, List<String>> limitData) 
	throws IOException
	{
		if (scopeValue == null)
			return limitData;
		
		LineNumberReader lnr = new LineNumberReader(new StringReader(scopeValue));
		
		String str = lnr.readLine();
		
		while (str != null)
		{
			int eqIndex = str.indexOf("=");
			
			if (eqIndex > 0)
			{
				String property = str.substring(0,eqIndex);
				String restOfIt = str.substring(eqIndex+1);
				if (limitData == null)
					limitData = new HashMap<>();
				
				List<String> valueList = limitData.get(property);
				
				if (valueList == null)
				{
					valueList = new ArrayList<>();
					limitData.put(property, valueList);
				}
				
				StringTokenizer st = new StringTokenizer(restOfIt," ;,");
				while (st.hasMoreTokens())
				{
					valueList.add(st.nextToken());
				}
			}
			
			
			str = lnr.readLine();
		}
		
		return limitData;
	}

}
