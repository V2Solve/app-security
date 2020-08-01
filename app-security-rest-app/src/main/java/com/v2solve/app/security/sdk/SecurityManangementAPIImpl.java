package com.v2solve.app.security.sdk;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.v2solve.app.security.model.entities.Action;
import com.v2solve.app.security.model.entities.Application;
import com.v2solve.app.security.model.entities.ChangeLog;
import com.v2solve.app.security.model.entities.Client;
import com.v2solve.app.security.model.entities.ClientGroup;
import com.v2solve.app.security.model.entities.ClientGroupMembership;
import com.v2solve.app.security.model.entities.ClientGroupRole;
import com.v2solve.app.security.model.entities.ClientRole;
import com.v2solve.app.security.model.entities.ClientRolePermission;
import com.v2solve.app.security.model.entities.Permission;
import com.v2solve.app.security.model.entities.Resource;
import com.v2solve.app.security.model.entities.ResourceDomain;
import com.v2solve.app.security.model.entities.ResourceDomainType;
import com.v2solve.app.security.model.entities.RoleScope;
import com.v2solve.app.security.model.entities.ScopeType;
import com.v2solve.app.security.sdk.application.CreateApplicationRequest;
import com.v2solve.app.security.sdk.application.CreateApplicationResponse;
import com.v2solve.app.security.sdk.application.DeleteApplicationRequest;
import com.v2solve.app.security.sdk.application.DeleteApplicationResponse;
import com.v2solve.app.security.sdk.application.SearchApplicationsRequest;
import com.v2solve.app.security.sdk.application.SearchApplicationsResponse;
import com.v2solve.app.security.sdk.application.SearchChangeLogRequest;
import com.v2solve.app.security.sdk.application.SearchChangeLogResponse;
import com.v2solve.app.security.sdk.client.CreateClientRequest;
import com.v2solve.app.security.sdk.client.CreateClientResponse;
import com.v2solve.app.security.sdk.client.DeleteClientRequest;
import com.v2solve.app.security.sdk.client.DeleteClientResponse;
import com.v2solve.app.security.sdk.client.SearchClientRequest;
import com.v2solve.app.security.sdk.client.SearchClientResponse;
import com.v2solve.app.security.sdk.groups.CreateClientGroupRequest;
import com.v2solve.app.security.sdk.groups.CreateClientGroupResponse;
import com.v2solve.app.security.sdk.groups.DeleteClientGroupRequest;
import com.v2solve.app.security.sdk.groups.DeleteClientGroupResponse;
import com.v2solve.app.security.sdk.groups.SearchClientGroupRequest;
import com.v2solve.app.security.sdk.groups.SearchClientGroupResponse;
import com.v2solve.app.security.sdk.permission.CreateActionRequest;
import com.v2solve.app.security.sdk.permission.CreateActionResponse;
import com.v2solve.app.security.sdk.permission.CreatePermissionRequest;
import com.v2solve.app.security.sdk.permission.CreatePermissionResponse;
import com.v2solve.app.security.sdk.permission.CreateResourceRequest;
import com.v2solve.app.security.sdk.permission.CreateResourceResponse;
import com.v2solve.app.security.sdk.permission.DeleteActionRequest;
import com.v2solve.app.security.sdk.permission.DeleteActionResponse;
import com.v2solve.app.security.sdk.permission.DeletePermissionRequest;
import com.v2solve.app.security.sdk.permission.DeletePermissionResponse;
import com.v2solve.app.security.sdk.permission.DeleteResourceRequest;
import com.v2solve.app.security.sdk.permission.DeleteResourceResponse;
import com.v2solve.app.security.sdk.permission.SearchActionRequest;
import com.v2solve.app.security.sdk.permission.SearchActionResponse;
import com.v2solve.app.security.sdk.permission.SearchPermissionRequest;
import com.v2solve.app.security.sdk.permission.SearchPermissionResponse;
import com.v2solve.app.security.sdk.permission.SearchResourceRequest;
import com.v2solve.app.security.sdk.permission.SearchResourceResponse;
import com.v2solve.app.security.sdk.relations.CreateClientGroupRoleRequest;
import com.v2solve.app.security.sdk.relations.CreateClientGroupRoleResponse;
import com.v2solve.app.security.sdk.relations.CreateClientRolePermissionRequest;
import com.v2solve.app.security.sdk.relations.CreateClientRolePermissionResponse;
import com.v2solve.app.security.sdk.relations.CreateGroupMembershipRequest;
import com.v2solve.app.security.sdk.relations.CreateGroupMembershipResponse;
import com.v2solve.app.security.sdk.relations.DeleteClientGroupRoleRequest;
import com.v2solve.app.security.sdk.relations.DeleteClientGroupRoleResponse;
import com.v2solve.app.security.sdk.relations.DeleteClientRolePermissionRequest;
import com.v2solve.app.security.sdk.relations.DeleteClientRolePermissionResponse;
import com.v2solve.app.security.sdk.relations.DeleteGroupMembershipRequest;
import com.v2solve.app.security.sdk.relations.DeleteGroupMembershipResponse;
import com.v2solve.app.security.sdk.relations.SearchClientGroupRoleRequest;
import com.v2solve.app.security.sdk.relations.SearchClientGroupRoleResponse;
import com.v2solve.app.security.sdk.relations.SearchClientRolePermissionRequest;
import com.v2solve.app.security.sdk.relations.SearchClientRolePermissionResponse;
import com.v2solve.app.security.sdk.roles.CreateClientRoleRequest;
import com.v2solve.app.security.sdk.roles.CreateClientRoleResponse;
import com.v2solve.app.security.sdk.roles.DeleteClientRoleRequest;
import com.v2solve.app.security.sdk.roles.DeleteClientRoleResponse;
import com.v2solve.app.security.sdk.roles.SearchClientRoleRequest;
import com.v2solve.app.security.sdk.roles.SearchClientRoleResponse;
import com.v2solve.app.security.sdk.scopedomains.CreateDomainRequest;
import com.v2solve.app.security.sdk.scopedomains.CreateDomainResponse;
import com.v2solve.app.security.sdk.scopedomains.CreateDomainTypeRequest;
import com.v2solve.app.security.sdk.scopedomains.CreateDomainTypeResponse;
import com.v2solve.app.security.sdk.scopedomains.CreateScopeRequest;
import com.v2solve.app.security.sdk.scopedomains.CreateScopeResponse;
import com.v2solve.app.security.sdk.scopedomains.CreateScopeTypeRequest;
import com.v2solve.app.security.sdk.scopedomains.CreateScopeTypeResponse;
import com.v2solve.app.security.sdk.scopedomains.DeleteDomainRequest;
import com.v2solve.app.security.sdk.scopedomains.DeleteDomainResponse;
import com.v2solve.app.security.sdk.scopedomains.DeleteDomainTypeRequest;
import com.v2solve.app.security.sdk.scopedomains.DeleteDomainTypeResponse;
import com.v2solve.app.security.sdk.scopedomains.DeleteScopeRequest;
import com.v2solve.app.security.sdk.scopedomains.DeleteScopeResponse;
import com.v2solve.app.security.sdk.scopedomains.DeleteScopeTypeRequest;
import com.v2solve.app.security.sdk.scopedomains.DeleteScopeTypeResponse;
import com.v2solve.app.security.sdk.scopedomains.SearchDomainRequest;
import com.v2solve.app.security.sdk.scopedomains.SearchDomainResponse;
import com.v2solve.app.security.sdk.scopedomains.SearchDomainTypeRequest;
import com.v2solve.app.security.sdk.scopedomains.SearchDomainTypeResponse;
import com.v2solve.app.security.sdk.scopedomains.SearchScopeRequest;
import com.v2solve.app.security.sdk.scopedomains.SearchScopeResponse;
import com.v2solve.app.security.sdk.scopedomains.SearchScopeTypeRequest;
import com.v2solve.app.security.sdk.scopedomains.SearchScopeTypeResponse;
import com.v2solve.app.security.securitymodel.AppSecurityContext;
import com.v2solve.app.security.securitymodel.Domain;
import com.v2solve.app.security.securitymodel.PermissionException;
import com.v2solve.app.security.securitymodel.Scope;
import com.v2solve.app.security.securitymodel.datalogic.ApplicationDataLogic;
import com.v2solve.app.security.securitymodel.datalogic.ChangeLogDataLogic;
import com.v2solve.app.security.securitymodel.datalogic.DataLogicValidationException;
import com.v2solve.app.security.securitymodel.datalogic.DatalogicUtils;
import com.v2solve.app.security.securitymodel.datalogic.DomainScopeDataLogic;
import com.v2solve.app.security.securitymodel.datalogic.GroupDataLogic;
import com.v2solve.app.security.securitymodel.datalogic.PermissionDataLogic;
import com.v2solve.app.security.securitymodel.datalogic.RelationDataLogic;
import com.v2solve.app.security.securitymodel.datalogic.RoleDataLogic;

import com.v2solve.app.security.utility.JPAUtils;
import com.v2solve.app.security.utility.ReflectUtils;
import com.v2solve.app.security.utility.StringUtils;
import com.v2solve.app.security.utility.TransactionWrapper;

import lombok.extern.slf4j.Slf4j;

@Slf4j
public class SecurityManangementAPIImpl implements SecurityManagementAPI 
{
	static final String RECORD_UPDATED = "Record Updated.";
	static final String RECORD_CREATED = "Record Created.";
	static final String RECORD_DELETED = "Record Deleted.";
	
	EntityManagerFactory emf = null;
	
	public SecurityManangementAPIImpl(EntityManagerFactory emf) {
		this.emf = emf;
	}

	
	private EntityManager getEm ()
	{
		return emf.createEntityManager();
	}
	
	@Override
	public DeleteClientResponse implementRequest(DeleteClientRequest request) 
	{
		EntityManager em = null;
		TransactionWrapper tw = null;
		
		try
		{
			String action   = SecurityActions.DELETE;
			String resource = SecurityResources.CLIENT; 
			String identifier = "clientIdentifier";
			String idValue = request.getClientIdentifier();
			
			em = getEm();
			tw = new TransactionWrapper(em);
			AppSecurityContext asc = SdkUtils.getClientSecurityContextForRequest(em,request);
			
			Client c = DatalogicUtils.findObject(em, Client.class, identifier, idValue);
	
			// Lets check to see if it is an application identifier..
			String appIdentifier = c.getApplication() != null?c.getApplication().getAppIdentifier():null;
			
			if (!StringUtils.isNullOrZeroLength(appIdentifier))
			{
				// Lets check to see if the person has  a right to delete a client for this app...
				asc.hasPermissionThrowException(action, resource, Domains.appDomain(appIdentifier));
			}
			else
			{
				// Lets check at a global level..
				asc.hasPermissionThrowException(action, resource);
			}
			
			Client deletedObject = c;
			
			String deletedObjectStr = deletedObject==null?"":new ObjectMapper().writeValueAsString(deletedObject);
			
			ApplicationDataLogic.deleteClient(em,request);
			
			ChangeLogDataLogic.createChangeLog(em, SecurityActions.DELETE, resource, null, deletedObject.getClientIdentifier(), null, asc.getClient().getClientIdentifier(), null, deletedObjectStr, null);
			
			tw.success();
			
			return new DeleteClientResponse(RequestStatusInformation.success(RECORD_DELETED));
		}
		catch (Throwable e)
		{
			log.error(StringUtils.traceString(e));
			return new DeleteClientResponse(RequestStatusInformation.failure(e.getMessage()));
		}
		finally
		{
			if (tw != null)
				tw.commit();
			if (em != null)
				em.close();
		}
	}

