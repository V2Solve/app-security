package com.v2solve.app.security.securitymodel;

import java.io.Serializable;
import java.util.HashMap;

import lombok.Data;


/**
 * Represents a Domain in the security model
 * @author Saurin Magiawala
 *
 */
@Data
public class Domain implements Serializable 
{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	
	/**
	 * Domain Name
	 */
	String name;
	
	/**
	 * Domain Type
	 */
	String domainType;
	
	/**
	 * Parent DOmain
	 */
	String parentDomain;
	
	/**
	 * Description
	 */
	String description;
	
	/**
	 * Owning application
	 */
	String appIdentifier;
	
	
	HashMap<String, String> hiearchyMap = new HashMap<>();
	
	public Domain(String domainName,String domainType) 
	{
		this.name = domainName;
		this.domainType = domainType;
		hiearchyMap.put(domainName,"R");
	}

	public Domain(String domainName,String domainType,Domain parent,String description,String appIdentifier) 
	{
		this.name = domainName;
		this.domainType = domainType;
		hiearchyMap.put(domainName,"R");
		if (parent != null)
			this.parentDomain = parent.getName(); 
		this.description = description;
		this.appIdentifier = appIdentifier;
	}
	
	public void addChildDomain(Domain child)
	{
		if (!getDomainType().equals(child.getDomainType()))
			throw new RuntimeException ("The child domain type " + child.getDomainType() + " is different from the parent domain type: " + getDomainType());
		hiearchyMap.put(child.getName(), "C");
		child.setParentDomain(this.getName());
	}
	
	/**
	 * will return true if this domain is a part of the hiearchy 
	 * @param domain
	 * @return
	 */
	public boolean isPartOfHiearchy (String domain)
	{
		return (hiearchyMap.containsKey(domain));
	}
	
	
	/**
	 * Returns the unique key for this domain..
	 * @return
	 */
	public String getDomainKey ()
	{
		return domainType  + "-" + name;
	}
}
