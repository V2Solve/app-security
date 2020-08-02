import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpXsrfTokenExtractor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import * as cobjs from '../client/commmodel';


@Injectable({
  providedIn: 'root'
})
export class SecMgmtApiClientService {

	apibaseurl: string;
	http: HttpClient;	
	username: string;
	password: string;
	
	constructor (httpClient: HttpClient,apibaseurl: string,username: string,password: string)
	{
		this.apibaseurl = apibaseurl;
		this.http = httpClient;
		this.username = username;
		this.password = password;
    }

	/**
	 * Returns the http options to be appended.
	 */
	getHttpHeaders (): HttpHeaders
	{
		let httpHeaders: HttpHeaders = new HttpHeaders();

		if (this.username != null && this.username.length > 0)
		{
			let authorizationHeader = "Basic " + btoa(this.username+ ":" + this.password);
			// console.log("Authorization header: " + authorizationHeader);
			httpHeaders = new HttpHeaders({"Authorization": authorizationHeader});
		}
		
		return httpHeaders;
	}

	getHttpOptions ()
	{
		let body =  "body";
		let response = "json";

		var httpOptions = {
			headers: this.getHttpHeaders()
		};

		return httpOptions;
	}


    deleteClient (request: cobjs.DeleteClientRequest): Observable<cobjs.DeleteClientResponse>
    {
		let methodUrl = this.apibaseurl + "/deleteClient";
		return this.http.post<cobjs.DeleteClientResponse>(methodUrl,request,this.getHttpOptions());
    }

    createClient (request: cobjs.CreateClientRequest ): Observable<cobjs.CreateClientResponse>
    {
		let methodUrl = this.apibaseurl + "/createClient";
		return this.http.post<cobjs.CreateClientResponse>(methodUrl,request,this.getHttpOptions ());
    }

     createApplication (request: cobjs.CreateApplicationRequest): Observable<cobjs.CreateApplicationResponse>
     {
		let methodUrl = this.apibaseurl + "/createApplication";
		return this.http.post<cobjs.CreateApplicationResponse>(methodUrl,request,this.getHttpOptions ());
     }

    deleteApplication (request: cobjs.DeleteApplicationRequest): Observable<cobjs.DeleteApplicationResponse>
    {
		let methodUrl = this.apibaseurl + "/deleteApplication";
		return this.http.post<cobjs.DeleteApplicationResponse>(methodUrl,request,this.getHttpOptions ());

    }

    createAction (request: cobjs.CreateActionRequest): Observable<cobjs.CreateActionResponse>
    {
		let methodUrl = this.apibaseurl + "/createAction";
		return this.http.post<cobjs.CreateActionResponse>(methodUrl,request,this.getHttpOptions ());

    }

    deleteAction (request: cobjs.DeleteActionRequest): Observable<cobjs.DeleteActionResponse>
    {
		let methodUrl = this.apibaseurl + "/deleteAction";
		return this.http.post<cobjs.DeleteActionResponse>(methodUrl,request,this.getHttpOptions ());
    }

    createResource (request: cobjs.CreateResourceRequest): Observable<cobjs.CreateResourceResponse>
    {
		let methodUrl = this.apibaseurl + "/createResource";
		return this.http.post<cobjs.CreateResourceResponse>(methodUrl,request,this.getHttpOptions ());
    }

    deleteResource (request: cobjs.DeleteResourceRequest): Observable<cobjs.DeleteResourceResponse>
    {
		let methodUrl = this.apibaseurl + "/deleteResource";
		return this.http.post<cobjs.DeleteResourceResponse>(methodUrl,request,this.getHttpOptions ());
    }

    createPermission (request: cobjs.CreatePermissionRequest): Observable<cobjs.CreatePermissionResponse>
    {
		let methodUrl = this.apibaseurl + "/createPermission";
		return this.http.post<cobjs.CreatePermissionResponse>(methodUrl,request,this.getHttpOptions ());
    }

    deletePermission (request: cobjs.DeletePermissionRequest): Observable<cobjs.DeletePermissionResponse>
    {
		let methodUrl = this.apibaseurl + "/deletePermission";
		return this.http.post<cobjs.DeletePermissionResponse>(methodUrl,request,this.getHttpOptions ());
    }

    createClientGroup (request: cobjs.CreateClientGroupRequest): Observable<cobjs.CreateClientGroupResponse>
    {
		let methodUrl = this.apibaseurl + "/createClientGroup";
		return this.http.post<cobjs.CreateClientGroupResponse>(methodUrl,request,this.getHttpOptions ());
    }

    deleteClientGroup (request: cobjs.DeleteClientGroupRequest): Observable<cobjs.DeleteClientGroupResponse>
    {
		let methodUrl = this.apibaseurl + "/deleteClientGroup";
		return this.http.post<cobjs.DeleteClientGroupResponse>(methodUrl,request,this.getHttpOptions ());
	}
	
