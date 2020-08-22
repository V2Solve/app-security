package com.v2solve.app.security.basic;

import java.util.Base64;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class BasicAuthCredentials 
{
	String username;
	String password;
	
	public BasicAuthCredentials (String username,String password)
	{
		this.username = username;
		this.password = password;
	}

	public String getBasicAuthValue ()
	{
		String basicAuthValue = username + ":" + password;
		basicAuthValue = new String(Base64.getEncoder().encode(basicAuthValue.getBytes()));
		return basicAuthValue;
	}
}