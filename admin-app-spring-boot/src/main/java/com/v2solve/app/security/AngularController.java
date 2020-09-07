package com.v2solve.app.security;

import java.io.IOException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Angular controller to do a simple redirect if the url has no parts.. 
 * @author Saurinya
 *
 */
@RestController
public class AngularController 
{
	@RequestMapping(path = 	{"/",
			                 "/appManagement",
			                 "/resourceManagement",
			                 "/clientManagement",
			                 "/scopetypeManagement",
			                 "/scopeManagement",
			                 "/domainManagement",
			                 "/domaintypeManagement",
			                 "/clientGroupManagement",
			                 "/clientToGroups",
			                 "/roleToPermissions",
			                 "/clientRoleManagement",
			                 "/scopetypeManagement",
			                 "/permissionManagement",
			                 "/groupRoleManagement",
			                 "/rolePermissionManagement",
			                 "/viewChangeLogs",
			                 "/basicAuthClientManagement"})
	public void defaultMethod (HttpServletRequest request,HttpServletResponse resp) 
	throws IOException
	{
		resp.sendRedirect("/index.html");
	}
}
