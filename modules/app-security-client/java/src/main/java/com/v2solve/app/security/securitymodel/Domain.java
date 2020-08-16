package com.v2solve.app.security.securitymodel;

import java.io.Serializable;
import java.util.HashMap;
import java.util.List;

import lombok.Data;
import lombok.NoArgsConstructor;


/**
 * Represents a Domain in the security model
 * @author Saurin Magiawala
 *
 */
@Data
@NoArgsConstructor
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
	 * Description
	 */
	String description;
	
	/**
	 * Owning application
	 */
	String appIdentifier;
	
	
	/**
	 * Parent DOmain
	 */
	Domain parentDomain;

	/**
	 * The descendants of this domain.
	 */
	HashMap<String, Domain> childDomains = new HashMap<>();
	
	
	public Domain(String domainName,String domainType) 
	{
		this.name = domainName;
		this.domainType = domainType;
		parentDomain = null;
	}

	public Domain(String domainName,String domainType,Domain parent,String description,String appIdentifier) 
	{
		this.name = domainName;
		this.domainType = domainType;
		this.parentDomain = parent; 
		this.description = description;
		this.appIdentifier = appIdentifier;
	}
	
	public void addChildDomain(Domain child)
	{
		if (!getDomainType().equals(child.getDomainType()))
			throw new RuntimeException ("The child domain type " + child.getDomainType() + " is different from the parent domain type: " + getDomainType());
		
		childDomains.put(child.getName(), child);
		child.setParentDomain(this);
	}
	
	/**
	 * will return true if this domain is a part of the hiearchy 
	 * @param domainName
	 * @return
	 */
	public boolean isPartOfHiearchy (String domainName)
	{
		if (this.name.equals(domainName))
			return true;
		
		if (childDomains != null && childDomains.containsKey(domainName))
			return true;
		
		if (childDomains != null)
		{
			for (Domain cd: childDomains.values())
			{
				if (cd.isPartOfHiearchy(domainName))
					return true;
			}
		}
		
		return false;
	}
	
	
	/**
	 * Returns the unique key for this domain..
	 * @return
	 */
	public String getDomainKey ()
	{
		return domainType  + "-" + name;
	}
	
	/**
	 * Returns adds the name of themselves and all the children in this list..
	 * @return
	 */
	public void addNamesOfYouAndYourDescendants (List<String> hiearchyList)
	{
		hiearchyList.add(getName());
		
		// Lets look if there are child domains.
		if (childDomains != null)
		{
			for (Domain cd: childDomains.values())
			{
				cd.addNamesOfYouAndYourDescendants(hiearchyList);
			}
		}
	}
}