	@Override
	public CreateClientResponse implementRequest(CreateClientRequest request) 
	{
		EntityManager em = null;
		TransactionWrapper tw = null; 
		
		try
		{
			String action   = SecurityActions.CREATE;
			String resource = SecurityResources.CLIENT;
			
			em = getEm();
			tw = new TransactionWrapper(em);
			
			AppSecurityContext asc = SdkUtils.getClientSecurityContextForRequest(em,request);
			
			// Lets check to see if an application has been specified.
			String appIdentifier = request.getAppIdentifier();
			
			if (!StringUtils.isNullOrZeroLength(appIdentifier))
			{
				// Lets check to see if the person has  a right to create a client for this app...
				asc.hasPermissionThrowException(action, resource, Domains.appDomain(appIdentifier));
			}
			else
			{
				// Okay so it is trying to create a Global Client. 
				// Lets check to see if the person has a right to create a global client. 
				
				// Lets check at a global level..
				asc.hasPermissionThrowException(action, resource);
			}
			
			// Lets check if the object already exists..
			Client existingObj = DatalogicUtils.findObjectReturnNull(em, Client.class, "clientIdentifier", request.getClientIdentifier());
			
			// Update existing record..
			if (existingObj != null)
			{
				Client originalRecord = ReflectUtils.createCopy(existingObj, Client.class);
				String existingAppIdentifier = existingObj.getApplication()==null?null:existingObj.getApplication().getAppIdentifier();
				// Lets check update Permission..
				asc.hasPermissionThrowException(SecurityActions.UPDATE, resource, Domains.appDomain(existingAppIdentifier));
				asc.hasPermissionThrowException(SecurityActions.UPDATE, resource, Domains.appDomain(appIdentifier));
				// Okay so has permission..
				existingObj.setDescription(request.getDescription());
				Application app = null;
				if (appIdentifier != null)
					app = DatalogicUtils.findObject(em, Application.class, "appIdentifier", appIdentifier);
				existingObj.setApplication(app);
				
				JPAUtils.updateObject(em, existingObj);
				ChangeLogDataLogic.createChangeLog(em, SecurityActions.UPDATE, resource, null, existingObj.getClientIdentifier(), null, asc.getClient().getClientIdentifier(), null, existingObj, originalRecord);
				tw.success();
				return new CreateClientResponse(RequestStatusInformation.success(RECORD_UPDATED));
			}
			
			Client newObject = ApplicationDataLogic.createClient(em,request);
			ChangeLogDataLogic.createChangeLog(em, SecurityActions.CREATE, resource, null, newObject.getClientIdentifier(), null, asc.getClient().getClientIdentifier(), null, newObject, null);
			tw.success();
			return new CreateClientResponse(RequestStatusInformation.success(RECORD_CREATED));
		}
		catch (Throwable e)
		{
			log.error(StringUtils.traceString(e));
			return new CreateClientResponse(RequestStatusInformation.failure(e.getMessage()));
		}
		finally
		{
			if (tw != null)
				tw.commit ();
			if (em != null)
				em.close();
		}
		
	}

	
	@Override
	public CreateApplicationResponse implementRequest(CreateApplicationRequest request) {
		
		EntityManager em = null;
		TransactionWrapper tw = null;
		
		try
		{
			String action   = SecurityActions.CREATE;
			String resource = SecurityResources.APPLICATION;
			
			em = getEm();
			tw = new TransactionWrapper(em);
			AppSecurityContext asc = SdkUtils.getClientSecurityContextForRequest(em,request);
			asc.hasPermissionThrowException(action, resource);
			
			Application existingApp = DatalogicUtils.findObjectReturnNull(em, Application.class, "appIdentifier", request.getAppIdentifier());
			
			// Update existing record..
			if (existingApp != null)
			{
				Application originalRecord = ReflectUtils.createCopy(existingApp, Application.class);
				// Lets check update Permission..
				asc.hasPermissionThrowException(SecurityActions.UPDATE, resource, Domains.appDomain(existingApp.getAppIdentifier()));
				// Okay so has permission..
				existingApp.setDescription(request.getDescription());
				JPAUtils.updateObject(em, existingApp);
				ChangeLogDataLogic.createChangeLog(em, SecurityActions.UPDATE, resource, null, existingApp.getAppIdentifier(), null, asc.getClient().getClientIdentifier(), null, existingApp, originalRecord);
				tw.success();
				return new CreateApplicationResponse(RequestStatusInformation.success(RECORD_UPDATED));
			}
			
			Application newObject = ApplicationDataLogic.createApplication(em,request);
			ChangeLogDataLogic.createChangeLog(em, SecurityActions.CREATE, resource, null, newObject.getAppIdentifier(), null, asc.getClient().getClientIdentifier(), null, newObject, null);
			tw.success();
			return new CreateApplicationResponse(RequestStatusInformation.success(RECORD_CREATED));
		}
		catch (Throwable e)
		{
			log.error(StringUtils.traceString(e));
			return new CreateApplicationResponse(RequestStatusInformation.failure(e.getMessage()));
		}
		finally
		{
			if (tw != null)
				tw.commit();
			if (em != null)
				em.close();
		}
	}

	
	@Override
	public DeleteApplicationResponse implementRequest(DeleteApplicationRequest request) {
		
		EntityManager em = null;
		TransactionWrapper tw = null;
		
		try
		{
			String action   = SecurityActions.DELETE;
			String resource = SecurityResources.APPLICATION;
			
			em = getEm();
			tw = new TransactionWrapper(em);
			AppSecurityContext asc = SdkUtils.getClientSecurityContextForRequest(em,request);
			asc.hasPermissionThrowException(action, resource,Domains.appDomain(request.getAppIdentifier()));
			
			Application existingObj = DatalogicUtils.findObject(em, Application.class, "appIdentifier", request.getAppIdentifier());
			
			Application deletedObject = existingObj;
			
			// Lets capture the deletedObject String because once deleted we will not have the data to change log.
			String deletedObjectStr = deletedObject==null?"":new ObjectMapper().writeValueAsString(deletedObject);
			
			ApplicationDataLogic.deleteApplication(em,request);
			
			ChangeLogDataLogic.createChangeLog(em, SecurityActions.DELETE, resource, null, deletedObject.getAppIdentifier(), null, asc.getClient().getClientIdentifier(), null, deletedObjectStr, null);
			
			tw.success();
			return new DeleteApplicationResponse(RequestStatusInformation.success(RECORD_DELETED));
		}
		catch (Throwable e)
		{
			log.error(StringUtils.traceString(e));
			return new DeleteApplicationResponse(RequestStatusInformation.failure(e.getMessage()));
		}
		finally
		{
			if (tw != null)
				tw.commit();
			if (em != null)
				em.close();
			
		}
	}

	
	
	
	@Override
	public CreateActionResponse implementRequest(CreateActionRequest request) 
	{
		EntityManager em = null;
		TransactionWrapper tw = null;
		
		try
		{
			String action   = SecurityActions.CREATE;
			String resource = SecurityResources.ACTION;
			
			em = getEm();
			tw = new TransactionWrapper(em);
			AppSecurityContext asc = SdkUtils.getClientSecurityContextForRequest(em,request);
			
			// Lets check to see if an application has been specified.
			String appIdentifier = request.getAppIdentifier();
			if (!StringUtils.isNullOrZeroLength(appIdentifier))
			{
				// Lets check to see if the person has  a right to create a ACTION for this app...
				asc.hasPermissionThrowException(action, resource, Domains.appDomain(appIdentifier));
			}
			else
			{
				// Lets check at a global level..
				asc.hasPermissionThrowException(action, resource);
			}

			// Lets check if the object already exists..
			Action existingObj = DatalogicUtils.findObjectReturnNull(em, Action.class, "name", request.getName());
			
			// Update existing record..
			if (existingObj != null)
			{
				Action originalRecord = ReflectUtils.createCopy(existingObj, Action.class);
				String existingAppIdentifier = existingObj.getApplication()==null?null:existingObj.getApplication().getAppIdentifier();
				// Lets check update Permission..
				asc.hasPermissionThrowException(SecurityActions.UPDATE, resource, Domains.appDomain(existingAppIdentifier));
				asc.hasPermissionThrowException(SecurityActions.UPDATE, resource, Domains.appDomain(appIdentifier));
				// Okay so has permission..
				existingObj.setDescription(request.getDescription());
				Application app = null;
				if (appIdentifier != null)
					app = DatalogicUtils.findObject(em, Application.class, "appIdentifier", appIdentifier);
				existingObj.setApplication(app);
				
				JPAUtils.updateObject(em, existingObj);
				ChangeLogDataLogic.createChangeLog(em, SecurityActions.UPDATE, resource, null, existingObj.getName(), null, asc.getClient().getClientIdentifier(), null, existingObj, originalRecord);
				tw.success();
				return new CreateActionResponse(RequestStatusInformation.success(RECORD_UPDATED));
			}
			
			Action newObject = PermissionDataLogic.createAction(em,request);
			ChangeLogDataLogic.createChangeLog(em, SecurityActions.CREATE, resource, null, newObject.getName(), null, asc.getClient().getClientIdentifier(), null, newObject, null);
			tw.success();
			return new CreateActionResponse(RequestStatusInformation.success("Action created."));
		}
		catch (Throwable e)
		{
			log.error(StringUtils.traceString(e));
			return new CreateActionResponse(RequestStatusInformation.failure(e.getMessage()));
		}
		finally
		{
			if (tw != null)
				tw.commit();
			if (em != null)
				em.close();
		}
	}

	
	@Override
	public DeleteActionResponse implementRequest(DeleteActionRequest request) 
	{
		EntityManager em = null;
		TransactionWrapper tw = null;
		
		try
		{
			String action   = SecurityActions.DELETE;
			String resource = SecurityResources.ACTION; 
			String identifier = "name";
			String idValue = request.getName();
			
			em = getEm();
			tw = new TransactionWrapper(em);
			AppSecurityContext asc = SdkUtils.getClientSecurityContextForRequest(em,request);

			Action actionObj = DatalogicUtils.findObject(em, Action.class, identifier, idValue);
			
			// Lets check to see if it is an application identifier..
			String appIdentifier = actionObj.getApplication()==null?null:actionObj.getApplication().getAppIdentifier();
			
			if (!StringUtils.isNullOrZeroLength(appIdentifier))
			{
				// Lets check to see if the person has  a right to delete a client for this app...
				asc.hasPermissionThrowException(action, resource, Domains.appDomain(appIdentifier));
			}
			else
			{
				// Lets check at a global level..
				asc.hasPermissionThrowException(action, resource);
			}
			
			Action deletedObject = actionObj;
			
			// Lets capture the deletedObject String because once deleted we will not have the data to change log.
			String deletedObjectStr = deletedObject==null?"":new ObjectMapper().writeValueAsString(deletedObject);
			
			PermissionDataLogic.deleteAction(em,request);
			
			ChangeLogDataLogic.createChangeLog(em, SecurityActions.DELETE, resource, null, deletedObject.getName(), null, asc.getClient().getClientIdentifier(), null, deletedObjectStr, null);
			
			tw.success();
			return new DeleteActionResponse(RequestStatusInformation.success(RECORD_DELETED));
		}
		catch (Throwable e)
		{
			log.error(StringUtils.traceString(e));
			return new DeleteActionResponse(RequestStatusInformation.failure(e.getMessage()));
		}
		finally
		{
			if (tw != null)
				tw.commit();
			
			if (em != null)
				em.close();
		}
	}

	
	@Override
	public CreateResourceResponse implementRequest(CreateResourceRequest request) 
	{
		EntityManager em = null;
		TransactionWrapper tw = null;
		
		try
		{
			String action   = SecurityActions.CREATE;
			String resource = SecurityResources.RESOURCE; 
			
			em = getEm();
			tw = new TransactionWrapper(em);
			AppSecurityContext asc = SdkUtils.getClientSecurityContextForRequest(em,request);
			
			// Lets check to see if an application has been specified.
			String appIdentifier = request.getAppIdentifier();
			if (!StringUtils.isNullOrZeroLength(appIdentifier))
			{
				// Lets check to see if the person has  a right to create a ACTION for this app...
				asc.hasPermissionThrowException(action, resource, Domains.appDomain(appIdentifier));
			}
			else
			{
				// Lets check at a global level..
				asc.hasPermissionThrowException(action, resource);
			}

			// Lets check if the object already exists..
			Resource existingObj = DatalogicUtils.findObjectReturnNull(em, Resource.class, "name", request.getName());
			
			// Update existing record..
			if (existingObj != null)
			{
				Resource originalRecord = ReflectUtils.createCopy(existingObj, Resource.class);
				String existingAppIdentifier = existingObj.getApplication()==null?null:existingObj.getApplication().getAppIdentifier();
				// Lets check update Permission..
				asc.hasPermissionThrowException(SecurityActions.UPDATE, resource, Domains.appDomain(existingAppIdentifier));
				asc.hasPermissionThrowException(SecurityActions.UPDATE, resource, Domains.appDomain(appIdentifier));
				// Okay so has permission..
				existingObj.setDescription(request.getDescription());
				Application app = null;
				if (appIdentifier != null)
					app = DatalogicUtils.findObject(em, Application.class, "appIdentifier", appIdentifier);
				existingObj.setApplication(app);
				
				JPAUtils.updateObject(em, existingObj);
				ChangeLogDataLogic.createChangeLog(em, SecurityActions.UPDATE, resource, null, existingObj.getName(), null, asc.getClient().getClientIdentifier(), null, existingObj, originalRecord);
				tw.success();
				return new CreateResourceResponse(RequestStatusInformation.success(RECORD_UPDATED));
			}
			
			Resource newObject = PermissionDataLogic.createResource(em,request);
			ChangeLogDataLogic.createChangeLog(em, SecurityActions.CREATE, resource, null, newObject.getName(), null, asc.getClient().getClientIdentifier(), null, newObject, null);
			tw.success();
			return new CreateResourceResponse(RequestStatusInformation.success("Record created"));
		}
		catch (Throwable e)
		{
			log.error(StringUtils.traceString(e));
			return new CreateResourceResponse(RequestStatusInformation.failure(e.getMessage()));
		}
		finally
		{
			if (tw != null)
				tw.commit();
			if (em != null)
				em.close();
		}
	}

	
	@Override
	public DeleteResourceResponse implementRequest(DeleteResourceRequest request) 
	{
		EntityManager em = null;
		TransactionWrapper tw = null;
		
		try
		{
			String action   = SecurityActions.DELETE;
			String resource = SecurityResources.RESOURCE; 
			String identifier = "name";
			String idValue = request.getName();
			
			em = getEm();
			tw = new TransactionWrapper(em);
			AppSecurityContext asc = SdkUtils.getClientSecurityContextForRequest(em,request);

			Resource resourceObj = DatalogicUtils.findObject(em, Resource.class, identifier, idValue);
			
			// Lets check to see if it is an application identifier..
			String appIdentifier = resourceObj.getApplication()==null?null:resourceObj.getApplication().getAppIdentifier();
			
			if (!StringUtils.isNullOrZeroLength(appIdentifier))
			{
				// Lets check to see if the person has  a right to delete a client for this app...
				asc.hasPermissionThrowException(action,resource, Domains.appDomain(appIdentifier));
			}
			else
			{
				// Lets check at a global level..
				asc.hasPermissionThrowException(action, resource);
			}
			
			Resource deletedObject = resourceObj; 

			// Lets capture the deletedObject String because once deleted we will not have the data to change log.
			String deletedObjectStr = deletedObject==null?"":new ObjectMapper().writeValueAsString(deletedObject);
					
			PermissionDataLogic.deleteResource(em,request);
			
			ChangeLogDataLogic.createChangeLog(em, SecurityActions.DELETE, resource, null, deletedObject.getName(), null, asc.getClient().getClientIdentifier(), null, deletedObjectStr, null);
			tw.success();
			return new DeleteResourceResponse(RequestStatusInformation.success(RECORD_DELETED));
		}
		catch (Throwable e)
		{
			log.error(StringUtils.traceString(e));
			return new DeleteResourceResponse(RequestStatusInformation.failure(e.getMessage()));
		}
		finally
		{
			if (tw != null)
				tw.commit ();
			if (em != null)
				em.close();
		}
	}

	
	@Override
	public CreatePermissionResponse implementRequest(CreatePermissionRequest request) 
	{
		EntityManager em = null;
		TransactionWrapper tw = null;
		
		try
		{
			String action   = SecurityActions.CREATE;
			String resource = SecurityResources.PERMISSION; 
			
			em = getEm();
			tw = new TransactionWrapper(em);
			AppSecurityContext asc = SdkUtils.getClientSecurityContextForRequest(em,request);
			
			// Lets check to see if an application has been specified.
			String appIdentifier = request.getAppIdentifier();
			
			String resourceName = request.getResourceName();
			String actionName   = request.getActionName();
			
			if (!StringUtils.isNullOrZeroLength(appIdentifier))
			{
				// Lets check to see if the person has  a right to create a ACTION for this app...
				asc.hasPermissionThrowException(action, resource, Domains.appDomain(appIdentifier));
			}
			else
			{
				// Lets check at a global level..
				asc.hasPermissionThrowException(action, resource);
			}
			
			// Lets check if the object already exists..
			Permission existingObj = DatalogicUtils.findObjectReturnNull(em, Permission.class, "name", request.getName());
			
			// Update existing record..
			if (existingObj != null)
			{
				Permission originalRecord = ReflectUtils.createCopy(existingObj, Permission.class);
				String existingAppIdentifier = existingObj.getApplication()==null?null:existingObj.getApplication().getAppIdentifier();
				// Lets check update Permission..
				asc.hasPermissionThrowException(SecurityActions.UPDATE, resource, Domains.appDomain(existingAppIdentifier));
				asc.hasPermissionThrowException(SecurityActions.UPDATE, resource, Domains.appDomain(appIdentifier));
				// Okay so has permission..
				existingObj.setDescription(request.getDescription());
				Application app = null;
				if (appIdentifier != null)
					app = DatalogicUtils.findObject(em, Application.class, "appIdentifier", appIdentifier);
				existingObj.setApplication(app);
				
				/**
				 * Lets set action and resource classes..
				 */
				Action actionE = DatalogicUtils.findObject(em, Action.class, "name", actionName);
				existingObj.setAction(actionE);
				
				Resource resourceE = DatalogicUtils.findObject(em, Resource.class, "name", resourceName);
				existingObj.setResource(resourceE);
				
				JPAUtils.updateObject(em, existingObj);
				ChangeLogDataLogic.createChangeLog(em, SecurityActions.UPDATE, resource, null, existingObj.getName(), null, asc.getClient().getClientIdentifier(), null, existingObj, originalRecord);
				tw.success();
				return new CreatePermissionResponse(RequestStatusInformation.success(RECORD_UPDATED));
			}
			
			Permission newObject = PermissionDataLogic.createPermission(em,request);
			ChangeLogDataLogic.createChangeLog(em, SecurityActions.CREATE, resource, null, newObject.getName(), null, asc.getClient().getClientIdentifier(), null, newObject, null);
			tw.success();
			return new CreatePermissionResponse(RequestStatusInformation.success(RECORD_CREATED));
		}
		catch (Throwable e)
		{
			log.error(StringUtils.traceString(e));
			return new CreatePermissionResponse(RequestStatusInformation.failure(e.getMessage()));
		}
		finally
		{
			if (tw != null)
				tw.commit();
			if (em != null)
				em.close();
		}
	}

	
	@Override
	public DeletePermissionResponse implementRequest(DeletePermissionRequest request) 
	{
		EntityManager em = null;
		TransactionWrapper tw = null;
		
		try
		{
			String action   = SecurityActions.DELETE;
			String resource = SecurityResources.PERMISSION; 
			String identifier = "name";
			String idValue = request.getName();
			
			em = getEm();
			tw= new TransactionWrapper(em);
			AppSecurityContext asc = SdkUtils.getClientSecurityContextForRequest(em,request);
			
			Permission resourceObj = DatalogicUtils.findObject(em, Permission.class, identifier, idValue);
			
			// Lets check to see if it is an application identifier..
			String appIdentifier = resourceObj.getApplication()==null?null:resourceObj.getApplication().getAppIdentifier();
			
			if (!StringUtils.isNullOrZeroLength(appIdentifier))
			{
				// Lets check to see if the person has  a right to delete a client for this app...
				asc.hasPermissionThrowException(action,resource, Domains.appDomain(appIdentifier));
			}
			else
			{
				// Lets check at a global level..
				asc.hasPermissionThrowException(action, resource);
			}
			
			Permission deletedObject = resourceObj;
			
			// Lets capture the deletedObject String because once deleted we will not have the data to change log.
			String deletedObjectStr = deletedObject==null?"":new ObjectMapper().writeValueAsString(deletedObject);
			
			PermissionDataLogic.deletePermission(em,request);
			
			ChangeLogDataLogic.createChangeLog(em, SecurityActions.DELETE, resource, null, deletedObject.getName(), null, asc.getClient().getClientIdentifier(), null, deletedObjectStr, null);

			tw.success();
			
			return new DeletePermissionResponse(RequestStatusInformation.SUCCESS);
		}
		catch (Throwable e)
		{
			log.error(StringUtils.traceString(e));
			return new DeletePermissionResponse(RequestStatusInformation.failure(e.getMessage()));
		}
		finally
		{
			if (tw != null)
				tw.commit();
			if (em != null)
				em.close();
		}
	}

	
	@Override
	public CreateClientGroupResponse implementRequest(CreateClientGroupRequest request) 
	{
		EntityManager em = null;
		TransactionWrapper tw = null;

		try
		{
			String action   = SecurityActions.CREATE;
			String resource = SecurityResources.CLIENT_GROUP; 
			
			em = getEm();
			tw = new TransactionWrapper(em);
			AppSecurityContext asc = SdkUtils.getClientSecurityContextForRequest(em,request);
			
			// Lets check to see if an application has been specified.
			String appIdentifier = request.getAppIdentifier();
			if (!StringUtils.isNullOrZeroLength(appIdentifier))
			{
				// Lets check to see if the person has  a right to create a ACTION for this app...
				asc.hasPermissionThrowException(action, resource, Domains.appDomain(appIdentifier));
			}
			else
			{
				// Lets check at a global level..
				asc.hasPermissionThrowException(action, resource);
			}
			
			// Lets check if the object already exists..
			ClientGroup existingObj = DatalogicUtils.findObjectReturnNull(em, ClientGroup.class, "name", request.getName());
			
			// Update existing record..
			if (existingObj != null)
			{
				ClientGroup originalRecord = ReflectUtils.createCopy(existingObj, ClientGroup.class);
				String existingAppIdentifier = existingObj.getApplication()==null?null:existingObj.getApplication().getAppIdentifier();
				// Lets check update Permission..
				asc.hasPermissionThrowException(SecurityActions.UPDATE, resource, Domains.appDomain(existingAppIdentifier));
				asc.hasPermissionThrowException(SecurityActions.UPDATE, resource, Domains.appDomain(appIdentifier));
				// Okay so has permission..
				existingObj.setDescription(request.getDescription());
				Application app = null;
				if (appIdentifier != null)
					app = DatalogicUtils.findObject(em, Application.class, "appIdentifier", appIdentifier);
				existingObj.setApplication(app);
				
				JPAUtils.updateObject(em, existingObj);
				ChangeLogDataLogic.createChangeLog(em, SecurityActions.UPDATE, resource, null, existingObj.getName(), null, asc.getClient().getClientIdentifier(), null, existingObj, originalRecord);
				tw.success();
				return new CreateClientGroupResponse(RequestStatusInformation.success(RECORD_UPDATED));
			}
			
			ClientGroup newObject = GroupDataLogic.createClientGroup(em,request);
			ChangeLogDataLogic.createChangeLog(em, SecurityActions.CREATE, resource, null, newObject.getName(), null, asc.getClient().getClientIdentifier(), null, newObject, null);
			tw.success();
			return new CreateClientGroupResponse(RequestStatusInformation.success(RECORD_CREATED));
		}
		catch (Throwable e)
		{
			log.error(StringUtils.traceString(e));
			return new CreateClientGroupResponse(RequestStatusInformation.failure(e.getMessage()));
		}
		finally
		{
			if (tw != null)
				tw.commit();
			if (em != null)
				em.close();
		}
	}

	
	@Override
	public DeleteClientGroupResponse implementRequest(DeleteClientGroupRequest request) 
	{
		EntityManager em = null;
		TransactionWrapper tw = null;
		
		try
		{
			String action   = SecurityActions.DELETE;
			String resource = SecurityResources.CLIENT_GROUP; 
			String identifier = "name";
			String idValue = request.getName();
			
			em = getEm();
			tw = new TransactionWrapper(em);
			AppSecurityContext asc = SdkUtils.getClientSecurityContextForRequest(em,request);
			
			ClientGroup resourceObj = DatalogicUtils.findObject(em, ClientGroup.class, identifier, idValue);
			
			// Lets check to see if it is an application identifier..
			String appIdentifier = resourceObj.getApplication()==null?null:resourceObj.getApplication().getAppIdentifier();
			
			if (!StringUtils.isNullOrZeroLength(appIdentifier))
			{
				// Lets check to see if the person has  a right to delete a client for this app...
				asc.hasPermissionThrowException(action,resource, Domains.appDomain(appIdentifier));
			}
			else
			{
				// Lets check at a global level..
				asc.hasPermissionThrowException(action, resource);
			}
			
			ClientGroup deletedObject = resourceObj;
			
			// Lets capture the deletedObject String because once deleted we will not have the data to change log.
			String deletedObjectStr = deletedObject==null?"":new ObjectMapper().writeValueAsString(deletedObject);
			
			GroupDataLogic.deleteClientGroup(em, request);
			
			ChangeLogDataLogic.createChangeLog(em, SecurityActions.DELETE, resource, null, deletedObject.getName(), null, asc.getClient().getClientIdentifier(), null, deletedObjectStr, null);

			tw.success();
			return new DeleteClientGroupResponse(RequestStatusInformation.success(RECORD_DELETED));
		}
		catch (Throwable e)
		{
			log.error(StringUtils.traceString(e));
			return new DeleteClientGroupResponse(RequestStatusInformation.failure(e.getMessage()));
		}
		finally
		{
			if (tw  != null)
				tw.commit();
			if (em != null)
				em.close();
		}
	}

	
	@Override
	public CreateGroupMembershipResponse implementRequest(CreateGroupMembershipRequest request) 
	{
		EntityManager em = null;
		TransactionWrapper tw = null;
		
		try
		{
			String action   = SecurityActions.CREATE;
			String resource = SecurityResources.CLIENT_GROUP_MEMBERSHIP;
			boolean all = false;
			boolean own = false;
			
			// Now let us also check if this permission is avaiable at what scope
			Scope ownScope = Scopes.clientGroupMembershipScope(Scopes.CLIENT_SCOPE_OWN);
			Scope allScope   = Scopes.clientGroupMembershipScope(Scopes.CLIENT_SCOPE_ALL);
			
			em = getEm();
			tw = new TransactionWrapper (em);
			AppSecurityContext asc = SdkUtils.getClientSecurityContextForRequest(em,request);
			
			// Lets check to see if an application has been specified.
			String appIdentifier = request.getAppIdentifier();
			if (!StringUtils.isNullOrZeroLength(appIdentifier))
			{
				// Lets check to see if the person has  a right to create a ACTION for this app...
				asc.hasPermissionThrowException(action, resource, Domains.appDomain(appIdentifier));
				// okay let us see what the scope is for this person..
				all = asc.hasPermissionInScope(action, resource, Domains.appDomain(appIdentifier), allScope);
				own = asc.hasPermissionInScope(action, resource, Domains.appDomain(appIdentifier), ownScope);
			}
			else
			{
				// Lets check at a global level..
				asc.hasPermissionThrowException(action, resource);
				all = asc.hasPermissionInScope(action, resource, allScope);
				own = asc.hasPermissionInScope(action, resource, ownScope);
			}
			
			// Okay so now to check the scope and see which one it is so that we can check correctly..
			if (all == false)
			{
				// OK, so if the person cannot assign at all levels, can he atleast assign the groups that it belongs to ...
				if (own == false)
				{
					throw new PermissionException("The client does not have a permission with necessary scope to create a GroupMembership..");
				}
				else
				{
					// Okay all is false, but own is true.. so lets check to see if the group being assigned is member of the groups that the person has..
					String groupName = request.getClientGroupIdentifier();
					
					if (!asc.hasGroup(groupName))
					{
						throw new PermissionException("The client does not have the permission to create this group membership, since client does not belong that group: " + groupName);
					}
				}
			}
			
			ClientGroupMembership newObject = GroupDataLogic.createClientGroupMembership(em,request);
			String changeTitle = newObject.getClient().getClientIdentifier() + " added to group: " + newObject.getClientGroup().getName();
			ChangeLogDataLogic.createChangeLog(em, SecurityActions.CREATE, resource, changeTitle,""+newObject.getId(), null, asc.getClient().getClientIdentifier(), null, newObject, null);
			tw.success();
			return new CreateGroupMembershipResponse(RequestStatusInformation.success(RECORD_CREATED));
		}
		catch (Throwable e)
		{
			log.error(StringUtils.traceString(e));
			return new CreateGroupMembershipResponse(RequestStatusInformation.failure(e.getMessage()));
		}
		finally
		{
			if (tw != null)
				tw.commit();
			if (em != null)
				em.close();
		}
	}

	
//	private BaseResponse standardTemplate (BaseRequest request)
//	{
//		EntityManager em = null;
//		TransactionWrapper tw = null;
//		
//		try
//		{
//			em = getEm();
//			tw = new TransactionWrapper(em);
//			AppSecurityContext asc = SdkUtils.getClientSecurityContextForRequest(em,request);
//
//			// do business logic..
//			
//			tw.success();
//			return new BaseResponse(RequestStatusInformation.SUCCESS);
//		}
//		catch (Throwable e)
//		{
//			log.error(StringUtils.traceString(e));
//			return new BaseResponse(RequestStatusInformation.failure(e.getMessage()));
//		}
//		finally
//		{
//			if (tw != null)
//				tw.commit();
//			if (em != null)
//				em.close();
//		}
//		
//		
//	}
	
	
	@Override
	public DeleteGroupMembershipResponse implementRequest(DeleteGroupMembershipRequest request) 
	{
		EntityManager em = null;
		TransactionWrapper tw = null;
		
		try
		{
			String action   = SecurityActions.DELETE;
			String resource = SecurityResources.CLIENT_GROUP_MEMBERSHIP;
			boolean all = false;
			boolean own = false;
			
			// Now let us also check if this permission is avaiable at what scope
			Scope ownScope = Scopes.clientGroupMembershipScope(Scopes.CLIENT_SCOPE_OWN);
			Scope allScope   = Scopes.clientGroupMembershipScope(Scopes.CLIENT_SCOPE_ALL);
			
			em = getEm();
			tw = new TransactionWrapper (em);
			AppSecurityContext asc = SdkUtils.getClientSecurityContextForRequest(em,request);
			
			String appIdentifier= null;
			String clientId = request.getClientIdentifier();
			String groupId  = request.getClientGroupIdentifier();
			
			List<ClientGroupMembership> list = GroupDataLogic.getClientGroupMemberships(em, clientId, groupId);
			ClientGroupMembership cgm = list.get(0);
			Application app = cgm.getApplication();
			if (app != null)
				appIdentifier = app.getAppIdentifier();
			
			// Lets check to see if an application has been specified.
			if (!StringUtils.isNullOrZeroLength(appIdentifier))
			{
				// Lets check to see if the person has  a right to create a ACTION for this app...
				asc.hasPermissionThrowException(action, resource, Domains.appDomain(appIdentifier));
				// okay let us see what the scope is for this person..
				all = asc.hasPermissionInScope(action, resource, Domains.appDomain(appIdentifier), allScope);
				own = asc.hasPermissionInScope(action, resource, Domains.appDomain(appIdentifier), ownScope);
			}
			else
			{
				// Lets check at a global level..
				asc.hasPermissionThrowException(action, resource);
				all = asc.hasPermissionInScope(action, resource, allScope);
				own = asc.hasPermissionInScope(action, resource, ownScope);
			}
			
			// Okay so now to check the scope and see which one it is so that we can check correctly..
			if (all == false)
			{
				// OK, so if the person cannot assign at all levels, can he atleast assign the groups that it belongs to ...
				if (own == false)
				{
					throw new PermissionException("The client does not have a permission with necessary scope to delete this GroupMembership..");
				}
				else
				{
					// Okay all is false, but own is true.. so lets check to see if the group being assigned is member of the groups that the person has..
					String groupName = request.getClientGroupIdentifier();
					
					if (!asc.hasGroup(groupName))
					{
						throw new PermissionException("The client does not have the permission to delete this group membership, since client does not belong that group: " + groupName);
					}
				}
			}
			
			ClientGroupMembership deletedObject = GroupDataLogic.deleteClientGroupMembership(em,request);
			
			{
				String changeTitle = "client: " + deletedObject.getClient().getClientIdentifier() + " removed from group: " + deletedObject.getClientGroup().getName();  
				ChangeLogDataLogic.createChangeLog(em, SecurityActions.DELETE, resource, changeTitle, ""+deletedObject.getId(), null, asc.getClient().getClientIdentifier(), null, null, null);
			}
			
			tw.success ();
			return new DeleteGroupMembershipResponse(RequestStatusInformation.success(RECORD_DELETED));
		}
		catch (Throwable e)
		{
			log.error(StringUtils.traceString(e));
			return new DeleteGroupMembershipResponse(RequestStatusInformation.failure(e.getMessage()));
		}
		finally
		{
			if (tw != null)
				tw.commit();
			if (em != null)
				em.close();
		}
	}


