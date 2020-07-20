package com.v2solve.app.security.utility;

import java.io.PrintWriter;
import java.io.StringWriter;

public class StringUtils 
{

	/**
	 * Returns true if the string is null, or whitespace, or zero length.
	 * @param appIdentifier
	 * @return
	 */
	public static boolean isNullOrZeroLength(String appIdentifier) 
	{
		if (appIdentifier == null || appIdentifier.trim().length()<=0)
			return true;
		else
			return false;
	}

	
	/**
	 * Captures the trace of the throwable in a string, and returns it back.
	 * @param e
	 * @return
	 */
	public static String traceString(Throwable e) 
	{
		
		StringWriter sw = new StringWriter();
		PrintWriter pw = new PrintWriter(sw);
		e.printStackTrace(pw);
		pw.flush();
		sw.flush();
		return sw.toString();
	}

}
