package com.v2solve.app.security.basic;

import java.util.Base64;

import lombok.Data;

@Data
public class BasicAuthCredentials 
{
	String username;
	String password;
	String basicAuthValue;
	
	public BasicAuthCredentials (String username,String password)
	{
		this.username = username;
		this.password = password;
		basicAuthValue = username + ":" + password;
		basicAuthValue = new String(Base64.getEncoder().encode(basicAuthValue.getBytes()));
	}
}