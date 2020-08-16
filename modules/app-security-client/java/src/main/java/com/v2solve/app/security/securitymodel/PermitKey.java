package com.v2solve.app.security.securitymodel;

import java.io.Serializable;

import lombok.Data;
import lombok.NoArgsConstructor;


/**
 * A representation of a 'permit key' in the model, it is nothing but an action on a resource.
 * @author Saurin Magiawala
 *
 */
@Data
@NoArgsConstructor
public class PermitKey implements Serializable 
{
	static final String ALL_ACTIONS    = "ALL_ACTIONS"; 
	static final String ALL_RESOURCES  = "ALL_RESOURCES";
	static final String NO_ACTIONS     = "NO_ACTION";
	static final String NO_RESOURCES   = "NO_RESOURCES";
	
	static final PermitKey SUPER_PERMIT = new PermitKey(ALL_ACTIONS, ALL_RESOURCES);
	static final PermitKey SUPER_DENIAL = new PermitKey(NO_ACTIONS,ALL_RESOURCES);
	 
	public static PermitKey allActionsOnResource (String resource)
	{
		return new PermitKey(ALL_ACTIONS, resource);
	}
	
	public static PermitKey allResourcesForAction (String action)
	{
		return new PermitKey(action, ALL_RESOURCES);
	}

	public static PermitKey noActionsOnResource (String resource)
	{
		return new PermitKey(NO_ACTIONS, resource);
	}
	
	public static PermitKey noResourceOnAction (String action)
	{
		return new PermitKey(action, NO_RESOURCES);
	}
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private String action;
	private String resource;
	
	public PermitKey(String action,String resource) 
	{
		this.action = action;
		this.resource = resource;
	}
	
	public String getKey ()
	{
		return "" + action + "-" + resource;
	}

	
	/**
	 * Returns true if it is super permit. (ALL actions or all resources)
	 * @return
	 */
	public boolean isSuperPermit ()
	{
		if (action.equals(ALL_ACTIONS) && resource.equals(ALL_RESOURCES))
			return true;
		
		return false;
	}
	
	
	/**
	 * Returns true if the action is a super action on this resource
	 * @param resource
	 * @return
	 */
	public boolean areAllActionsAllowedOnResource (String resource)
	{
		if (action.equals(ALL_ACTIONS) && this.resource.equals(resource))
			return true;
		
		return false;
	}

	
	/**
	 * Returns true if the action includes all resources
	 * @param resource
	 * @return
	 */
	public boolean areAllResourcesIncludedForAction (String action)
	{
		if (this.action.equals(action) && this.resource.equals(ALL_RESOURCES))
			return true;
		
		return false;
	}
	
}