	@Override
	public SearchApplicationsResponse implementRequest(SearchApplicationsRequest request) 
	{
		EntityManager em = null;
		
		try
		{
			em = getEm();
			AppSecurityContext asc = SdkUtils.getClientSecurityContextForRequest(em,request);
			// Lets check to see if the customer has access to only the applications that it created, or all applications..
			asc.hasPermissionThrowException(SecurityActions.READ, SecurityResources.APPLICATION);
			// Cool, so the person does have access to be able to read the application..
			// Lets find out if person should be able to read all apps, or just
			
			// Lets see over which domain the person has read rights..
			List<String> limitingAppDomains = asc.hasPermissionReturnLimitingDomains(SecurityActions.READ, SecurityResources.APPLICATION,Domains.APP_DOMAIN_TYPE);
			List<Application> appList = ApplicationDataLogic.searchApplication(em, request, limitingAppDomains);
			
			SearchApplicationsResponse sar = new SearchApplicationsResponse(RequestStatusInformation.SUCCESS);
			
			if (appList != null)
			{
				List<com.v2solve.app.security.securitymodel.Application> listOfApps = new ArrayList<>();
				for (Application app: appList)
				{
					com.v2solve.app.security.securitymodel.Application newApp = new com.v2solve.app.security.securitymodel.Application(app.getAppIdentifier(), app.getAppShortIdentifier(),app.getDescription());
					listOfApps.add(newApp);
				}
				
				sar.setApplications(listOfApps);
			}
			
			return sar;
		}
		catch (Throwable e)
		{
			log.error(StringUtils.traceString(e));
			return new SearchApplicationsResponse(RequestStatusInformation.failure(e.getMessage()));
		}
		finally
		{
			if (em != null)
				em.close();
		}
		
	}


