package com.v2solve.app.security;

import java.util.List;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

import lombok.Data;

@Data
@Configuration
@ConfigurationProperties(prefix = "app.security.basic")
public class BasicAuthUserListProperties 
{
	List<UserInformation> users;
	
	@Data
	public static class UserInformation
	{
		String username;
		String password;
		String roles;
	}
}
