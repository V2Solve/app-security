package com.v2solve.app.security.restmodel.request;


import java.util.List;

import com.v2solve.app.security.restmodel.PagingInformation;
import com.v2solve.app.security.restmodel.SortingInformation;

import lombok.Data;


/**
 * A Base Request which represents the base from all requests will originate for the API.
 * @author Saurin Magiawala
 *
 */
@Data
public class BaseRequest implements java.io.Serializable 
{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	/**
	 * Unique client id which represents the client on behalf of which the call is being made.
	 */
	String clientId;
	
	/**
	 * Additional groups that the client must be assumed to belong to 
	 *
	 */
	List<String> groups;

	/**
	 * data about how information returned should be paginated. - helpful in search and responses
	 */
	PagingInformation pagingInfo;
	
	
	/**
	 * data about how information returned should be sorted - helpful in searches.
	 */
	SortingInformation sortingInfo;
}