    createClientRole (request: cobjs.CreateClientRoleRequest): Observable<cobjs.CreateClientRoleResponse>
    {
		let methodUrl = this.apibaseurl + "/createClientRole";
		return this.http.post<cobjs.CreateClientRoleResponse>(methodUrl,request,this.getHttpOptions ());
    }

    deleteClientRole (request: cobjs.DeleteClientRoleRequest): Observable<cobjs.DeleteClientRoleResponse>
    {
		let methodUrl = this.apibaseurl + "/deleteClientRole";
		return this.http.post<cobjs.DeleteClientRoleResponse>(methodUrl,request,this.getHttpOptions ());
	}
	

    createClientRolePermission (request: cobjs.CreateClientRolePermissionRequest): Observable<cobjs.CreateClientRolePermissionResponse>
    {
		let methodUrl = this.apibaseurl + "/createClientRolePermission";
		return this.http.post<cobjs.CreateClientRolePermissionResponse>(methodUrl,request,this.getHttpOptions ());

    }

    deleteClientRolePermission (request: cobjs.DeleteClientRolePermissionRequest): Observable<cobjs.DeleteClientRolePermissionResponse>
    {
		let methodUrl = this.apibaseurl + "/deleteClientRolePermission";
		return this.http.post<cobjs.DeleteClientRolePermissionResponse>(methodUrl,request,this.getHttpOptions ());
    }

    searchClientRolePermissions (request: cobjs.SearchClientRolePermissionRequest): Observable<cobjs.SearchClientRolePermissionResponse>
    {
		let methodUrl = this.apibaseurl + "/searchClientRolePermissions";
		return this.http.post<cobjs.SearchClientRolePermissionResponse>(methodUrl,request,this.getHttpOptions ());
    }


    createDomain (request: cobjs.CreateDomainRequest): Observable<cobjs.CreateDomainResponse>
    {
		let methodUrl = this.apibaseurl + "/createDomain";
		return this.http.post<cobjs.CreateDomainResponse>(methodUrl,request,this.getHttpOptions ());
	}
	
    deleteDomain (request: cobjs.DeleteDomainRequest): Observable<cobjs.DeleteDomainResponse>
    {
		let methodUrl = this.apibaseurl + "/deleteDomain";
		return this.http.post<cobjs.DeleteDomainResponse>(methodUrl,request,this.getHttpOptions ());
    }


    createDomainType (request: cobjs.CreateDomainTypeRequest): Observable<cobjs.CreateDomainTypeResponse>
    {
		let methodUrl = this.apibaseurl + "/createDomainType";
		return this.http.post<cobjs.CreateDomainTypeResponse>(methodUrl,request,this.getHttpOptions ());
	}
	
    deleteDomainType (request: cobjs.DeleteDomainTypeRequest): Observable<cobjs.DeleteDomainTypeResponse>
    {
		let methodUrl = this.apibaseurl + "/deleteDomainType";
		return this.http.post<cobjs.DeleteDomainTypeResponse>(methodUrl,request,this.getHttpOptions ());
    }

    createScopeType (request: cobjs.CreateScopeTypeRequest): Observable<cobjs.CreateScopeTypeResponse>
    {
		let methodUrl = this.apibaseurl + "/createScopeType";
		return this.http.post<cobjs.CreateScopeTypeResponse>(methodUrl,request,this.getHttpOptions ());
    }

    deleteScopeType (request: cobjs.DeleteScopeTypeRequest): Observable<cobjs.DeleteScopeTypeResponse>
    {
		let methodUrl = this.apibaseurl + "/deleteScopeType";
		return this.http.post<cobjs.DeleteScopeTypeResponse>(methodUrl,request,this.getHttpOptions ());
    }

    createScope (request: cobjs.CreateScopeRequest): Observable<cobjs.CreateScopeResponse>
    {
		let methodUrl = this.apibaseurl + "/createScope";
		return this.http.post<cobjs.CreateScopeResponse>(methodUrl,request,this.getHttpOptions ());
    }

    deleteScope (request: cobjs.DeleteScopeRequest): Observable<cobjs.DeleteScopeResponse>
    {
		let methodUrl = this.apibaseurl + "/deleteScope";
		return this.http.post<cobjs.DeleteScopeResponse>(methodUrl,request,this.getHttpOptions ());
    }


    createGroupMembership (request: cobjs.CreateGroupMembershipRequest): Observable<cobjs.CreateGroupMembershipResponse>
    {
		let methodUrl = this.apibaseurl + "/createGroupMembership";
		return this.http.post<cobjs.CreateGroupMembershipResponse>(methodUrl,request,this.getHttpOptions ());
    }

    deleteGroupMembership (request: cobjs.DeleteGroupMembershipRequest): Observable<cobjs.DeleteGroupMembershipResponse>
    {
        let methodUrl = this.apibaseurl + "/deleteGroupMembership";
		return this.http.post<cobjs.DeleteGroupMembershipResponse>(methodUrl,request,this.getHttpOptions ());
	}
	

