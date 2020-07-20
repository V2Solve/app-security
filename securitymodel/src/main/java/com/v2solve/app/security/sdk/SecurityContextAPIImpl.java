package com.v2solve.app.security.sdk;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;

import com.v2solve.app.security.sdk.application.GetSecurityContextRequest;
import com.v2solve.app.security.sdk.application.GetSecurityContextResponse;
import com.v2solve.app.security.sdk.application.SecurityAPIRequest;
import com.v2solve.app.security.sdk.application.SecurityAPIResponse;
import com.v2solve.app.security.securitymodel.ClientSecurityContext;
import com.v2solve.app.security.securitymodel.Domain;
import com.v2solve.app.security.securitymodel.Scope;

import com.v2solve.app.security.utility.StringUtils;


import lombok.extern.slf4j.Slf4j;


@Slf4j
public class SecurityContextAPIImpl implements SecurityContextAPI 
{
	EntityManagerFactory emf = null;
	
	public SecurityContextAPIImpl(EntityManagerFactory emf) 
	{
		// TODO Auto-generated constructor stub
		this.emf = emf;
	}
	
	private EntityManager getEm ()
	{
		return emf.createEntityManager();
	}
	
	private Scope verifyScope (Scope sc)
	{
		if (sc == null)
			return null;
		
		if (StringUtils.isNullOrZeroLength(sc.getScopeName()))
			return null;
		
		String scopeType = sc.getScopeType();
		String scopeValue = sc.getScopeValue();
		
		if (StringUtils.isNullOrZeroLength(scopeType) || StringUtils.isNullOrZeroLength(scopeValue))
			throw new ApiValidationException("Scope type and Scope value must be specified in scope");
		
		return sc;
	}
	
	private Domain verifyResourceDomain (Domain d)
	{
		if (d == null)
			return null;
		
		if (StringUtils.isNullOrZeroLength(d.getName()))
			return null;
		
		String domainType = d.getDomainType();
		
		if (StringUtils.isNullOrZeroLength(domainType))
			throw new ApiValidationException("Resource Domain type must be specified in resource domain");
		
		return d;
	}

	
	@Override
	public SecurityAPIResponse hasPermissions(SecurityAPIRequest request) 
	{
		EntityManager em = getEm();
		
		try
		{
			ClientSecurityContext asc = SdkUtils.getClientSecurityContextForRequest(em,request);
			String action = request.getAction();
			
			String [] resources = request.getResources();
			
			Domain rd = verifyResourceDomain(request.getResourceDomain());
			// Scope scope = verifyScope(request.getScope());
			
			if (StringUtils.isNullOrZeroLength(action) || resources == null || resources.length <= 0)
				throw new ApiValidationException("Action and/or Resources must be specified.");
			
			Boolean [] results = new Boolean [resources.length];
			
			int count = 0;
			for (String resource: resources)
			{
				boolean b = false;
				if (rd == null)
				b = asc.hasPermission(action, resource);
				else
				b = asc.hasPermission(action, resource, rd);
				results[count] = b;
				count++;
			}
			
			SecurityAPIResponse apr = new SecurityAPIResponse(RequestStatusInformation.SUCCESS);
			apr.setResults(results);
			return apr;
		}
		catch (Throwable e)
		{
			log.error(StringUtils.traceString(e));
			return new SecurityAPIResponse(RequestStatusInformation.failure(e.getMessage()));
		}
		finally
		{
			if (em != null)
				em.close();
		}

	}
	
