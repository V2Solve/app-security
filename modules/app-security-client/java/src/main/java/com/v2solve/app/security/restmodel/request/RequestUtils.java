package com.v2solve.app.security.restmodel.request;


/**
 * Just some quick utility functions to avoid copying of strings everywhere.
 * @author Saurinya
 *
 */
public class RequestUtils 
{
	/**
	 * Returns a potential endpoint where a Rest API dealing with this base request may have been implemented.
	 * @param br
	 * @return
	 */
	public static String getRequestEndpointBasedOnClass (BaseRequest br) 
	{
		String className = br.getClass().getName();
		
		if (!className.endsWith("Request"))
		{
			throw new RuntimeException("BaseRequest class name does not end with 'Request'");
		}
		
		int requestIndex = className.indexOf("Request");
		
		if (!(requestIndex > 0))
		{
			throw new RuntimeException("BaseRequest class name does not have a name before 'Request'");
		}
		
		String reqName = className.substring(0,requestIndex);
		
		// Now we should remove leading package name if any..
		int dotIndex = reqName.lastIndexOf(".");
		if (dotIndex >= 0)
			reqName = reqName.substring(dotIndex+1);
		
		// We should lower the first letter..
		reqName = reqName.substring(0,1).toLowerCase() + reqName.substring(1);
		
		if (reqName.startsWith("search"))
		return "/" + reqName + "s";
		else
		return "/" + reqName;
	}
}
