package com.v2solve.app.security.sdk;


import lombok.Data;

/**
 * A base response class which all the response will extend.
 * @author Saurin Magiawala
 *
 */
@Data
public class BaseResponse implements java.io.Serializable 
{	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	// will specific what the status is. (error, or success depending on the code)
	RequestStatusInformation status;
	
	// In case of paging enabled the number of records returned could be held in here..
	PagingInformation pageInfo;
	
	
	public BaseResponse (RequestStatusInformation rsi)
	{
		this.status = rsi;
	}
	
	public BaseResponse (RequestStatusInformation rsi,PagingInformation pageInfo)
	{
		this.status = rsi;
		this.pageInfo = pageInfo;
	}
	
}
