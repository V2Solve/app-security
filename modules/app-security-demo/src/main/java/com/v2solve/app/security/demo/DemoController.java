package com.v2solve.app.security.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.v2solve.app.security.connection.AppSecurityConnection;
import com.v2solve.app.security.securitymodel.AppSecurityContext;

@RestController
@RequestMapping(path = "/demo",produces = MediaType.APPLICATION_JSON_VALUE)
public class DemoController 
{
	@Autowired AppSecurityConnection appSecurityConnection;
	
	@RequestMapping(path = "/viewSecurityContext",method = RequestMethod.GET,produces = MediaType.APPLICATION_JSON_VALUE)
	public AppSecurityContext viewSecurityContext (@RequestParam(name = "clientIdentifier",required = false) String clientIdentifier)
	{
		return appSecurityConnection.getSecurityContext(clientIdentifier, null);
	}
}
