package com.v2solve.app.security.springboot.config;

import org.springframework.context.annotation.Condition;
import org.springframework.context.annotation.ConditionContext;
import org.springframework.core.type.AnnotatedTypeMetadata;

public class AppSecurityConfigConditions 
{
	public static class BasicSecurityConditions implements Condition
	{
		@Override
		public boolean matches(ConditionContext context, AnnotatedTypeMetadata metadata) 
		{
			// Lets check if a property exists
			Boolean propValue = context.getEnvironment().getProperty("com.v2solve.app.security.basic",Boolean.class);
			return (propValue != null && propValue.booleanValue());
		}
		
	}
	
	public static class OAuth2SecurityConditions implements Condition
	{
		@Override
		public boolean matches(ConditionContext context, AnnotatedTypeMetadata metadata) 
		{
			// Lets check if a property exists
			Boolean propValue = context.getEnvironment().getProperty("com.v2solve.app.security.oauth2",Boolean.class);
			return (propValue != null && propValue.booleanValue());
		}
		
	}
}
