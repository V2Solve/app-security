package com.v2solve.app.security.springboot.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

import com.v2solve.app.security.basic.BasicAuthCredentials;

import lombok.Data;

@Configuration
@ConfigurationProperties(prefix = "v2solve.appsecurityclient.connection")
@Data
public class BasicCredentialProperties 
{
	String serverEndPoint;
	BasicAuthCredentials basicCredentials;
}
