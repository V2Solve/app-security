package com.v2solve.app.security.sdk.groups;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = false)
public class SearchClientGroupRequest extends CreateClientGroupRequest 
{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	/**
	 * The client for which the Groups are needed.
	 */
	String forClientIdentifier;
}