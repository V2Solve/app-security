package com.v2solve.app.security.springboot.config;

import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import org.springframework.context.annotation.Import;

@Retention(RetentionPolicy.RUNTIME)
@Import(value = {AppSecurityAutoConfig.class})
public @interface EnableAppSecurity {

}
