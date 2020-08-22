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
			Boolean propValue = context.getEnvironment().getProperty(AppSecurityEnablementFlagsProperties.BasicConnectionEnabledPropertyKey,Boolean.class);
			return (propValue != null && propValue.booleanValue());
		}
		
	}
	
	public static class OAuth2SecurityConditions implements Condition
	{
		@Override
		public boolean matches(ConditionContext context, AnnotatedTypeMetadata metadata) 
		{
			// Lets check if a property exists
			Boolean propValue = context.getEnvironment().getProperty(AppSecurityEnablementFlagsProperties.OAuth2ConnectionEnabledPropertyKey,Boolean.class);
			return (propValue != null && propValue.booleanValue());
		}
		
	}
}