	@Override
	public SecurityAPIResponse hasPermission(SecurityAPIRequest request) 
	{
		EntityManager em = getEm();
		
		try
		{
			ClientSecurityContext asc = SdkUtils.getClientSecurityContextForRequest(em,request);
			String action = request.getAction();
			String resource = request.getResource();
			Domain rd = verifyResourceDomain(request.getResourceDomain());
			// Scope scope = verifyScope(request.getScope());
			
			if (StringUtils.isNullOrZeroLength(action) || StringUtils.isNullOrZeroLength(resource))
				throw new ApiValidationException("Action and/or Resource must be specified.");
			
			boolean b = false;
			
			if (rd == null)
			b = asc.hasPermission(action, resource);
			else
			b = asc.hasPermission(action, resource, rd);
			
			SecurityAPIResponse apr = new SecurityAPIResponse(RequestStatusInformation.SUCCESS);
			apr.setResult(b);
			return apr;
		}
		catch (Throwable e)
		{
			log.error(StringUtils.traceString(e));
			return new SecurityAPIResponse(RequestStatusInformation.failure(e.getMessage()));
		}
		finally
		{
			if (em != null)
				em.close();
		}

	}

	@Override
	public SecurityAPIResponse hasPermissionReturnRoles(SecurityAPIRequest request) 
	{
		EntityManager em = getEm();
		
		try
		{
			ClientSecurityContext asc = SdkUtils.getClientSecurityContextForRequest(em,request);
			String action = request.getAction();
			String resource = request.getResource();
			Domain rd = verifyResourceDomain(request.getResourceDomain());
			// Scope scope = verifyScope(request.getScope());
			
			if (StringUtils.isNullOrZeroLength(action) || StringUtils.isNullOrZeroLength(resource))
				throw new ApiValidationException("Action and/or Resource must be specified.");
			
			List<String> roles = asc.hasPermissionReturnRoles(action, resource, rd);
			
			SecurityAPIResponse apr = new SecurityAPIResponse(RequestStatusInformation.SUCCESS);
			apr.setResult(true);
			apr.setRoles(roles);
			return apr;
		}
		catch (Throwable e)
		{
			log.error(StringUtils.traceString(e));
			return new SecurityAPIResponse(RequestStatusInformation.failure(e.getMessage()));
		}
		finally
		{
			if (em != null)
				em.close();
		}

	}

	@Override
	public SecurityAPIResponse hasPermissionReturnGroups(SecurityAPIRequest request) 
	{
		EntityManager em = getEm();
		
		try
		{
			ClientSecurityContext asc = SdkUtils.getClientSecurityContextForRequest(em,request);
			String action = request.getAction();
			String resource = request.getResource();
			Domain rd = verifyResourceDomain(request.getResourceDomain());
			// Scope scope = verifyScope(request.getScope());
			
			if (StringUtils.isNullOrZeroLength(action) || StringUtils.isNullOrZeroLength(resource))
				throw new ApiValidationException("Action and/or Resource must be specified.");
			
			List<String> groups = asc.hasPermissionReturnGroups(action, resource, rd);
			
			SecurityAPIResponse apr = new SecurityAPIResponse(RequestStatusInformation.SUCCESS);
			apr.setResult(true);
			apr.setGroups(groups);
			return apr;
		}
		catch (Throwable e)
		{
			log.error(StringUtils.traceString(e));
			return new SecurityAPIResponse(RequestStatusInformation.failure(e.getMessage()));
		}
		finally
		{
			if (em != null)
				em.close();
		}

	}

	@Override
	public SecurityAPIResponse hasPermissionReturnScopes(SecurityAPIRequest request) 
	{
		EntityManager em = getEm();
		
		try
		{
			ClientSecurityContext asc = SdkUtils.getClientSecurityContextForRequest(em,request);
			String action = request.getAction();
			String resource = request.getResource();
			Domain rd = verifyResourceDomain(request.getResourceDomain());
			// Scope scope = verifyScope(request.getScope());
			
			if (StringUtils.isNullOrZeroLength(action) || StringUtils.isNullOrZeroLength(resource))
				throw new ApiValidationException("Action and/or Resource must be specified.");
			
			List<Scope> scopes = asc.hasPermissionReturnScopes(action, resource, rd);
			
			SecurityAPIResponse apr = new SecurityAPIResponse(RequestStatusInformation.SUCCESS);
			apr.setResult(true);
			apr.setScopes(scopes);
			return apr;
		}
		catch (Throwable e)
		{
			log.error(StringUtils.traceString(e));
			return new SecurityAPIResponse(RequestStatusInformation.failure(e.getMessage()));
		}
		finally
		{
			if (em != null)
				em.close();
		}

	}