	@Override
	public SearchActionResponse implementRequest(SearchActionRequest request) 
	{
		EntityManager em = null;
		TransactionWrapper tw = null;
		
		try
		{
			em = getEm();
			tw = new TransactionWrapper(em);
			AppSecurityContext asc = SdkUtils.getClientSecurityContextForRequest(em,request);
			
			// Lets make sure the user can read actions..
			asc.hasPermissionThrowException(SecurityActions.READ, SecurityResources.ACTION);
			List<String> limitingAppDomains = asc.hasPermissionReturnLimitingDomains(SecurityActions.READ, SecurityResources.ACTION,Domains.APP_DOMAIN_TYPE);
			// do business logic..
			List<Action> listOfActions = PermissionDataLogic.searchActions(em, request, limitingAppDomains);
			
			SearchActionResponse sar = new SearchActionResponse(RequestStatusInformation.SUCCESS);
			
			if (listOfActions != null && listOfActions.isEmpty()==false)
			{
				List<com.v2solve.app.security.securitymodel.Action> ll = new ArrayList<>();
				
				for (Action action : listOfActions) 
				{
					String appIdentifier = action.getApplication()!=null?action.getApplication().getAppIdentifier():null;
					com.v2solve.app.security.securitymodel.Action newAction = new com.v2solve.app.security.securitymodel.Action(action.getName(), action.getDescription(),appIdentifier);
					ll.add(newAction);
				}
				
				sar.setActions(ll);
			}
			
			tw.success();
			return sar;
		}
		catch (Throwable e)
		{
			log.error(StringUtils.traceString(e));
			return new SearchActionResponse(RequestStatusInformation.failure(e.getMessage()));
		}
		finally
		{
			if (tw != null)
				tw.commit();
			if (em != null)
				em.close();
		}
	}


	@Override
	public SearchPermissionResponse implementRequest(SearchPermissionRequest request) {
	
		EntityManager em = null;
		TransactionWrapper tw = null;
		
		try
		{
			em = getEm();
			tw = new TransactionWrapper(em);
			AppSecurityContext asc = SdkUtils.getClientSecurityContextForRequest(em,request);
			
			// Lets make sure the user can read actions..
			asc.hasPermissionThrowException(SecurityActions.READ, SecurityResources.PERMISSION);
			List<String> limitingAppDomains = asc.hasPermissionReturnLimitingDomains(SecurityActions.READ, SecurityResources.PERMISSION,Domains.APP_DOMAIN_TYPE);
			// do business logic..
			List<Permission> listOfPermissions = PermissionDataLogic.searchPermissions(em, request, limitingAppDomains);
			
			SearchPermissionResponse sar = new SearchPermissionResponse(RequestStatusInformation.SUCCESS);
			
			if (listOfPermissions != null && listOfPermissions.isEmpty()==false)
			{
				List<com.v2solve.app.security.securitymodel.Permission> ll = new ArrayList<>();
				
				for (Permission permission : listOfPermissions) 
				{
					String appIdentifier = permission.getApplication()!=null?permission.getApplication().getAppIdentifier():null;
					com.v2solve.app.security.securitymodel.Permission newPermission = 
							new com.v2solve.app.security.securitymodel.Permission(permission.getName(),
							permission.getAction().getName(),permission.getResource().getName(),permission.getDescription(),appIdentifier);
					ll.add(newPermission);
				}
				
				sar.setPermissions(ll);
			}
			
			tw.success();
			return sar;
		}
		catch (Throwable e)
		{
			log.error(StringUtils.traceString(e));
			return new SearchPermissionResponse(RequestStatusInformation.failure(e.getMessage()));
		}
		finally
		{
			if (tw != null)
				tw.commit();
			if (em != null)
				em.close();
		}
	}

	
	@Override
	public SearchResourceResponse implementRequest(SearchResourceRequest request) {
	
		EntityManager em = null;
		TransactionWrapper tw = null;
		
		try
		{
			em = getEm();
			tw = new TransactionWrapper(em);
			AppSecurityContext asc = SdkUtils.getClientSecurityContextForRequest(em,request);
			
			// Lets make sure the user can read actions..
			asc.hasPermissionThrowException(SecurityActions.READ, SecurityResources.RESOURCE);
			List<String> limitingAppDomains = asc.hasPermissionReturnLimitingDomains(SecurityActions.READ, SecurityResources.RESOURCE,Domains.APP_DOMAIN_TYPE);
			// do business logic..
			List<Resource> listOfResources = PermissionDataLogic.searchResources(em, request, limitingAppDomains);
			
			SearchResourceResponse sar = new SearchResourceResponse(RequestStatusInformation.SUCCESS);
			
			if (listOfResources != null && listOfResources.isEmpty()==false)
			{
				List<com.v2solve.app.security.securitymodel.Resource> ll = new ArrayList<>();
				
				for (Resource resource : listOfResources) 
				{
					String appIdentifier = resource.getApplication()!=null?resource.getApplication().getAppIdentifier():null;
					com.v2solve.app.security.securitymodel.Resource newResource = new com.v2solve.app.security.securitymodel.Resource(resource.getName(), resource.getDescription(),appIdentifier);
					ll.add(newResource);
				}
				
				sar.setResources(ll);
			}
			
			tw.success();
			return sar;
		}
		catch (Throwable e)
		{
			log.error(StringUtils.traceString(e));
			return new SearchResourceResponse(RequestStatusInformation.failure(e.getMessage()));
		}
		finally
		{
			if (tw != null)
				tw.commit();
			if (em != null)
				em.close();
		}
	}


	@Override
	public SearchClientResponse implementRequest(SearchClientRequest request) 
	{
		EntityManager em = null;
		TransactionWrapper tw = null;
		
		try
		{
			em = getEm();
			tw = new TransactionWrapper(em);
			AppSecurityContext asc = SdkUtils.getClientSecurityContextForRequest(em,request);
			
			// Lets make sure the user can read actions..
			asc.hasPermissionThrowException(SecurityActions.READ, SecurityResources.CLIENT);
			List<String> limitingAppDomains = asc.hasPermissionReturnLimitingDomains(SecurityActions.READ, SecurityResources.CLIENT,Domains.APP_DOMAIN_TYPE);
			// do business logic..
			List<Client> listOfClients = ApplicationDataLogic.searchClients(em, request, limitingAppDomains);
			
			SearchClientResponse sar = new SearchClientResponse(RequestStatusInformation.SUCCESS);
			
			if (listOfClients != null && listOfClients.isEmpty()==false)
			{
				List<com.v2solve.app.security.securitymodel.AppClient> ll = new ArrayList<>();
				
				for (Client client : listOfClients) 
				{
					String appIdentifier = client.getApplication()!=null?client.getApplication().getAppIdentifier():null;
					com.v2solve.app.security.securitymodel.AppClient newClient = new com.v2solve.app.security.securitymodel.AppClient(client.getClientIdentifier(), client.getDescription(),appIdentifier);
					ll.add(newClient);
				}
				
				sar.setClients(ll);
			}
			
			tw.success();
			return sar;
		}
		catch (Throwable e)
		{
			log.error(StringUtils.traceString(e));
			return new SearchClientResponse(RequestStatusInformation.failure(e.getMessage()));
		}
		finally
		{
			if (tw != null)
				tw.commit();
			if (em != null)
				em.close();
		}
	}

	
	/**
	 * This will return the ClientGroups on which the user has the rights for appropriate action.
	 * @param request
	 * @return
	 */
	@Override
	public SearchClientGroupResponse implementRequest(SearchClientGroupRequest request) 
	{
		EntityManager em = null;
		TransactionWrapper tw = null;
		
		try
		{
			em = getEm();
			tw = new TransactionWrapper(em);
			AppSecurityContext asc = SdkUtils.getClientSecurityContextForRequest(em,request);
			
			String forAction      = SecurityActions.READ;
			String forResource     = SecurityResources.CLIENT_GROUP;
			
			boolean all = false;
			boolean own = false;
			
			// Now let us also create two scopes
			Scope ownScope = Scopes.clientGroupMembershipScope(Scopes.CLIENT_SCOPE_OWN);
			Scope allScope   = Scopes.clientGroupMembershipScope(Scopes.CLIENT_SCOPE_ALL);
			
			{
				// Lets check at a global level..
				asc.hasPermissionThrowException(forAction, forResource);
				
				// Now lets check for scope on 
				all = asc.hasPermissionInScope(forAction, forResource, allScope);
				own = asc.hasPermissionInScope(forAction, forResource, ownScope);
			}
			
			// Okay so now to check the scope and see which one it is so that we can check correctly..
			if (all == false)
			{
				// OK, so if the person cannot assign at all levels, can he at least assign the groups that it belongs to ...
				if (own == false)
				{
					throw new PermissionException("The client does not have a permission with necessary scope to " + forAction + " on " + forResource);
				}
			}
			
			List<String> limitingAppDomains = asc.hasPermissionReturnLimitingDomains(forAction, forResource,Domains.APP_DOMAIN_TYPE);

			// do business logic..
			List<ClientGroup> listOfClientGroups = GroupDataLogic.searchClientGroups(em, request, limitingAppDomains);
			
			SearchClientGroupResponse sar = new SearchClientGroupResponse(RequestStatusInformation.SUCCESS);
			
			if (listOfClientGroups != null && listOfClientGroups.isEmpty()==false)
			{
				List<com.v2solve.app.security.securitymodel.ClientGroup> ll = new ArrayList<>();
				
				for (ClientGroup clientGroup : listOfClientGroups) 
				{
					String appIdentifier = clientGroup.getApplication()!=null?clientGroup.getApplication().getAppIdentifier():null;
					com.v2solve.app.security.securitymodel.ClientGroup newClientGroup = new com.v2solve.app.security.securitymodel.ClientGroup(clientGroup.getName(), clientGroup.getDescription(),appIdentifier);
					if (all==false)
					{
						if (own==true)
						{
							if (asc.hasGroup(newClientGroup.getName())) // Add only if the group is provided to the person.
							ll.add(newClientGroup);
						}
					}
					else
						ll.add(newClientGroup);		// All groups are allowed to have the forAction on them.
				}
				
				sar.setClientGroups(ll);
			}
			
			tw.success();
			return sar;
		}
		catch (Throwable e)
		{
			log.error(StringUtils.traceString(e));
			return new SearchClientGroupResponse(RequestStatusInformation.failure(e.getMessage()));
		}
		finally
		{
			if (tw != null)
				tw.commit();
			if (em != null)
				em.close();
		}
	}


