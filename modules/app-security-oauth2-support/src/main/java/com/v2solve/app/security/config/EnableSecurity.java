package com.v2solve.app.security.config;

import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;

import org.springframework.context.annotation.Import;

@Retention(RetentionPolicy.RUNTIME)
@Import(value = {CommonSecurityProperties.class,BasicSecurityProperties.class,JwtSecurityProperties.class,WebSecurityProperties.class,OAuthWebSecurityConfig.class,JwtSecurityConfig.class,BasicSecurityConfig.class})
public @interface EnableSecurity {

}