	@Override
	public SecurityAPIResponse hasPermissionInScope(SecurityAPIRequest request) 
	{
		EntityManager em = getEm();
		
		try
		{
			ClientSecurityContext asc = SdkUtils.getClientSecurityContextForRequest(em,request);
			String action = request.getAction();
			String resource = request.getResource();
			Domain rd = verifyResourceDomain(request.getResourceDomain());
			Scope scope = verifyScope(request.getScope());
			
			if (StringUtils.isNullOrZeroLength(action) || StringUtils.isNullOrZeroLength(resource))
				throw new ApiValidationException("Action and/or Resource must be specified.");
			
			if (scope == null)
				throw new ApiValidationException("Scope information must be provided.");
			
			boolean b = false;
			if (rd == null)
			b = asc.hasPermissionInScope(action, resource, scope);
			else
			b = asc.hasPermissionInScope(action, resource, rd, scope);
			
			SecurityAPIResponse apr = new SecurityAPIResponse(RequestStatusInformation.SUCCESS);
			apr.setResult(b);
			return apr;
		}
		catch (Throwable e)
		{
			log.error(StringUtils.traceString(e));
			return new SecurityAPIResponse(RequestStatusInformation.failure(e.getMessage()));
		}
		finally
		{
			if (em != null)
				em.close();
		}

	}

	@Override
	public SecurityAPIResponse hasRole(SecurityAPIRequest request) 
	{
		EntityManager em = getEm();
		
		try
		{
			ClientSecurityContext asc = SdkUtils.getClientSecurityContextForRequest(em,request);
			String roleName = request.getRoleName();
			
			if (StringUtils.isNullOrZeroLength(roleName))
				throw new ApiValidationException("Role name must be specified.");
			
			boolean b = false;
			b = asc.hasRole(roleName);
			
			SecurityAPIResponse apr = new SecurityAPIResponse(RequestStatusInformation.SUCCESS);
			apr.setResult(b);
			return apr;
		}
		catch (Throwable e)
		{
			log.error(StringUtils.traceString(e));
			return new SecurityAPIResponse(RequestStatusInformation.failure(e.getMessage()));
		}
		finally
		{
			if (em != null)
				em.close();
		}
	}

	@Override
	public SecurityAPIResponse hasGroup(SecurityAPIRequest request) 
	{
		EntityManager em = getEm();
		
		try
		{
			ClientSecurityContext asc = SdkUtils.getClientSecurityContextForRequest(em,request);
			String groupName = request.getGroupName();
			
			if (StringUtils.isNullOrZeroLength(groupName))
				throw new ApiValidationException("Group name must be specified.");
			
			boolean b = false;
			b = asc.hasGroup(groupName);
			
			SecurityAPIResponse apr = new SecurityAPIResponse(RequestStatusInformation.SUCCESS);
			apr.setResult(b);
			return apr;
		}
		catch (Throwable e)
		{
			log.error(StringUtils.traceString(e));
			return new SecurityAPIResponse(RequestStatusInformation.failure(e.getMessage()));
		}
		finally
		{
			if (em != null)
				em.close();
		}
	}
	
	@Override
	public GetSecurityContextResponse getSecurityContext(GetSecurityContextRequest request) 
	{
		EntityManager em = getEm();
		try
		{
			ClientSecurityContext asc = SdkUtils.getClientSecurityContextForRequest(em,request);
			GetSecurityContextResponse gscr = new GetSecurityContextResponse(RequestStatusInformation.SUCCESS);
			gscr.setClientSecurityContext(asc);
			return gscr;
		}
		catch (Throwable e)
		{
			log.error(StringUtils.traceString(e));
			return new GetSecurityContextResponse(RequestStatusInformation.failure(e.getMessage()));
		}
		finally
		{
			if (em != null)
				em.close();
		}
	}
}