	@Override
	public SearchClientRoleResponse implementRequest(SearchClientRoleRequest request) 
	{
		EntityManager em = null;
		TransactionWrapper tw = null;
		
		try
		{
			em = getEm();
			tw = new TransactionWrapper(em);
			AppSecurityContext asc = SdkUtils.getClientSecurityContextForRequest(em,request);
			
			// Lets make sure the user can read actions..
			asc.hasPermissionThrowException(SecurityActions.READ, SecurityResources.CLIENT_ROLE);
			List<String> limitingAppDomains = asc.hasPermissionReturnLimitingDomains(SecurityActions.READ, SecurityResources.CLIENT_ROLE,Domains.APP_DOMAIN_TYPE);
			// do business logic..
			List<ClientRole> listOfClientRoles = RoleDataLogic.searchClientRoles(em, request, limitingAppDomains);
			
			SearchClientRoleResponse sar = new SearchClientRoleResponse(RequestStatusInformation.SUCCESS);
			
			if (listOfClientRoles != null && listOfClientRoles.isEmpty()==false)
			{
				List<com.v2solve.app.security.securitymodel.ClientRole> ll = new ArrayList<>();
				
				for (ClientRole clientRole : listOfClientRoles) 
				{
					String appIdentifier = clientRole.getApplication()!=null?clientRole.getApplication().getAppIdentifier():null;
					com.v2solve.app.security.securitymodel.ClientRole newClientRole = new com.v2solve.app.security.securitymodel.ClientRole(clientRole.getName(), clientRole.getDescription(),appIdentifier);
					ll.add(newClientRole);
				}
				
				sar.setClientRoles(ll);
			}
			
			tw.success();
			return sar;
		}
		catch (Throwable e)
		{
			log.error(StringUtils.traceString(e));
			return new SearchClientRoleResponse(RequestStatusInformation.failure(e.getMessage()));
		}
		finally
		{
			if (tw != null)
				tw.commit();
			if (em != null)
				em.close();
		}
	}


	@Override
	public SearchDomainTypeResponse implementRequest(SearchDomainTypeRequest request) 
	{
		EntityManager em = null;
		TransactionWrapper tw = null;
		
		try
		{
			em = getEm();
			tw = new TransactionWrapper(em);
			AppSecurityContext asc = SdkUtils.getClientSecurityContextForRequest(em,request);
			
			// Lets make sure the user can read actions..
			asc.hasPermissionThrowException(SecurityActions.READ, SecurityResources.CLIENT_ROLE);
			List<String> limitingAppDomains = asc.hasPermissionReturnLimitingDomains(SecurityActions.READ, SecurityResources.CLIENT_ROLE,Domains.APP_DOMAIN_TYPE);
			// do business logic..
			List<ResourceDomainType> listOfDomainTypes = DomainScopeDataLogic.searchDomainTypes(em, request, limitingAppDomains);
			
			SearchDomainTypeResponse sar = new SearchDomainTypeResponse(RequestStatusInformation.SUCCESS);
			
			if (listOfDomainTypes != null && listOfDomainTypes.isEmpty()==false)
			{
				List<com.v2solve.app.security.securitymodel.DomainType> ll = new ArrayList<>();
				
				for (ResourceDomainType domainType : listOfDomainTypes) 
				{
					String appIdentifier = domainType.getApplication()!=null?domainType.getApplication().getAppIdentifier():null;
					com.v2solve.app.security.securitymodel.DomainType newResourceDomainType = new com.v2solve.app.security.securitymodel.DomainType(domainType.getName(),appIdentifier);
					ll.add(newResourceDomainType);
				}
				
				sar.setDomainTypes(ll);
			}
			
			tw.success();
			return sar;
		}
		catch (Throwable e)
		{
			log.error(StringUtils.traceString(e));
			return new SearchDomainTypeResponse(RequestStatusInformation.failure(e.getMessage()));
		}
		finally
		{
			if (tw != null)
				tw.commit();
			if (em != null)
				em.close();
		}
	}


	@Override
	public SearchScopeTypeResponse implementRequest(SearchScopeTypeRequest request) 
	{
		EntityManager em = null;
		TransactionWrapper tw = null;
		
		try
		{
			em = getEm();
			tw = new TransactionWrapper(em);
			AppSecurityContext asc = SdkUtils.getClientSecurityContextForRequest(em,request);
			
			// Lets make sure the user can read actions..
			asc.hasPermissionThrowException(SecurityActions.READ, SecurityResources.SCOPE_TYPE);
			List<String> limitingAppDomains = asc.hasPermissionReturnLimitingDomains(SecurityActions.READ, SecurityResources.SCOPE_TYPE,Domains.APP_DOMAIN_TYPE);
			// do business logic..
			List<ScopeType> listOfScopeTypes = DomainScopeDataLogic.searchScopeTypes(em, request, limitingAppDomains);
			
			SearchScopeTypeResponse sar = new SearchScopeTypeResponse(RequestStatusInformation.SUCCESS);
			
			if (listOfScopeTypes != null && listOfScopeTypes.isEmpty()==false)
			{
				List<com.v2solve.app.security.securitymodel.ScopeType> ll = new ArrayList<>();
				
				for (ScopeType scopeType : listOfScopeTypes) 
				{
					String appIdentifier = scopeType.getApplication()!=null?scopeType.getApplication().getAppIdentifier():null;
					com.v2solve.app.security.securitymodel.ScopeType newScopeType = new com.v2solve.app.security.securitymodel.ScopeType(scopeType.getName(), appIdentifier);
					ll.add(newScopeType);
				}
				
				sar.setScopeTypes(ll);
			}
			
			tw.success();
			return sar;
		}
		catch (Throwable e)
		{
			log.error(StringUtils.traceString(e));
			return new SearchScopeTypeResponse(RequestStatusInformation.failure(e.getMessage()));
		}
		finally
		{
			if (tw != null)
				tw.commit();
			if (em != null)
				em.close();
		}
	}


	@Override
	public CreateClientRoleResponse implementRequest(CreateClientRoleRequest request) 
	{
		EntityManager em = null;
		TransactionWrapper tw = null;
		
		try
		{
			String action   = SecurityActions.CREATE;
			String resource = SecurityResources.CLIENT_ROLE;
			
			em = getEm();
			tw = new TransactionWrapper(em);
			AppSecurityContext asc = SdkUtils.getClientSecurityContextForRequest(em,request);
			
			// Lets check to see if an application has been specified.
			String appIdentifier = request.getAppIdentifier();
			if (!StringUtils.isNullOrZeroLength(appIdentifier))
			{
				// Lets check to see if the person has  a right to create a ACTION for this app...
				asc.hasPermissionThrowException(action, resource, Domains.appDomain(appIdentifier));
			}
			else
			{
				// Lets check at a global level..
				asc.hasPermissionThrowException(action, resource);
			}

			// Lets check if the object already exists..
			ClientRole existingObj = DatalogicUtils.findObjectReturnNull(em, ClientRole.class, "name", request.getName());
			
			// Update existing record..
			if (existingObj != null)
			{
				ClientRole originalRecord = ReflectUtils.createCopy(existingObj, ClientRole.class);
				String existingAppIdentifier = existingObj.getApplication()==null?null:existingObj.getApplication().getAppIdentifier();
				// Lets check update Permission..
				asc.hasPermissionThrowException(SecurityActions.UPDATE, resource, Domains.appDomain(existingAppIdentifier));
				asc.hasPermissionThrowException(SecurityActions.UPDATE, resource, Domains.appDomain(appIdentifier));
				// Okay so has permission..
				existingObj.setDescription(request.getDescription());
				Application app = null;
				if (appIdentifier != null)
					app = DatalogicUtils.findObject(em, Application.class, "appIdentifier", appIdentifier);
				existingObj.setApplication(app);
				
				JPAUtils.updateObject(em, existingObj);
				ChangeLogDataLogic.createChangeLog(em, SecurityActions.UPDATE, resource, null, existingObj.getName(), null, asc.getClient().getClientIdentifier(), null, existingObj, originalRecord);
				tw.success();
				return new CreateClientRoleResponse(RequestStatusInformation.success(RECORD_UPDATED));
			}
			
			ClientRole newObject = RoleDataLogic.createClientRole(em,request);
			ChangeLogDataLogic.createChangeLog(em, SecurityActions.CREATE, resource, null, newObject.getName(), null, asc.getClient().getClientIdentifier(), null, newObject, null);
			tw.success();
			return new CreateClientRoleResponse(RequestStatusInformation.success(RECORD_CREATED));
		}
		catch (Throwable e)
		{
			log.error(StringUtils.traceString(e));
			return new CreateClientRoleResponse(RequestStatusInformation.failure(e.getMessage()));
		}
		finally
		{
			if (tw != null)
				tw.commit();
			if (em != null)
				em.close();
		}
	}


	@Override
	public CreateDomainTypeResponse implementRequest(CreateDomainTypeRequest request) 
	{
		EntityManager em = null;
		TransactionWrapper tw = null;
		
		try
		{
			String action   = SecurityActions.CREATE;
			String resource = SecurityResources.RESOURCE_DOMAIN_TYPE;
			
			em = getEm();
			tw = new TransactionWrapper(em);
			AppSecurityContext asc = SdkUtils.getClientSecurityContextForRequest(em,request);
			
			// Lets check to see if an application has been specified.
			String appIdentifier = request.getAppIdentifier();
			if (!StringUtils.isNullOrZeroLength(appIdentifier))
			{
				// Lets check to see if the person has  a right to create a ACTION for this app...
				asc.hasPermissionThrowException(action, resource, Domains.appDomain(appIdentifier));
			}
			else
			{
				// Lets check at a global level..
				asc.hasPermissionThrowException(action, resource);
			}

			// Lets check if the object already exists..
			ResourceDomainType existingObj = DatalogicUtils.findObjectReturnNull(em, ResourceDomainType.class, "name", request.getName());
			
			// Update existing record..
			if (existingObj != null)
			{
				ResourceDomainType originalRecord = ReflectUtils.createCopy(existingObj, ResourceDomainType.class);
				String existingAppIdentifier = existingObj.getApplication()==null?null:existingObj.getApplication().getAppIdentifier();
				// Lets check update Permission..
				asc.hasPermissionThrowException(SecurityActions.UPDATE, resource, Domains.appDomain(existingAppIdentifier));
				asc.hasPermissionThrowException(SecurityActions.UPDATE, resource, Domains.appDomain(appIdentifier));
				// Okay so has permission..
				Application app = null;
				if (appIdentifier != null)
					app = DatalogicUtils.findObject(em, Application.class, "appIdentifier", appIdentifier);
				existingObj.setApplication(app);
				
				JPAUtils.updateObject(em, existingObj);
				ChangeLogDataLogic.createChangeLog(em, SecurityActions.UPDATE, resource, null, existingObj.getName(), null, asc.getClient().getClientIdentifier(), null, existingObj, originalRecord);
				tw.success();
				return new CreateDomainTypeResponse(RequestStatusInformation.success(RECORD_UPDATED));
			}
			
			ResourceDomainType newObject = DomainScopeDataLogic.createResourceDomainType(em,request);
			ChangeLogDataLogic.createChangeLog(em, SecurityActions.CREATE, resource, null, newObject.getName(), null, asc.getClient().getClientIdentifier(), null, newObject, null);
			tw.success();
			return new CreateDomainTypeResponse(RequestStatusInformation.success(RECORD_CREATED));
		}
		catch (Throwable e)
		{
			log.error(StringUtils.traceString(e));
			return new CreateDomainTypeResponse(RequestStatusInformation.failure(e.getMessage()));
		}
		finally
		{
			if (tw != null)
				tw.commit();
			if (em != null)
				em.close();
		}
	}


	@Override
	public CreateScopeTypeResponse implementRequest(CreateScopeTypeRequest request) {
		// TODO Auto-generated method stub
		EntityManager em = null;
		TransactionWrapper tw = null;
		
		try
		{
			String action   = SecurityActions.CREATE;
			String resource = SecurityResources.SCOPE_TYPE;
			
			em = getEm();
			tw = new TransactionWrapper(em);
			AppSecurityContext asc = SdkUtils.getClientSecurityContextForRequest(em,request);
			
			// Lets check to see if an application has been specified.
			String appIdentifier = request.getAppIdentifier();
			if (!StringUtils.isNullOrZeroLength(appIdentifier))
			{
				// Lets check to see if the person has  a right to create a ACTION for this app...
				asc.hasPermissionThrowException(action, resource, Domains.appDomain(appIdentifier));
			}
			else
			{
				// Lets check at a global level..
				asc.hasPermissionThrowException(action, resource);
			}

			// Lets check if the object already exists..
			ScopeType existingObj = DatalogicUtils.findObjectReturnNull(em, ScopeType.class, "name", request.getName());
			
			// Update existing record..
			if (existingObj != null)
			{
				ScopeType originalRecord = ReflectUtils.createCopy(existingObj, ScopeType.class);
				String existingAppIdentifier = existingObj.getApplication()==null?null:existingObj.getApplication().getAppIdentifier();
				// Lets check update Permission..
				asc.hasPermissionThrowException(SecurityActions.UPDATE, resource, Domains.appDomain(existingAppIdentifier));
				asc.hasPermissionThrowException(SecurityActions.UPDATE, resource, Domains.appDomain(appIdentifier));
				// Okay so has permission..
				Application app = null;
				if (appIdentifier != null)
					app = DatalogicUtils.findObject(em, Application.class, "appIdentifier", appIdentifier);
				existingObj.setApplication(app);
				
				JPAUtils.updateObject(em, existingObj);
				ChangeLogDataLogic.createChangeLog(em, SecurityActions.UPDATE, resource, null, existingObj.getName(), null, asc.getClient().getClientIdentifier(), null, existingObj, originalRecord);
				tw.success();
				return new CreateScopeTypeResponse(RequestStatusInformation.success(RECORD_UPDATED));
			}
			
			ScopeType newObject = DomainScopeDataLogic.createScopeType(em,request);
			ChangeLogDataLogic.createChangeLog(em, SecurityActions.CREATE, resource, null, newObject.getName(), null, asc.getClient().getClientIdentifier(), null, newObject, null);
			tw.success();
			return new CreateScopeTypeResponse(RequestStatusInformation.success(RECORD_CREATED));
		}
		catch (Throwable e)
		{
			log.error(StringUtils.traceString(e));
			return new CreateScopeTypeResponse(RequestStatusInformation.failure(e.getMessage()));
		}
		finally
		{
			if (tw != null)
				tw.commit();
			if (em != null)
				em.close();
		}
	}