	searchApplications (request: cobjs.SearchApplicationsRequest): Observable<cobjs.SearchApplicationsResponse>
	{
		let methodUrl = this.apibaseurl + "/searchApplications";
		return this.http.post<cobjs.SearchApplicationsResponse>(methodUrl,request,this.getHttpOptions ());
	}

	searchActions (request: cobjs.SearchActionRequest): Observable<cobjs.SearchActionResponse>
	{
		let methodUrl = this.apibaseurl + "/searchActions";
		return this.http.post<cobjs.SearchActionResponse>(methodUrl,request,this.getHttpOptions ());
	}


	searchResources (request: cobjs.SearchResourceRequest): Observable<cobjs.SearchResourceResponse>
	{
		let methodUrl = this.apibaseurl + "/searchResources";
		return this.http.post<cobjs.SearchResourceResponse>(methodUrl,request,this.getHttpOptions ());
	}

	searchClients (request: cobjs.SearchClientRequest): Observable<cobjs.SearchClientResponse>
	{
		let methodUrl = this.apibaseurl + "/searchClients";
		return this.http.post<cobjs.SearchClientResponse>(methodUrl,request,this.getHttpOptions ());
	}


	searchClientRoles (request: cobjs.SearchClientRoleRequest): Observable<cobjs.SearchClientRoleResponse>
	{
		let methodUrl = this.apibaseurl + "/searchClientRoles";
		return this.http.post<cobjs.SearchClientRoleResponse>(methodUrl,request,this.getHttpOptions ());
	}	


	searchClientGroups (request: cobjs.SearchClientGroupRequest): Observable<cobjs.SearchClientGroupResponse>
	{
		let methodUrl = this.apibaseurl + "/searchClientGroups";
		return this.http.post<cobjs.SearchClientGroupResponse>(methodUrl,request,this.getHttpOptions ());
	}		

	searchScopeTypes (request: cobjs.SearchScopeTypeRequest): Observable<cobjs.SearchScopeTypeResponse>
	{
		let methodUrl = this.apibaseurl + "/searchScopeTypes";
		return this.http.post<cobjs.SearchScopeTypeResponse>(methodUrl,request,this.getHttpOptions ());
	}			

	searchDomainTypes (request: cobjs.SearchDomainTypeRequest): Observable<cobjs.SearchDomainTypeResponse>
	{
		let methodUrl = this.apibaseurl + "/searchDomainTypes";
		return this.http.post<cobjs.SearchDomainTypeResponse>(methodUrl,request,this.getHttpOptions ());
	}			

	searchPermissions (request: cobjs.SearchPermissionRequest): Observable<cobjs.SearchPermissionResponse>
	{
		let methodUrl = this.apibaseurl + "/searchPermissions";
		return this.http.post<cobjs.SearchPermissionResponse>(methodUrl,request,this.getHttpOptions ());
	}			

	searchDomains (request: cobjs.SearchDomainRequest): Observable<cobjs.SearchDomainResponse>
	{
		let methodUrl = this.apibaseurl + "/searchDomains";
		return this.http.post<cobjs.SearchDomainResponse>(methodUrl,request,this.getHttpOptions ());
	}			

	searchScope (request: cobjs.SearchScopeRequest): Observable<cobjs.SearchScopeResponse>
	{
		let methodUrl = this.apibaseurl + "/searchScopes";
		return this.http.post<cobjs.SearchScopeResponse>(methodUrl,request,this.getHttpOptions ());
	}				

	searchClientGroupRoles (request: cobjs.SearchClientGroupRoleRequest): Observable<cobjs.SearchClientGroupRoleResponse>
	{
		let methodUrl = this.apibaseurl + "/searchClientGroupRoles";
		return this.http.post<cobjs.SearchClientGroupRoleResponse>(methodUrl,request,this.getHttpOptions ());
	}				

	createClientGroupRole (request: cobjs.CreateClientGroupRoleRequest): Observable<cobjs.CreateClientGroupRoleResponse>
	{
		let methodUrl = this.apibaseurl + "/createClientGroupRole";
		return this.http.post<cobjs.CreateClientGroupRoleResponse>(methodUrl,request,this.getHttpOptions ());
	}				

	deleteClientGroupRole (request: cobjs.DeleteClientGroupRoleRequest): Observable<cobjs.DeleteClientGroupRoleResponse>
	{
		let methodUrl = this.apibaseurl + "/deleteClientGroupRole";
		return this.http.post<cobjs.DeleteClientGroupRoleResponse>(methodUrl,request,this.getHttpOptions ());
	}				


	searchChangeLogs (request: cobjs.SearchChangeLogRequest): Observable<cobjs.SearchChangeLogResponse>
	{
		let methodUrl = this.apibaseurl + "/searchChangeLogs";
		return this.http.post<cobjs.SearchChangeLogResponse>(methodUrl,request,this.getHttpOptions ());
	}
}
