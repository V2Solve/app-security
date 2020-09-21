package com.v2solve.app.security;

import java.util.List;

import com.v2solve.app.security.config.BasicAuthUser;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class InitializerConfig 
{
	List<BasicAuthUser> basicAuthUsers;
}