	@Override
	public DeleteClientRoleResponse implementRequest(DeleteClientRoleRequest request) 
	{
		EntityManager em = null;
		TransactionWrapper tw = null;
		
		try
		{
			String action   = SecurityActions.DELETE;
			String resource = SecurityResources.CLIENT_ROLE; 
			String identifier = "name";
			String idValue = request.getName();
			
			em = getEm();
			tw = new TransactionWrapper(em);
			AppSecurityContext asc = SdkUtils.getClientSecurityContextForRequest(em,request);
			
			ClientRole c = DatalogicUtils.findObject(em, ClientRole.class, identifier, idValue);
	
			// Lets check to see if it is an application identifier..
			String appIdentifier = c.getApplication() != null?c.getApplication().getAppIdentifier():null;
			
			if (!StringUtils.isNullOrZeroLength(appIdentifier))
			{
				// Lets check to see if the person has  a right to delete a client for this app...
				asc.hasPermissionThrowException(action, resource, Domains.appDomain(appIdentifier));
			}
			else
			{
				// Lets check at a global level..
				asc.hasPermissionThrowException(action, resource);
			}
			
			ClientRole deletedObject = c;
			
			// Lets capture the deletedObject String because once deleted we will not have the data to change log.
			String deletedObjectStr = deletedObject==null?"":new ObjectMapper().writeValueAsString(deletedObject);
			
			RoleDataLogic.deleteClientRole(em,request);
			
			ChangeLogDataLogic.createChangeLog(em, SecurityActions.DELETE, resource, null, deletedObject.getName(), null, asc.getClient().getClientIdentifier(), null, deletedObjectStr, null);
			
			tw.success();
			return new DeleteClientRoleResponse(RequestStatusInformation.success(RECORD_DELETED));
		}
		catch (Throwable e)
		{
			log.error(StringUtils.traceString(e));
			return new DeleteClientRoleResponse(RequestStatusInformation.failure(e.getMessage()));
		}
		finally
		{
			if (tw != null)
				tw.commit();
			if (em != null)
				em.close();
		}
	}


	@Override
	public DeleteDomainTypeResponse implementRequest(DeleteDomainTypeRequest request) 
	{
		EntityManager em = null;
		TransactionWrapper tw = null;
		
		try
		{
			String action   = SecurityActions.DELETE;
			String resource = SecurityResources.RESOURCE_DOMAIN_TYPE; 
			String identifier = "name";
			String idValue = request.getName();
			
			em = getEm();
			tw = new TransactionWrapper(em);
			AppSecurityContext asc = SdkUtils.getClientSecurityContextForRequest(em,request);
			
			ResourceDomainType c = DatalogicUtils.findObject(em, ResourceDomainType.class, identifier, idValue);
	
			// Lets check to see if it is an application identifier..
			String appIdentifier = c.getApplication() != null?c.getApplication().getAppIdentifier():null;
			
			if (!StringUtils.isNullOrZeroLength(appIdentifier))
			{
				// Lets check to see if the person has  a right to delete a client for this app...
				asc.hasPermissionThrowException(action, resource, Domains.appDomain(appIdentifier));
			}
			else
			{
				// Lets check at a global level..
				asc.hasPermissionThrowException(action, resource);
			}
			
			ResourceDomainType deletedObject = c;
			
			// Lets capture the deletedObject String because once deleted we will not have the data to change log.
			String deletedObjectStr = deletedObject==null?"":new ObjectMapper().writeValueAsString(deletedObject);
			
			DomainScopeDataLogic.deleteResourceDomainType(em, request);
			
			ChangeLogDataLogic.createChangeLog(em, SecurityActions.DELETE, resource, null, deletedObject.getName(), null, asc.getClient().getClientIdentifier(), null, deletedObjectStr, null);
			
			tw.success();
			return new DeleteDomainTypeResponse(RequestStatusInformation.success(RECORD_DELETED));
		}
		catch (Throwable e)
		{
			log.error(StringUtils.traceString(e));
			return new DeleteDomainTypeResponse(RequestStatusInformation.failure(e.getMessage()));
		}
		finally
		{
			if (tw != null)
				tw.commit();
			if (em != null)
				em.close();
		}
	}


	@Override
	public DeleteScopeTypeResponse implementRequest(DeleteScopeTypeRequest request) 
	{
		EntityManager em = null;
		TransactionWrapper tw = null;
		
		try
		{
			String action   = SecurityActions.DELETE;
			String resource = SecurityResources.SCOPE_TYPE; 
			String identifier = "name";
			String idValue = request.getName();
			
			em = getEm();
			tw = new TransactionWrapper(em);
			AppSecurityContext asc = SdkUtils.getClientSecurityContextForRequest(em,request);
			
			ScopeType c = DatalogicUtils.findObject(em, ScopeType.class, identifier, idValue);
	
			// Lets check to see if it is an application identifier..
			String appIdentifier = c.getApplication() != null?c.getApplication().getAppIdentifier():null;
			
			if (!StringUtils.isNullOrZeroLength(appIdentifier))
			{
				// Lets check to see if the person has  a right to delete a client for this app...
				asc.hasPermissionThrowException(action, resource, Domains.appDomain(appIdentifier));
			}
			else
			{
				// Lets check at a global level..
				asc.hasPermissionThrowException(action, resource);
			}
			
			ScopeType deletedObject = c;
			
			// Lets capture the deletedObject String because once deleted we will not have the data to change log.
			String deletedObjectStr = deletedObject==null?"":new ObjectMapper().writeValueAsString(deletedObject);
			
			DomainScopeDataLogic.deleteScopeType(em, request);
			
			ChangeLogDataLogic.createChangeLog(em, SecurityActions.DELETE, resource, null, deletedObject.getName(), null, asc.getClient().getClientIdentifier(), null, deletedObjectStr, null);

			tw.success();
			return new DeleteScopeTypeResponse(RequestStatusInformation.success(RECORD_DELETED));
		}
		catch (Throwable e)
		{
			log.error(StringUtils.traceString(e));
			return new DeleteScopeTypeResponse(RequestStatusInformation.failure(e.getMessage()));
		}
		finally
		{
			if (tw != null)
				tw.commit();
			if (em != null)
				em.close();
		}
	}


	@Override
	public CreateDomainResponse implementRequest(CreateDomainRequest request) 
	{
		EntityManager em = null;
		TransactionWrapper tw = null;
		
		try
		{
			String action   = SecurityActions.CREATE;
			String resource = SecurityResources.RESOURCE_DOMAIN;
			
			em = getEm();
			tw = new TransactionWrapper(em);
			AppSecurityContext asc = SdkUtils.getClientSecurityContextForRequest(em,request);
			
			// Lets check to see if an application has been specified.
			String appIdentifier = request.getAppIdentifier();
			
			if (!StringUtils.isNullOrZeroLength(appIdentifier))
			{
				// Lets check to see if the person has  a right to create a ACTION for this app...
				asc.hasPermissionThrowException(action, resource, Domains.appDomain(appIdentifier));
			}
			else
			{
				// Lets check at a global level..
				asc.hasPermissionThrowException(action, resource);
			}

			// Lets check if the object already exists..
			ResourceDomain existingObj = DatalogicUtils.findObjectReturnNull(em, ResourceDomain.class, "name", request.getName());
			
			// Update existing record..
			if (existingObj != null)
			{   
				ResourceDomain originalRecord = ReflectUtils.createCopy(existingObj, ResourceDomain.class);
				ResourceDomain parentDomainObj = null;
				if (request.getParentDomain()  != null)
					parentDomainObj = DatalogicUtils.findObjectReturnNull(em, ResourceDomain.class, "name", request.getParentDomain());
				
				ResourceDomainType rdt = DatalogicUtils.findObjectReturnNull(em, ResourceDomainType.class, "name", request.getDomainType());
				if (rdt == null)
					throw new DataLogicValidationException("DomainType: " + request.getDomainType() + " not found.");
				
				// Lets make sure the parent domain is not its own parent.
				if (parentDomainObj != null)
				{
					if (parentDomainObj.getId() == existingObj.getId())
						throw new DataLogicValidationException("Parent domain, cannot be the same domain");
					
					// Lets make sure both the types are the same..
					if (!rdt.getName().equals(parentDomainObj.getResourceDomainType().getName()))
					{
						throw new DataLogicValidationException("Parent domain, must be of the same type as child domain");
					}
				}
				
				String existingAppIdentifier = existingObj.getApplication()==null?null:existingObj.getApplication().getAppIdentifier();
				// Lets check update Permission..
				asc.hasPermissionThrowException(SecurityActions.UPDATE, resource, Domains.appDomain(existingAppIdentifier));
				asc.hasPermissionThrowException(SecurityActions.UPDATE, resource, Domains.appDomain(appIdentifier));
				// Okay so has permission..
				Application app = null;
				if (appIdentifier != null)
					app = DatalogicUtils.findObject(em, Application.class, "appIdentifier", appIdentifier);
				
				existingObj.setApplication(app);
				existingObj.setResourceDomain(parentDomainObj);
				existingObj.setResourceDomainType(rdt);
				existingObj.setDescription(request.getDescription());
				
				JPAUtils.updateObject(em, existingObj);
				ChangeLogDataLogic.createChangeLog(em, SecurityActions.UPDATE, resource, null, existingObj.getName(), null, asc.getClient().getClientIdentifier(), null, existingObj, originalRecord);
				tw.success();
				return new CreateDomainResponse(RequestStatusInformation.success(RECORD_UPDATED));
			}
			
			ResourceDomain newObject = DomainScopeDataLogic.createResourceDomain(em,request);
			ChangeLogDataLogic.createChangeLog(em, SecurityActions.CREATE, resource, null, newObject.getName(), null, asc.getClient().getClientIdentifier(), null, newObject, null);
			tw.success();
			return new CreateDomainResponse(RequestStatusInformation.success(RECORD_CREATED));
		}
		catch (Throwable e)
		{
			log.error(StringUtils.traceString(e));
			return new CreateDomainResponse(RequestStatusInformation.failure(e.getMessage()));
		}
		finally
		{
			if (tw != null)
				tw.commit();
			
			if (em != null)
				em.close();
		}
	}


	@Override
	public DeleteDomainResponse implementRequest(DeleteDomainRequest request) 
	{
		EntityManager em = null;
		TransactionWrapper tw = null;
		
		try
		{
			String action   = SecurityActions.DELETE;
			String resource = SecurityResources.RESOURCE_DOMAIN; 
			String identifier = "name";
			String idValue = request.getName();
			
			em = getEm();
			tw = new TransactionWrapper(em);
			AppSecurityContext asc = SdkUtils.getClientSecurityContextForRequest(em,request);
			
			ResourceDomain c = DatalogicUtils.findObject(em, ResourceDomain.class, identifier, idValue);
	
			// Lets check to see if it is an application identifier..
			String appIdentifier = c.getApplication() != null?c.getApplication().getAppIdentifier():null;
			
			if (!StringUtils.isNullOrZeroLength(appIdentifier))
			{
				// Lets check to see if the person has  a right to delete a client for this app...
				asc.hasPermissionThrowException(action, resource, Domains.appDomain(appIdentifier));
			}
			else
			{
				// Lets check at a global level..
				asc.hasPermissionThrowException(action, resource);
			}
			
			ResourceDomain deletedObject = c;
			
			// Lets capture the deletedObject String because once deleted we will not have the data to change log.
			String deletedObjectStr = deletedObject==null?"":new ObjectMapper().writeValueAsString(deletedObject);
			
			DomainScopeDataLogic.deleteResourceDomain(em, request);
			
			ChangeLogDataLogic.createChangeLog(em, SecurityActions.DELETE, resource, null, deletedObject.getName(), null, asc.getClient().getClientIdentifier(), null, deletedObjectStr, null);

			tw.success();
			return new DeleteDomainResponse(RequestStatusInformation.success(RECORD_DELETED));
		}
		catch (Throwable e)
		{
			log.error(StringUtils.traceString(e));
			return new DeleteDomainResponse(RequestStatusInformation.failure(e.getMessage()));
		}
		finally
		{
			if (tw != null)
				tw.commit();
			if (em != null)
				em.close();
		}
	}


	@Override
	public SearchDomainResponse implementRequest(SearchDomainRequest request) 
	{
		EntityManager em = null;
		TransactionWrapper tw = null;
		
		try
		{
			em = getEm();
			tw = new TransactionWrapper(em);
			AppSecurityContext asc = SdkUtils.getClientSecurityContextForRequest(em,request);
			
			// Lets make sure the user can read actions..
			asc.hasPermissionThrowException(SecurityActions.READ, SecurityResources.RESOURCE_DOMAIN);
			List<String> limitingAppDomains = asc.hasPermissionReturnLimitingDomains(SecurityActions.READ, SecurityResources.RESOURCE_DOMAIN,Domains.APP_DOMAIN_TYPE);
			// do business logic..
			List<ResourceDomain> listOfDomains = DomainScopeDataLogic.searchResourceDomains(em, request, limitingAppDomains);
			
			SearchDomainResponse sar = new SearchDomainResponse(RequestStatusInformation.SUCCESS);
			
			if (listOfDomains != null && listOfDomains.isEmpty()==false)
			{
				List<com.v2solve.app.security.securitymodel.Domain> ll = new ArrayList<>();
				
				for (ResourceDomain domain : listOfDomains) 
				{
					String appIdentifier = domain.getApplication()!=null?domain.getApplication().getAppIdentifier():null;
					Domain parentDomain = null;
					if (domain.getResourceDomain() != null)
					{
						ResourceDomain pd = domain.getResourceDomain();
						parentDomain = new Domain(pd.getName(),pd.getResourceDomainType().getName());
					}
					
					com.v2solve.app.security.securitymodel.Domain newDomain = new com.v2solve.app.security.securitymodel.Domain(domain.getName(),domain.getResourceDomainType().getName(),parentDomain,domain.getDescription(),appIdentifier);
					ll.add(newDomain);
				}
				
				sar.setDomains(ll);
			}
			
			tw.success();
			return sar;
		}
		catch (Throwable e)
		{
			log.error(StringUtils.traceString(e));
			return new SearchDomainResponse(RequestStatusInformation.failure(e.getMessage()));
		}
		finally
		{
			if (tw != null)
				tw.commit();
			if (em != null)
				em.close();
		}
	}


