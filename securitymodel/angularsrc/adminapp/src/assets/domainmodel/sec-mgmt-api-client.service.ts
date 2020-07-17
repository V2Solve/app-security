import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpXsrfTokenExtractor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import * as sobjs from 'src/assets/domainmodel/appsecuritymodel';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SecMgmtApiClientService {

	apibaseurl: string;
	http: HttpClient;	
	username: string;
	password: string;
	
	constructor (httpClient: HttpClient)
	{
		this.apibaseurl = environment.managementApiBaseUrl;
		this.http = httpClient;
		this.username = environment.username;
		this.password = environment.password;
    }

	/**
	 * Returns the http options to be appended.
	 */
	getHttpHeaders (): HttpHeaders
	{
		let httpHeaders: HttpHeaders;
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
		let body:  "body";
		let response: "json";

		var httpOptions = {
			headers: this.getHttpHeaders(),
			observe: body,
			responseType: response
		};

		return httpOptions;
	}


    deleteClient (request: sobjs.DeleteClientRequest): Observable<sobjs.DeleteClientResponse>
    {
		let methodUrl = this.apibaseurl + "/deleteClient";
		return this.http.post<sobjs.DeleteClientResponse>(methodUrl,request,this.getHttpOptions());
    }

    createClient (request: sobjs.CreateClientRequest ): Observable<sobjs.CreateClientResponse>
    {
		let methodUrl = this.apibaseurl + "/createClient";
		return this.http.post<sobjs.CreateClientResponse>(methodUrl,request,this.getHttpOptions ());
    }

     createApplication (request: sobjs.CreateApplicationRequest): Observable<sobjs.CreateApplicationResponse>
     {
		let methodUrl = this.apibaseurl + "/createApplication";
		return this.http.post<sobjs.CreateApplicationResponse>(methodUrl,request,this.getHttpOptions ());
     }

    deleteApplication (request: sobjs.DeleteApplicationRequest): Observable<sobjs.DeleteApplicationResponse>
    {
		let methodUrl = this.apibaseurl + "/deleteApplication";
		return this.http.post<sobjs.DeleteApplicationResponse>(methodUrl,request,this.getHttpOptions ());

    }

    createAction (request: sobjs.CreateActionRequest): Observable<sobjs.CreateActionResponse>
    {
		let methodUrl = this.apibaseurl + "/createAction";
		return this.http.post<sobjs.CreateActionResponse>(methodUrl,request,this.getHttpOptions ());

    }

    deleteAction (request: sobjs.DeleteActionRequest): Observable<sobjs.DeleteActionResponse>
    {
		let methodUrl = this.apibaseurl + "/deleteAction";
		return this.http.post<sobjs.DeleteActionResponse>(methodUrl,request,this.getHttpOptions ());
    }

    createResource (request: sobjs.CreateResourceRequest): Observable<sobjs.CreateResourceResponse>
    {
		let methodUrl = this.apibaseurl + "/createResource";
		return this.http.post<sobjs.CreateResourceResponse>(methodUrl,request,this.getHttpOptions ());
    }

    deleteResource (request: sobjs.DeleteResourceRequest): Observable<sobjs.DeleteResourceResponse>
    {
		let methodUrl = this.apibaseurl + "/deleteResource";
		return this.http.post<sobjs.DeleteResourceResponse>(methodUrl,request,this.getHttpOptions ());
    }

    createPermission (request: sobjs.CreatePermissionRequest): Observable<sobjs.CreatePermissionResponse>
    {
		let methodUrl = this.apibaseurl + "/createPermission";
		return this.http.post<sobjs.CreatePermissionResponse>(methodUrl,request,this.getHttpOptions ());
    }

    deletePermission (request: sobjs.DeletePermissionRequest): Observable<sobjs.DeletePermissionResponse>
    {
		let methodUrl = this.apibaseurl + "/deletePermission";
		return this.http.post<sobjs.DeletePermissionResponse>(methodUrl,request,this.getHttpOptions ());
    }

    createClientGroup (request: sobjs.CreateClientGroupRequest): Observable<sobjs.CreateClientGroupResponse>
    {
		let methodUrl = this.apibaseurl + "/createClientGroup";
		return this.http.post<sobjs.CreateClientGroupResponse>(methodUrl,request,this.getHttpOptions ());
    }

    deleteClientGroup (request: sobjs.DeleteClientGroupRequest): Observable<sobjs.DeleteClientGroupResponse>
    {
		let methodUrl = this.apibaseurl + "/deleteClientGroup";
		return this.http.post<sobjs.DeleteClientGroupResponse>(methodUrl,request,this.getHttpOptions ());
	}
	
    createClientRole (request: sobjs.CreateClientRoleRequest): Observable<sobjs.CreateClientRoleResponse>
    {
		let methodUrl = this.apibaseurl + "/createClientRole";
		return this.http.post<sobjs.CreateClientRoleResponse>(methodUrl,request,this.getHttpOptions ());
    }

    deleteClientRole (request: sobjs.DeleteClientRoleRequest): Observable<sobjs.DeleteClientRoleResponse>
    {
		let methodUrl = this.apibaseurl + "/deleteClientRole";
		return this.http.post<sobjs.DeleteClientRoleResponse>(methodUrl,request,this.getHttpOptions ());
	}
	

    createClientRolePermission (request: sobjs.CreateClientRolePermissionRequest): Observable<sobjs.CreateClientRolePermissionResponse>
    {
		let methodUrl = this.apibaseurl + "/createClientRolePermission";
		return this.http.post<sobjs.CreateClientRolePermissionResponse>(methodUrl,request,this.getHttpOptions ());

    }

    deleteClientRolePermission (request: sobjs.DeleteClientRolePermissionRequest): Observable<sobjs.DeleteClientRolePermissionResponse>
    {
		let methodUrl = this.apibaseurl + "/deleteClientRolePermission";
		return this.http.post<sobjs.DeleteClientRolePermissionResponse>(methodUrl,request,this.getHttpOptions ());
    }

    searchClientRolePermissions (request: sobjs.SearchClientRolePermissionRequest): Observable<sobjs.SearchClientRolePermissionResponse>
    {
		let methodUrl = this.apibaseurl + "/searchClientRolePermissions";
		return this.http.post<sobjs.SearchClientRolePermissionResponse>(methodUrl,request,this.getHttpOptions ());
    }


    createDomain (request: sobjs.CreateDomainRequest): Observable<sobjs.CreateDomainResponse>
    {
		let methodUrl = this.apibaseurl + "/createDomain";
		return this.http.post<sobjs.CreateDomainResponse>(methodUrl,request,this.getHttpOptions ());
	}
	
    deleteDomain (request: sobjs.DeleteDomainRequest): Observable<sobjs.DeleteDomainResponse>
    {
		let methodUrl = this.apibaseurl + "/deleteDomain";
		return this.http.post<sobjs.DeleteDomainResponse>(methodUrl,request,this.getHttpOptions ());
    }


    createDomainType (request: sobjs.CreateDomainTypeRequest): Observable<sobjs.CreateDomainTypeResponse>
    {
		let methodUrl = this.apibaseurl + "/createDomainType";
		return this.http.post<sobjs.CreateDomainTypeResponse>(methodUrl,request,this.getHttpOptions ());
	}
	
    deleteDomainType (request: sobjs.DeleteDomainTypeRequest): Observable<sobjs.DeleteDomainTypeResponse>
    {
		let methodUrl = this.apibaseurl + "/deleteDomainType";
		return this.http.post<sobjs.DeleteDomainTypeResponse>(methodUrl,request,this.getHttpOptions ());
    }

    createScopeType (request: sobjs.CreateScopeTypeRequest): Observable<sobjs.CreateScopeTypeResponse>
    {
		let methodUrl = this.apibaseurl + "/createScopeType";
		return this.http.post<sobjs.CreateScopeTypeResponse>(methodUrl,request,this.getHttpOptions ());
    }

    deleteScopeType (request: sobjs.DeleteScopeTypeRequest): Observable<sobjs.DeleteScopeTypeResponse>
    {
		let methodUrl = this.apibaseurl + "/deleteScopeType";
		return this.http.post<sobjs.DeleteScopeTypeResponse>(methodUrl,request,this.getHttpOptions ());
    }

    createScope (request: sobjs.CreateScopeRequest): Observable<sobjs.CreateScopeResponse>
    {
		let methodUrl = this.apibaseurl + "/createScope";
		return this.http.post<sobjs.CreateScopeResponse>(methodUrl,request,this.getHttpOptions ());
    }

    deleteScope (request: sobjs.DeleteScopeRequest): Observable<sobjs.DeleteScopeResponse>
    {
		let methodUrl = this.apibaseurl + "/deleteScope";
		return this.http.post<sobjs.DeleteScopeResponse>(methodUrl,request,this.getHttpOptions ());
    }


    createGroupMembership (request: sobjs.CreateGroupMembershipRequest): Observable<sobjs.CreateGroupMembershipResponse>
    {
		let methodUrl = this.apibaseurl + "/createGroupMembership";
		return this.http.post<sobjs.CreateGroupMembershipResponse>(methodUrl,request,this.getHttpOptions ());
    }

    deleteGroupMembership (request: sobjs.DeleteGroupMembershipRequest): Observable<sobjs.DeleteGroupMembershipResponse>
    {
        let methodUrl = this.apibaseurl + "/deleteGroupMembership";
		return this.http.post<sobjs.DeleteGroupMembershipResponse>(methodUrl,request,this.getHttpOptions ());
	}
	

	searchApplications (request: sobjs.SearchApplicationsRequest): Observable<sobjs.SearchApplicationsResponse>
	{
		let methodUrl = this.apibaseurl + "/searchApplications";
		return this.http.post<sobjs.SearchApplicationsResponse>(methodUrl,request,this.getHttpOptions ());
	}

	searchActions (request: sobjs.SearchActionRequest): Observable<sobjs.SearchActionResponse>
	{
		let methodUrl = this.apibaseurl + "/searchActions";
		return this.http.post<sobjs.SearchActionResponse>(methodUrl,request,this.getHttpOptions ());
	}


	searchResources (request: sobjs.SearchResourceRequest): Observable<sobjs.SearchResourceResponse>
	{
		let methodUrl = this.apibaseurl + "/searchResources";
		return this.http.post<sobjs.SearchResourceResponse>(methodUrl,request,this.getHttpOptions ());
	}

	searchClients (request: sobjs.SearchClientRequest): Observable<sobjs.SearchClientResponse>
	{
		let methodUrl = this.apibaseurl + "/searchClients";
		return this.http.post<sobjs.SearchClientResponse>(methodUrl,request,this.getHttpOptions ());
	}


	searchClientRoles (request: sobjs.SearchClientRoleRequest): Observable<sobjs.SearchClientRoleResponse>
	{
		let methodUrl = this.apibaseurl + "/searchClientRoles";
		return this.http.post<sobjs.SearchClientRoleResponse>(methodUrl,request,this.getHttpOptions ());
	}	


	searchClientGroups (request: sobjs.SearchClientGroupRequest): Observable<sobjs.SearchClientGroupResponse>
	{
		let methodUrl = this.apibaseurl + "/searchClientGroups";
		return this.http.post<sobjs.SearchClientGroupResponse>(methodUrl,request,this.getHttpOptions ());
	}		

	searchScopeTypes (request: sobjs.SearchScopeTypeRequest): Observable<sobjs.SearchScopeTypeResponse>
	{
		let methodUrl = this.apibaseurl + "/searchScopeTypes";
		return this.http.post<sobjs.SearchScopeTypeResponse>(methodUrl,request,this.getHttpOptions ());
	}			

	searchDomainTypes (request: sobjs.SearchDomainTypeRequest): Observable<sobjs.SearchDomainTypeResponse>
	{
		let methodUrl = this.apibaseurl + "/searchDomainTypes";
		return this.http.post<sobjs.SearchDomainTypeResponse>(methodUrl,request,this.getHttpOptions ());
	}			

	searchPermissions (request: sobjs.SearchPermissionRequest): Observable<sobjs.SearchPermissionResponse>
	{
		let methodUrl = this.apibaseurl + "/searchPermissions";
		return this.http.post<sobjs.SearchPermissionResponse>(methodUrl,request,this.getHttpOptions ());
	}			

	searchDomains (request: sobjs.SearchDomainRequest): Observable<sobjs.SearchDomainResponse>
	{
		let methodUrl = this.apibaseurl + "/searchDomains";
		return this.http.post<sobjs.SearchDomainResponse>(methodUrl,request,this.getHttpOptions ());
	}			

	searchScope (request: sobjs.SearchScopeRequest): Observable<sobjs.SearchScopeResponse>
	{
		let methodUrl = this.apibaseurl + "/searchScopes";
		return this.http.post<sobjs.SearchScopeResponse>(methodUrl,request,this.getHttpOptions ());
	}				

	searchClientGroupRoles (request: sobjs.SearchClientGroupRoleRequest): Observable<sobjs.SearchClientGroupRoleResponse>
	{
		let methodUrl = this.apibaseurl + "/searchClientGroupRoles";
		return this.http.post<sobjs.SearchClientGroupRoleResponse>(methodUrl,request,this.getHttpOptions ());
	}				

	createClientGroupRole (request: sobjs.CreateClientGroupRoleRequest): Observable<sobjs.CreateClientGroupRoleResponse>
	{
		let methodUrl = this.apibaseurl + "/createClientGroupRole";
		return this.http.post<sobjs.CreateClientGroupRoleResponse>(methodUrl,request,this.getHttpOptions ());
	}				

	deleteClientGroupRole (request: sobjs.DeleteClientGroupRoleRequest): Observable<sobjs.DeleteClientGroupRoleResponse>
	{
		let methodUrl = this.apibaseurl + "/deleteClientGroupRole";
		return this.http.post<sobjs.DeleteClientGroupRoleResponse>(methodUrl,request,this.getHttpOptions ());
	}				
}
