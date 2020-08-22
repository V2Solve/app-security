package com.v2solve.app.security.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.v2solve.app.security.config.EnableSecurity;
import com.v2solve.app.security.springboot.config.EnableAppSecurity;

@SpringBootApplication
@EnableAppSecurity
@EnableSecurity
public class AppSecurityDemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(AppSecurityDemoApplication.class, args);
	}

}