	@Override
	public CreateScopeResponse implementRequest(CreateScopeRequest request) 
	{
		EntityManager em = null;
		TransactionWrapper tw = null;
		
		try
		{
			String action   = SecurityActions.CREATE;
			String resource = SecurityResources.ROLE_SCOPE;
			
			if (StringUtils.isNullOrZeroLength(request.getValue()))
			{
				throw new DataLogicValidationException("Scope value is a required attribute.");
			}
			
			em = getEm();
			tw = new TransactionWrapper(em);
			AppSecurityContext asc = SdkUtils.getClientSecurityContextForRequest(em,request);
			
			// Lets check to see if an application has been specified.
			String appIdentifier = request.getAppIdentifier();
			
			if (!StringUtils.isNullOrZeroLength(appIdentifier))
			{
				// Lets check to see if the person has  a right to create a ACTION for this app...
				asc.hasPermissionThrowException(action, resource, Domains.appDomain(appIdentifier));
			}
			else
			{
				// Lets check at a global level..
				asc.hasPermissionThrowException(action, resource);
			}

			// Lets check if the object already exists..
			RoleScope existingObj = DatalogicUtils.findObjectReturnNull(em, RoleScope.class, "name", request.getName());
			
			// Update existing record..
			if (existingObj != null)
			{   
				RoleScope originalRecord = ReflectUtils.createCopy(existingObj, RoleScope.class);
				ScopeType rdt = DatalogicUtils.findObjectReturnNull(em, ScopeType.class, "name", request.getScopeType());
				if (rdt == null)
					throw new DataLogicValidationException("ScopeType: " + request.getScopeType() + " not found.");
				
				String existingAppIdentifier = existingObj.getApplication()==null?null:existingObj.getApplication().getAppIdentifier();
				// Lets check update Permission..
				asc.hasPermissionThrowException(SecurityActions.UPDATE, resource, Domains.appDomain(existingAppIdentifier));
				asc.hasPermissionThrowException(SecurityActions.UPDATE, resource, Domains.appDomain(appIdentifier));
				// Okay so has permission..
				Application app = null;
				if (appIdentifier != null)
					app = DatalogicUtils.findObject(em, Application.class, "appIdentifier", appIdentifier);
				
				existingObj.setName(request.getName());
				existingObj.setApplication(app);
				existingObj.setScopeValue(request.getValue());
				existingObj.setDescription(request.getDescription());
				existingObj.setScopeType(rdt);
				JPAUtils.updateObject(em, existingObj);
				ChangeLogDataLogic.createChangeLog(em, SecurityActions.UPDATE, resource, null, existingObj.getName(), null, asc.getClient().getClientIdentifier(), null, existingObj, originalRecord);
				tw.success();
				return new CreateScopeResponse(RequestStatusInformation.success(RECORD_UPDATED));
			}
			
			RoleScope newObject = DomainScopeDataLogic.createRoleScope(em,request);
			ChangeLogDataLogic.createChangeLog(em, SecurityActions.CREATE, resource, null, newObject.getName(), null, asc.getClient().getClientIdentifier(), null, newObject, null);
			tw.success();
			return new CreateScopeResponse(RequestStatusInformation.success(RECORD_CREATED));
		}
		catch (Throwable e)
		{
			log.error(StringUtils.traceString(e));
			return new CreateScopeResponse(RequestStatusInformation.failure(e.getMessage()));
		}
		finally
		{
			if (tw != null)
				tw.commit();
			
			if (em != null)
				em.close();
		}
	}


	@Override
	public SearchScopeResponse implementRequest(SearchScopeRequest request) 
	{
		EntityManager em = null;
		TransactionWrapper tw = null;
		
		try
		{
			em = getEm();
			tw = new TransactionWrapper(em);
			AppSecurityContext asc = SdkUtils.getClientSecurityContextForRequest(em,request);
			
			// Lets make sure the user can read actions..
			asc.hasPermissionThrowException(SecurityActions.READ, SecurityResources.ROLE_SCOPE);
			List<String> limitingAppDomains = asc.hasPermissionReturnLimitingDomains(SecurityActions.READ, SecurityResources.ROLE_SCOPE,Domains.APP_DOMAIN_TYPE);
			// do business logic..
			List<RoleScope> listOfRoleScopes = DomainScopeDataLogic.searchRoleScopes(em, request, limitingAppDomains);
			
			SearchScopeResponse sar = new SearchScopeResponse(RequestStatusInformation.SUCCESS);
			
			if (listOfRoleScopes != null && listOfRoleScopes.isEmpty()==false)
			{
				List<com.v2solve.app.security.securitymodel.Scope> ll = new ArrayList<>();
				
				for (RoleScope resource : listOfRoleScopes) 
				{
					String appIdentifier = resource.getApplication()!=null?resource.getApplication().getAppIdentifier():null;
					com.v2solve.app.security.securitymodel.Scope newRoleScope = new com.v2solve.app.security.securitymodel.Scope(resource.getName(),resource.getScopeType().getName(),resource.getScopeValue(),resource.getDescription(),appIdentifier);
					ll.add(newRoleScope);
				}
				
				sar.setScopes(ll);
			}
			
			tw.success();
			return sar;
		}
		catch (Throwable e)
		{
			log.error(StringUtils.traceString(e));
			return new SearchScopeResponse(RequestStatusInformation.failure(e.getMessage()));
		}
		finally
		{
			if (tw != null)
				tw.commit();
			if (em != null)
				em.close();
		}
	}


	@Override
	public DeleteScopeResponse implementRequest(DeleteScopeRequest request) 
	{
		EntityManager em = null;
		TransactionWrapper tw = null;
		
		try
		{
			String action   = SecurityActions.DELETE;
			String resource = SecurityResources.ROLE_SCOPE; 
			String identifier = "name";
			String idValue = request.getName();
			
			em = getEm();
			tw = new TransactionWrapper(em);
			AppSecurityContext asc = SdkUtils.getClientSecurityContextForRequest(em,request);

			RoleScope resourceObj = DatalogicUtils.findObject(em, RoleScope.class, identifier, idValue);
			
			// Lets check to see if it is an application identifier..
			String appIdentifier = resourceObj.getApplication()==null?null:resourceObj.getApplication().getAppIdentifier();
			
			if (!StringUtils.isNullOrZeroLength(appIdentifier))
			{
				// Lets check to see if the person has  a right to delete a client for this app...
				asc.hasPermissionThrowException(action,resource, Domains.appDomain(appIdentifier));
			}
			else
			{
				// Lets check at a global level..
				asc.hasPermissionThrowException(action, resource);
			}
			
			RoleScope deletedObject = resourceObj;
			
			// Lets capture the deletedObject String because once deleted we will not have the data to change log.
			String deletedObjectStr = deletedObject==null?"":new ObjectMapper().writeValueAsString(deletedObject);
			
			DomainScopeDataLogic.deleteRoleScope(em,request);
			
			ChangeLogDataLogic.createChangeLog(em, SecurityActions.DELETE, resource, null, deletedObject.getName(), null, asc.getClient().getClientIdentifier(), null, deletedObjectStr, null);
			
			tw.success();
			return new DeleteScopeResponse(RequestStatusInformation.success(RECORD_DELETED));
		}
		catch (Throwable e)
		{
			log.error(StringUtils.traceString(e));
			return new DeleteScopeResponse(RequestStatusInformation.failure(e.getMessage()));
		}
		finally
		{
			if (tw != null)
				tw.commit ();
			if (em != null)
				em.close();
		}
	}


	@Override
	public CreateClientGroupRoleResponse implementRequest(CreateClientGroupRoleRequest request) 
	{
		EntityManager em = null;
		TransactionWrapper tw = null;
		
		try
		{
			String action   = SecurityActions.CREATE;
			String resource = SecurityResources.GROUP_ROLE_MEMBERSHIP;
			
			em = getEm();
			tw = new TransactionWrapper(em);
			AppSecurityContext asc = SdkUtils.getClientSecurityContextForRequest(em,request);
			
			// Lets check to see if an application has been specified.
			String appIdentifier = request.getAppIdentifier();
			
			if (!StringUtils.isNullOrZeroLength(appIdentifier))
			{
				// Lets check to see if the person has  a right to create a ACTION for this app...
				asc.hasPermissionThrowException(action, resource, Domains.appDomain(appIdentifier));
			}
			else
			{
				// Lets check at a global level..
				asc.hasPermissionThrowException(action, resource);
			}
			
			// Lets check scope now..
			Scope ownRoleScope   = Scopes.clientGroupRoleRoleMembershipScope(Scopes.CLIENT_SCOPE_OWN);
			Scope allRoleScope   = Scopes.clientGroupRoleRoleMembershipScope(Scopes.CLIENT_SCOPE_ALL);
			Scope ownGroupScope  = Scopes.clientGroupRoleGroupMembershipScope(Scopes.CLIENT_SCOPE_OWN);
			Scope allGroupScope  = Scopes.clientGroupRoleGroupMembershipScope(Scopes.CLIENT_SCOPE_ALL);
					
			boolean allRoles = asc.hasPermissionInScope(action, resource, Domains.appDomain(appIdentifier), allRoleScope);
			boolean ownRoles = asc.hasPermissionInScope(action, resource, Domains.appDomain(appIdentifier), ownRoleScope);
			boolean allGroups = asc.hasPermissionInScope(action, resource, Domains.appDomain(appIdentifier), allGroupScope);
			boolean ownGroups = asc.hasPermissionInScope(action, resource, Domains.appDomain(appIdentifier), ownGroupScope);
			
			
			if (allRoles == false)
			{
				if (ownRoles == false)
				{
					throw new PermissionException("Not enough scope privileges on roles to perform this action");
				}
				
				// Lets check to see if the Role name are in their own.
				String roleName = request.getRoleName();
				if (!asc.hasRole(roleName))
				{
					throw new PermissionException("Not enough scope on role: "+roleName+" role to perform this action:");
				}
			}
			
			if (allGroups == false)
			{
				if (ownGroups == false)
				{
					throw new PermissionException("Not enough scope privileges on groups to perform this action");
				}
				
				// Lets check to see if the Role name are in their own.
				String groupName = request.getGroupName();
				if (!asc.hasGroup(groupName))
				{
					throw new PermissionException("Not enough scope on role: "+groupName+" group to perform this action:");
				}
			}
			
			ClientGroupRole newObject = RelationDataLogic.createClientGroupRole(em,request);
			String changeTitle = newObject.getClientRole().getName() + " role assigned to group: " + newObject.getClientGroup().getName();
			ChangeLogDataLogic.createChangeLog(em, SecurityActions.CREATE, resource, changeTitle, ""+newObject.getId(), null, asc.getClient().getClientIdentifier(), null, newObject, null);
			tw.success();
			return new CreateClientGroupRoleResponse(RequestStatusInformation.success(RECORD_CREATED));
		}
		catch (Throwable e)
		{
			log.error(StringUtils.traceString(e));
			return new CreateClientGroupRoleResponse(RequestStatusInformation.failure(e.getMessage()));
		}
		finally
		{
			if (tw != null)
				tw.commit();
			
			if (em != null)
				em.close();
		}
	}


	@Override
	public DeleteClientGroupRoleResponse implementRequest(DeleteClientGroupRoleRequest request) 
	{
		EntityManager em = null;
		TransactionWrapper tw = null;
		
		try
		{
			String action   = SecurityActions.DELETE;
			String resource = SecurityResources.GROUP_ROLE_MEMBERSHIP;
			
			em = getEm();
			tw = new TransactionWrapper(em);
			AppSecurityContext asc = SdkUtils.getClientSecurityContextForRequest(em,request);
			
			// Lets check at a global level..
			asc.hasPermissionThrowException(action, resource);
			
			String key = request.getKey();
			
			if (StringUtils.isNullOrZeroLength(key))
			{
				throw new DataLogicValidationException("Unique key for record not provided.");
			}
			
			Integer id= Integer.decode(key);
			// Lets get the object.
			ClientGroupRole cgr = JPAUtils.findByPrimaryKey(em, ClientGroupRole.class, id);
			if (cgr == null)
				throw new DataLogicValidationException("Record not found: " + key);
			
			// Lets check to see if an application has been specified.
			String appIdentifier = cgr.getApplication() == null?null:cgr.getApplication().getAppIdentifier();
			
			if (!StringUtils.isNullOrZeroLength(appIdentifier))
			{
				// Lets check to see if the person has  a right to create a ACTION for this app...
				asc.hasPermissionThrowException(action, resource, Domains.appDomain(appIdentifier));
			}
			
			// Lets check scope now..
			Scope ownRoleScope   = Scopes.clientGroupRoleRoleMembershipScope(Scopes.CLIENT_SCOPE_OWN);
			Scope allRoleScope   = Scopes.clientGroupRoleRoleMembershipScope(Scopes.CLIENT_SCOPE_ALL);
			Scope ownGroupScope  = Scopes.clientGroupRoleGroupMembershipScope(Scopes.CLIENT_SCOPE_OWN);
			Scope allGroupScope  = Scopes.clientGroupRoleGroupMembershipScope(Scopes.CLIENT_SCOPE_ALL);
					
			boolean allRoles = asc.hasPermissionInScope(action, resource, Domains.appDomain(appIdentifier), allRoleScope);
			boolean ownRoles = asc.hasPermissionInScope(action, resource, Domains.appDomain(appIdentifier), ownRoleScope);
			boolean allGroups = asc.hasPermissionInScope(action, resource, Domains.appDomain(appIdentifier), allGroupScope);
			boolean ownGroups = asc.hasPermissionInScope(action, resource, Domains.appDomain(appIdentifier), ownGroupScope);
			
			
			if (allRoles == false)
			{
				if (ownRoles == false)
				{
					throw new PermissionException("Not enough scope privileges on roles to perform this action");
				}
				
				// Lets check to see if the Role name are in their own.
				String roleName = cgr.getClientRole().getName();
				if (!asc.hasRole(roleName))
				{
					throw new PermissionException("Not enough scope on role: "+roleName+" role to perform this action:");
				}
			}
			
			if (allGroups == false)
			{
				if (ownGroups == false)
				{
					throw new PermissionException("Not enough scope privileges on groups to perform this action");
				}
				
				// Lets check to see if the Role name are in their own.
				String groupName = cgr.getClientGroup().getName();
				if (!asc.hasGroup(groupName))
				{
					throw new PermissionException("Not enough scope on role: "+groupName+" group to perform this action:");
				}
			}
			
			ClientGroupRole deletedObject = RelationDataLogic.deleteClientGroupRole(em, request);
			
			{
				String changeTitle = "Role: " + deletedObject.getClientRole().getName() + " removed from group: " + deletedObject.getClientGroup().getName();
				ChangeLogDataLogic.createChangeLog(em, SecurityActions.DELETE, resource, changeTitle, ""+deletedObject.getId(), null, asc.getClient().getClientIdentifier(), null, null, null);
			}
			
			tw.success();
			return new DeleteClientGroupRoleResponse(RequestStatusInformation.success(RECORD_DELETED));
		}
		catch (Throwable e)
		{
			log.error(StringUtils.traceString(e));
			return new DeleteClientGroupRoleResponse(RequestStatusInformation.failure(e.getMessage()));
		}
		finally
		{
			if (tw != null)
				tw.commit();
			
			if (em != null)
				em.close();
		}
	}


