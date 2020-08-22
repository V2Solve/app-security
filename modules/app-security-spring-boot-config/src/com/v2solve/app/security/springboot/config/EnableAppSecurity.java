package com.v2solve.app.security.springboot.config;

import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import org.springframework.context.annotation.Import;

@Retention(RetentionPolicy.RUNTIME)
@Import(value = {AppSecurityEnablementFlagsProperties.class,BasicCredentialProperties.class,OAuth2ClientCredentialProperties.class,AppSecurityAutoConfig.class})
public @interface EnableAppSecurity {

}