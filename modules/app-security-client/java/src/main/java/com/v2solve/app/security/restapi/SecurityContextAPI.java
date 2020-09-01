package com.v2solve.app.security.restapi;

import com.v2solve.app.security.restmodel.request.GetSecurityContextRequest;
import com.v2solve.app.security.restmodel.request.GetSecuritySetupRequest;
import com.v2solve.app.security.restmodel.request.SecurityAPIRequest;
import com.v2solve.app.security.restmodel.response.GetSecurityContextResponse;
import com.v2solve.app.security.restmodel.response.GetSecuritySetupResponse;
import com.v2solve.app.security.restmodel.response.SecurityAPIResponse;

public interface SecurityContextAPI {

	/**
	 * Returns true, if the client has permission to perform the action, on the resource.
	 * @param action
	 * @param resource
	 * @return
	 */
	SecurityAPIResponse hasPermission(SecurityAPIRequest request);

	/**
	 * Throws an exception if the permission is not present, but if it is, then returns the roles because of which it is applicable..
	 * the following below must be set..
	 * @param action
	 * @param resource
	 * @param resourceDomain
	 * @return
	 */
	SecurityAPIResponse hasPermissionReturnRoles(SecurityAPIRequest request);

	/**
	 * Returns the groups because of which the permission is available at the resource Domain level if any..
	 * @param action
	 * @param resource
	 * @param resourceDomain
	 * @return
	 */
	SecurityAPIResponse hasPermissionReturnGroups(SecurityAPIRequest request);

	/**
	 * Returns the groups because of which the permission is available at the resource Domain level if any..
	 * @param action
	 * @param resource
	 * @param resourceDomain
	 * @return
	 */
	SecurityAPIResponse hasPermissionReturnScopes(SecurityAPIRequest request);

	/**
	 * Returns true if the permission is available in a globally for the scope. Otherwise false.
	 * Does not throw any exception if permission is not available.
	 * @param action
	 * @param resource
	 * @param scope
	 * @return
	 */
	SecurityAPIResponse hasPermissionInScope(SecurityAPIRequest request);

	/**
	 * Returns true if there is any permission that the client has because of this role.
	 * in short if the client has been assigned this role.
	 * @param roleName
	 * @return
	 */
	SecurityAPIResponse hasRole(SecurityAPIRequest request);
	
	
	
	/**
	 * Returns true if there is any permission that the client has because of this group.
	 * in short if the client has been assigned this group.
	 * @param groupName
	 * @return
	 */
	SecurityAPIResponse hasGroup(SecurityAPIRequest request);

	
	/**
	 * Returns the entire security context of the caller.
	 * @param request
	 * @return
	 */
	GetSecurityContextResponse getSecurityContext(GetSecurityContextRequest request);

	
	/**
	 * This method returns multiple answers (you can ask for permission for multiple actions and resources)
	 * @param request
	 * @return
	 */
	SecurityAPIResponse hasPermissions(SecurityAPIRequest request);

	/**
	 * This method returns the complete security setup for an applicaition.
	 * may be used to store it offline for later use.
	 * @param request
	 * @return
	 */
	GetSecuritySetupResponse getSecuritySetup(GetSecuritySetupRequest request);	
}