	@Override
	public SearchClientGroupRoleResponse implementRequest(SearchClientGroupRoleRequest request) 
	{
		EntityManager em = null;
		TransactionWrapper tw = null;
		
		try
		{
			String action   = SecurityActions.READ;
			String resource = SecurityResources.GROUP_ROLE_MEMBERSHIP;
			
			em = getEm();
			tw = new TransactionWrapper(em);
			AppSecurityContext asc = SdkUtils.getClientSecurityContextForRequest(em,request);
			
			// Lets check at a global level..
			asc.hasPermissionThrowException(action, resource);
			
			// Lets see over which domain the person has read rights..
			List<String> limitingAppDomains = asc.hasPermissionReturnLimitingDomains(action, resource,Domains.APP_DOMAIN_TYPE);
			
			List<ClientGroupRole> listOfCgrs = RelationDataLogic.searchClientGroupRoles(em, request,limitingAppDomains);
			
			// Lets check scope now..
			Scope ownRoleScope   = Scopes.clientGroupRoleRoleMembershipScope(Scopes.CLIENT_SCOPE_OWN);
			Scope allRoleScope   = Scopes.clientGroupRoleRoleMembershipScope(Scopes.CLIENT_SCOPE_ALL);
			Scope ownGroupScope  = Scopes.clientGroupRoleGroupMembershipScope(Scopes.CLIENT_SCOPE_OWN);
			Scope allGroupScope  = Scopes.clientGroupRoleGroupMembershipScope(Scopes.CLIENT_SCOPE_ALL);
					
			boolean allRoles = asc.hasPermissionInScope(action, resource, null, allRoleScope);
			boolean ownRoles = asc.hasPermissionInScope(action, resource, null, ownRoleScope);
			boolean allGroups = asc.hasPermissionInScope(action, resource, null, allGroupScope);
			boolean ownGroups = asc.hasPermissionInScope(action, resource, null, ownGroupScope);
			
			List<com.v2solve.app.security.securitymodel.ClientGroupRole> newClientGroupRoles = new ArrayList<>();
			
			for (ClientGroupRole cgr: listOfCgrs)
			{
				String roleName  = cgr.getClientRole().getName();
				String groupName = cgr.getClientGroup().getName();
				String domainName = cgr.getResourceDomain()==null?null:cgr.getResourceDomain().getName();
				String scopeName  = cgr.getRoleScope()==null?null:cgr.getRoleScope().getName();
				String appIdentifier = cgr.getApplication()==null?null:cgr.getApplication().getAppIdentifier();
				boolean propogate = cgr.getPropogate ();
				com.v2solve.app.security.securitymodel.ClientGroupRole newCgr = new com.v2solve.app.security.securitymodel.ClientGroupRole(""+cgr.getId(), groupName, roleName, domainName, scopeName, appIdentifier,propogate);
				// Lets check scope before adding this in the list..
				boolean toAdd = true;
				if (!allGroups && !ownGroups) 
					toAdd=false;
				if (!allRoles && !ownRoles)
					toAdd=false;
				if (toAdd)
				{
					if (!allGroups && ownGroups)
						if (!asc.hasGroup(groupName))
							toAdd=false;
					if (!allRoles && ownRoles)
						if (!asc.hasRole(roleName))
							toAdd=false;
				}
				if (toAdd)
					newClientGroupRoles.add(newCgr);
			}
			
			tw.success();
			SearchClientGroupRoleResponse sar = new  SearchClientGroupRoleResponse(RequestStatusInformation.SUCCESS);
			sar.setClientGroupRoles(newClientGroupRoles);
			return sar;
		}
		catch (Throwable e)
		{
			log.error(StringUtils.traceString(e));
			return new SearchClientGroupRoleResponse(RequestStatusInformation.failure(e.getMessage()));
		}
		finally
		{
			if (tw != null)
				tw.commit();
			
			if (em != null)
				em.close();
		}
	}


	@Override
	public CreateClientRolePermissionResponse implementRequest(CreateClientRolePermissionRequest request) 
	{
		EntityManager em = null;
		TransactionWrapper tw = null;
		
		try
		{
			String action   = SecurityActions.CREATE;
			String resource = SecurityResources.PERMISSION_ROLE_MEMBERSHIP;
			
			em = getEm();
			tw = new TransactionWrapper(em);
			AppSecurityContext asc = SdkUtils.getClientSecurityContextForRequest(em,request);
			
			// Lets check to see if an application has been specified.
			String appIdentifier = request.getAppIdentifier();
			
			if (!StringUtils.isNullOrZeroLength(appIdentifier))
			{
				// Lets check to see if the person has  a right to create a ACTION for this app...
				asc.hasPermissionThrowException(action, resource, Domains.appDomain(appIdentifier));
			}
			else
			{
				// Lets check at a global level..
				asc.hasPermissionThrowException(action, resource);
			}
			
			// Lets check scope now..
			Scope ownRoleScope   = Scopes.clientGroupRoleRoleMembershipScope(Scopes.CLIENT_SCOPE_OWN);
			Scope allRoleScope   = Scopes.clientGroupRoleRoleMembershipScope(Scopes.CLIENT_SCOPE_ALL);
					
			boolean allRoles = asc.hasPermissionInScope(action, resource, Domains.appDomain(appIdentifier), allRoleScope);
			boolean ownRoles = asc.hasPermissionInScope(action, resource, Domains.appDomain(appIdentifier), ownRoleScope);
			
			if (allRoles == false)
			{
				if (ownRoles == false)
				{
					throw new PermissionException("Not enough scope privileges on roles to perform this action");
				}
				
				// Lets check to see if the Role name are in their own.
				String roleName = request.getRoleName();
				if (!asc.hasRole(roleName))
				{
					throw new PermissionException("Not enough scope on role: "+roleName+" role to perform this action:");
				}
			}
			
			ClientRolePermission newObject = RelationDataLogic.createClientRolePermission(em,request);
			String changeTitle = newObject.getValue() + " " + newObject.getPermission().getName() + " granted to Role: " + newObject.getClientRole().getName();
			ChangeLogDataLogic.createChangeLog(em, SecurityActions.CREATE, resource, changeTitle, ""+newObject.getId(), null, asc.getClient().getClientIdentifier(), null, newObject, null);
			tw.success();
			return new CreateClientRolePermissionResponse(RequestStatusInformation.success(RECORD_CREATED));
		}
		catch (Throwable e)
		{
			log.error(StringUtils.traceString(e));
			return new CreateClientRolePermissionResponse(RequestStatusInformation.failure(e.getMessage()));
		}
		finally
		{
			if (tw != null)
				tw.commit();
			
			if (em != null)
				em.close();
		}
	}


	@Override
	public DeleteClientRolePermissionResponse implementRequest(DeleteClientRolePermissionRequest request) 
	{
		EntityManager em = null;
		TransactionWrapper tw = null;
		
		try
		{
			String action   = SecurityActions.DELETE;
			String resource = SecurityResources.PERMISSION_ROLE_MEMBERSHIP;
			
			em = getEm();
			tw = new TransactionWrapper(em);
			AppSecurityContext asc = SdkUtils.getClientSecurityContextForRequest(em,request);
			
			// Lets check at a global level..
			asc.hasPermissionThrowException(action, resource);
			
			String key = request.getKey();
			
			if (StringUtils.isNullOrZeroLength(key))
			{
				throw new DataLogicValidationException("Unique key for record not provided.");
			}
			
			Integer id= Integer.decode(key);
			// Lets get the object.
			ClientRolePermission crp = JPAUtils.findByPrimaryKey(em, ClientRolePermission.class, id);
			if (crp == null)
				throw new DataLogicValidationException("Record not found: " + key);
			
			// Lets check to see if an application has been specified.
			String appIdentifier = crp.getApplication() == null?null:crp.getApplication().getAppIdentifier();
			
			if (!StringUtils.isNullOrZeroLength(appIdentifier))
			{
				// Lets check to see if the person has  a right to create a ACTION for this app...
				asc.hasPermissionThrowException(action, resource, Domains.appDomain(appIdentifier));
			}
			
			// Lets check scope now..
			Scope ownRoleScope   = Scopes.clientGroupRoleRoleMembershipScope(Scopes.CLIENT_SCOPE_OWN);
			Scope allRoleScope   = Scopes.clientGroupRoleRoleMembershipScope(Scopes.CLIENT_SCOPE_ALL);
					
			boolean allRoles = asc.hasPermissionInScope(action, resource, Domains.appDomain(appIdentifier), allRoleScope);
			boolean ownRoles = asc.hasPermissionInScope(action, resource, Domains.appDomain(appIdentifier), ownRoleScope);
			
			
			if (allRoles == false)
			{
				if (ownRoles == false)
				{
					throw new PermissionException("Not enough scope privileges on roles to perform this action");
				}
				
				// Lets check to see if the Role name are in their own.
				String roleName = crp.getClientRole().getName();
				if (!asc.hasRole(roleName))
				{
					throw new PermissionException("Not enough scope on role: "+roleName+" role to perform this action:");
				}
			}
			
			ClientRolePermission deletedObject = RelationDataLogic.deleteClientRolePermission(em, request);
			
			{
				String changeTitle = deletedObject.getValue() +  " Permission: " + deletedObject.getPermission().getName() + " removed from role: " + deletedObject.getClientRole().getName();
				ChangeLogDataLogic.createChangeLog(em, SecurityActions.DELETE, resource, changeTitle, ""+deletedObject.getId(), null, asc.getClient().getClientIdentifier(), null, null, null);
			}
			
			tw.success();
			return new DeleteClientRolePermissionResponse(RequestStatusInformation.success(RECORD_DELETED));
		}
		catch (Throwable e)
		{
			log.error(StringUtils.traceString(e));
			return new DeleteClientRolePermissionResponse(RequestStatusInformation.failure(e.getMessage()));
		}
		finally
		{
			if (tw != null)
				tw.commit();
			
			if (em != null)
				em.close();
		}
	}


	@Override
	public SearchClientRolePermissionResponse implementRequest(SearchClientRolePermissionRequest request) 
	{
		EntityManager em = null;
		TransactionWrapper tw = null;
		
		try
		{
			String action   = SecurityActions.READ;
			String resource = SecurityResources.PERMISSION_ROLE_MEMBERSHIP;
			
			em = getEm();
			tw = new TransactionWrapper(em);
			AppSecurityContext asc = SdkUtils.getClientSecurityContextForRequest(em,request);
			
			// Lets check at a global level..
			asc.hasPermissionThrowException(action, resource);
			
			// Lets see over which domain the person has read rights..
			List<String> limitingAppDomains = asc.hasPermissionReturnLimitingDomains(action, resource,Domains.APP_DOMAIN_TYPE);
			
			List<ClientRolePermission> listOfCrps = RelationDataLogic.searchClientRolePermissions(em, request,limitingAppDomains);
			
			// Lets check scope now..
			Scope ownRoleScope   = Scopes.clientGroupRoleRoleMembershipScope(Scopes.CLIENT_SCOPE_OWN);
			Scope allRoleScope   = Scopes.clientGroupRoleRoleMembershipScope(Scopes.CLIENT_SCOPE_ALL);
					
			boolean allRoles = asc.hasPermissionInScope(action, resource, null, allRoleScope);
			boolean ownRoles = asc.hasPermissionInScope(action, resource, null, ownRoleScope);
			
			List<com.v2solve.app.security.securitymodel.ClientRolePermission> newClientRolePermissions = new ArrayList<>();
			
			for (ClientRolePermission crp: listOfCrps)
			{
				String roleName        = crp.getClientRole().getName();
				String permissionName  = crp.getPermission().getName();
				String permissionValue = crp.getValue();
				String appIdentifier = crp.getApplication()==null?null:crp.getApplication().getAppIdentifier();
				com.v2solve.app.security.securitymodel.ClientRolePermission newCrp = new com.v2solve.app.security.securitymodel.ClientRolePermission(""+crp.getId(), roleName, permissionName, permissionValue, appIdentifier);
				// Lets check scope before adding this in the list..
				boolean toAdd = true;
				if (!allRoles && !ownRoles)
					toAdd=false;
				if (toAdd)
				{
					if (!allRoles && ownRoles)
						if (!asc.hasRole(roleName))
							toAdd=false;
				}
				if (toAdd)
					newClientRolePermissions.add(newCrp);
			}
			
			tw.success();
			SearchClientRolePermissionResponse sar = new  SearchClientRolePermissionResponse(RequestStatusInformation.SUCCESS);
			sar.setClientRolePermissions(newClientRolePermissions);
			return sar;
		}
		catch (Throwable e)
		{
			log.error(StringUtils.traceString(e));
			return new SearchClientRolePermissionResponse(RequestStatusInformation.failure(e.getMessage()));
		}
		finally
		{
			if (tw != null)
				tw.commit();
			
			if (em != null)
				em.close();
		}
	}


	@Override
	public SearchChangeLogResponse implementRequest(SearchChangeLogRequest request) 
	{
		EntityManager em = null;
		TransactionWrapper tw = null;
		
		try
		{
			String action   = SecurityActions.READ;
			String resource = SecurityResources.CHANGE_LOG; 
			
			em = getEm();
			tw = new TransactionWrapper(em);
			AppSecurityContext asc = SdkUtils.getClientSecurityContextForRequest(em,request);
			
			// Lets check at a global level..
			asc.hasPermissionThrowException(action, resource);
			
			// Ok, now lets figure out if there are any limiting scopes..
			List<Scope> scopes = asc.hasPermissionReturnScopes(action, resource, null);
			
			HashMap<String, List<String>> limitData = null;
			
			if (scopes != null && scopes.isEmpty()==false)
			{
				for (Scope scp: scopes)
				{
					if (scp.getScopeType().equals(Scopes.VALUES_SCOPE_TYPE))
					{
						limitData = scp.getLimitDataOnFields(limitData);
					}
				}
			}

			List<ChangeLog> listOfChanges = ChangeLogDataLogic.searchChangeLog(em, request, limitData);
			tw.success();
			
			List<com.v2solve.app.security.securitymodel.ChangeLog> newChangeLogList = new ArrayList<>();
			
			for (ChangeLog cl: listOfChanges)
			{
				com.v2solve.app.security.securitymodel.ChangeLog CL = new com.v2solve.app.security.securitymodel.ChangeLog();
				ReflectUtils.copy(cl, CL);
				newChangeLogList.add(CL);
			}
			
			SearchChangeLogResponse sar = new  SearchChangeLogResponse(RequestStatusInformation.SUCCESS);
			
			sar.setChanges(newChangeLogList);
			
			return sar;
		}
		catch (Throwable e)
		{
			log.error(StringUtils.traceString(e));
			return new SearchChangeLogResponse(RequestStatusInformation.failure(e.getMessage()));
		}
		finally
		{
			if (tw != null)
				tw.commit();
			if (em != null)
				em.close();
		}
	}
}