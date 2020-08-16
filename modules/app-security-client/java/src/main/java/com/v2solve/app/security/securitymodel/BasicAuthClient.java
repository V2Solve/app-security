package com.v2solve.app.security.securitymodel;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class BasicAuthClient 
{
	String username;
	String password;
	boolean enabled;
	String appIdentifier;
}
