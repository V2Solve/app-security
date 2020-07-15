package com.v2solve.app.security.sdk;


import java.util.List;
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
	 * Unique Calling Client Id;
	 */
	String callingClientId;
	
	/**
	 * Additional groups that the client must be assumed to belong to 
	 *
	 */
	List<String> groups;

	PagingInformation pagingInfo;
	
}
