package com.v2solve.app.security;

import org.springframework.context.annotation.Configuration;

import com.v2solve.app.security.config.EnableSecurity;
import com.v2solve.app.security.springboot.config.EnableAppSecurity;

@Configuration
@EnableSecurity
@EnableAppSecurity
public class AppConfig {

}
