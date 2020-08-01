package com.v2solve.app.security.sdk;

import java.util.List;

import lombok.Data;

/**
 * This class represents a request/response data structure for paging information to be passed in API calls
 * and returned as appropriate.
 * @author Saurin Magiawala
 *
 */
@Data
public class SortingInformation implements java.io.Serializable 
{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	
	/**
	 * List of Sorts that need to be applied to a query..
	 */
	List<SortInfo> sorts;
}
