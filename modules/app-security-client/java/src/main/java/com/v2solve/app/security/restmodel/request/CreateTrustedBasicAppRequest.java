package com.v2solve.app.security.restmodel.request;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = false)
public class CreateTrustedBasicAppRequest extends BaseRequest
{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	String appName;
	String appAccronym;
	String appDescription;
	 
	String basicAuthAppUser;
	String basicAuthAppPassword;
	
	String basicAuthAppOwnerClientId;
	String basicAuthAppOwnerPassword;
	
	String appOwnersGroupName;
	String trustedAppsGroupName;
	String appOwnerRole;
}
