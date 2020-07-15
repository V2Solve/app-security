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
		if (this.username != null)
		{
			let authorizationHeader = "Basic " + btoa(this.username+ ":" + this.password);
			// console.log("Authorization header: " + authorizationHeader);
			httpHeaders = new HttpHeaders({"Authorization": authorizationHeader});
		}
		
		return httpHeaders;
	}


    deleteClient (request: sobjs.DeleteClientRequest): Observable<sobjs.DeleteClientResponse>
    {
		let methodUrl = this.apibaseurl + "/deleteClient";

		let body: "body";
		let response: "json";
		
		var httpOptions = {
			headers: this.getHttpHeaders(),
			observe: body,
			responseType: response
		};

		return this.http.post<sobjs.DeleteClientResponse>(methodUrl,request,httpOptions);
    }

    createClient (request: sobjs.CreateClientRequest ): Observable<sobjs.CreateClientResponse>
    {
		let methodUrl = this.apibaseurl + "/createClient";

		let body: "body";
		let response: "json";
		
		var httpOptions = {
			headers: this.getHttpHeaders(),
			observe: body,
			responseType: response
		};

		return this.http.post<sobjs.CreateClientResponse>(methodUrl,request,httpOptions);
    }

     createApplication (request: sobjs.CreateApplicationRequest): Observable<sobjs.CreateApplicationResponse>
     {
		let methodUrl = this.apibaseurl + "/createApplication";

		let body: "body";
		let response: "json";
		
		var httpOptions = {
			headers: this.getHttpHeaders(),
			observe: body,
			responseType: response
		};

		return this.http.post<sobjs.CreateApplicationResponse>(methodUrl,request,httpOptions);
     }

    deleteApplication (request: sobjs.DeleteApplicationRequest): Observable<sobjs.DeleteApplicationResponse>
    {
		let methodUrl = this.apibaseurl + "/deleteApplication";

		let body: "body";
		let response: "json";
		
		var httpOptions = {
			headers: this.getHttpHeaders(),
			observe: body,
			responseType: response
		};

		return this.http.post<sobjs.DeleteApplicationResponse>(methodUrl,request,httpOptions);

    }

    createAction (request: sobjs.CreateActionRequest): Observable<sobjs.CreateActionResponse>
    {
		let methodUrl = this.apibaseurl + "/createAction";

		let body: "body";
		let response: "json";
		
		var httpOptions = {
			headers: this.getHttpHeaders(),
			observe: body,
			responseType: response
		};

		return this.http.post<sobjs.CreateActionResponse>(methodUrl,request,httpOptions);

    }

    deleteAction (request: sobjs.DeleteActionRequest): Observable<sobjs.DeleteActionResponse>
    {
		let methodUrl = this.apibaseurl + "/deleteAction";

		let body: "body";
		let response: "json";
		
		var httpOptions = {
			headers: this.getHttpHeaders(),
			observe: body,
			responseType: response
		};

		return this.http.post<sobjs.DeleteActionResponse>(methodUrl,request,httpOptions);

    }

    createResource (request: sobjs.CreateResourceRequest): Observable<sobjs.CreateResourceResponse>
    {
		let methodUrl = this.apibaseurl + "/createResource";

		let body: "body";
		let response: "json";
		
		var httpOptions = {
			headers: this.getHttpHeaders(),
			observe: body,
			responseType: response
		};

		return this.http.post<sobjs.CreateResourceResponse>(methodUrl,request,httpOptions);

    }

    deleteResource (request: sobjs.DeleteResourceRequest): Observable<sobjs.DeleteResourceResponse>
    {
		let methodUrl = this.apibaseurl + "/deleteResource";

		let body: "body";
		let response: "json";
		
		var httpOptions = {
			headers: this.getHttpHeaders(),
			observe: body,
			responseType: response
		};

		return this.http.post<sobjs.DeleteResourceResponse>(methodUrl,request,httpOptions);

    }

    createPermission (request: sobjs.CreatePermissionRequest): Observable<sobjs.CreatePermissionResponse>
    {
		let methodUrl = this.apibaseurl + "/createPermission";

		let body: "body";
		let response: "json";
		
		var httpOptions = {
			headers: this.getHttpHeaders(),
			observe: body,
			responseType: response
		};

		return this.http.post<sobjs.CreatePermissionResponse>(methodUrl,request,httpOptions);

    }

    deletePermission (request: sobjs.DeletePermissionRequest): Observable<sobjs.DeletePermissionResponse>
    {
		let methodUrl = this.apibaseurl + "/deletePermission";

		let body: "body";
		let response: "json";
		
		var httpOptions = {
			headers: this.getHttpHeaders(),
			observe: body,
			responseType: response
		};

		return this.http.post<sobjs.DeletePermissionResponse>(methodUrl,request,httpOptions);

    }

    createClientGroup (request: sobjs.CreateClientGroupRequest): Observable<sobjs.CreateClientGroupResponse>
    {
		let methodUrl = this.apibaseurl + "/createClientGroup";

		let body: "body";
		let response: "json";
		
		var httpOptions = {
			headers: this.getHttpHeaders(),
			observe: body,
			responseType: response
		};

		return this.http.post<sobjs.CreateClientGroupResponse>(methodUrl,request,httpOptions);

    }

    deleteClientGroup (request: sobjs.DeleteClientGroupRequest): Observable<sobjs.DeleteClientGroupResponse>
    {
		let methodUrl = this.apibaseurl + "/deleteClientGroup";

		let body: "body";
		let response: "json";
		
		var httpOptions = {
			headers: this.getHttpHeaders(),
			observe: body,
			responseType: response
		};

		return this.http.post<sobjs.DeleteClientGroupResponse>(methodUrl,request,httpOptions);

	}
	
    createClientRole (request: sobjs.CreateClientRoleRequest): Observable<sobjs.CreateClientRoleResponse>
    {
		let methodUrl = this.apibaseurl + "/createClientRole";

		let body: "body";
		let response: "json";
		
		var httpOptions = {
			headers: this.getHttpHeaders(),
			observe: body,
			responseType: response
		};

		return this.http.post<sobjs.CreateClientRoleResponse>(methodUrl,request,httpOptions);

    }

    deleteClientRole (request: sobjs.DeleteClientRoleRequest): Observable<sobjs.DeleteClientRoleResponse>
    {
		let methodUrl = this.apibaseurl + "/deleteClientRole";

		let body: "body";
		let response: "json";
		
		var httpOptions = {
			headers: this.getHttpHeaders(),
			observe: body,
			responseType: response
		};

		return this.http.post<sobjs.DeleteClientRoleResponse>(methodUrl,request,httpOptions);

	}
	

    createClientRolePermission (request: sobjs.CreateClientRolePermissionRequest): Observable<sobjs.CreateClientRolePermissionResponse>
    {
		let methodUrl = this.apibaseurl + "/createClientRolePermission";

		let body: "body";
		let response: "json";
		
		var httpOptions = {
			headers: this.getHttpHeaders(),
			observe: body,
			responseType: response
		};

		return this.http.post<sobjs.CreateClientRolePermissionResponse>(methodUrl,request,httpOptions);

    }

    deleteClientRolePermission (request: sobjs.DeleteClientRolePermissionRequest): Observable<sobjs.DeleteClientRolePermissionResponse>
    {
		let methodUrl = this.apibaseurl + "/deleteClientRolePermission";

		let body: "body";
		let response: "json";
		
		var httpOptions = {
			headers: this.getHttpHeaders(),
			observe: body,
			responseType: response
		};

		return this.http.post<sobjs.DeleteClientRolePermissionResponse>(methodUrl,request,httpOptions);
    }

    searchClientRolePermissions (request: sobjs.SearchClientRolePermissionRequest): Observable<sobjs.SearchClientRolePermissionResponse>
    {
		let methodUrl = this.apibaseurl + "/searchClientRolePermissions";

		let body: "body";
		let response: "json";
		
		var httpOptions = {
			headers: this.getHttpHeaders(),
			observe: body,
			responseType: response
		};

		return this.http.post<sobjs.SearchClientRolePermissionResponse>(methodUrl,request,httpOptions);
    }


    createDomain (request: sobjs.CreateDomainRequest): Observable<sobjs.CreateDomainResponse>
    {
		let methodUrl = this.apibaseurl + "/createDomain";

		let body: "body";
		let response: "json";
		
		var httpOptions = {
			headers: this.getHttpHeaders(),
			observe: body,
			responseType: response
		};

		return this.http.post<sobjs.CreateDomainResponse>(methodUrl,request,httpOptions);
	}
	
    deleteDomain (request: sobjs.DeleteDomainRequest): Observable<sobjs.DeleteDomainResponse>
    {
		let methodUrl = this.apibaseurl + "/deleteDomain";

		let body: "body";
		let response: "json";
		
		var httpOptions = {
			headers: this.getHttpHeaders(),
			observe: body,
			responseType: response
		};

		return this.http.post<sobjs.DeleteDomainResponse>(methodUrl,request,httpOptions);

    }


    createDomainType (request: sobjs.CreateDomainTypeRequest): Observable<sobjs.CreateDomainTypeResponse>
    {
		let methodUrl = this.apibaseurl + "/createDomainType";

		let body: "body";
		let response: "json";
		
		var httpOptions = {
			headers: this.getHttpHeaders(),
			observe: body,
			responseType: response
		};

		return this.http.post<sobjs.CreateDomainTypeResponse>(methodUrl,request,httpOptions);

	}
	


    deleteDomainType (request: sobjs.DeleteDomainTypeRequest): Observable<sobjs.DeleteDomainTypeResponse>
    {
		let methodUrl = this.apibaseurl + "/deleteDomainType";

		let body: "body";
		let response: "json";
		
		var httpOptions = {
			headers: this.getHttpHeaders(),
			observe: body,
			responseType: response
		};

		return this.http.post<sobjs.DeleteDomainTypeResponse>(methodUrl,request,httpOptions);

    }

    createScopeType (request: sobjs.CreateScopeTypeRequest): Observable<sobjs.CreateScopeTypeResponse>
    {
		let methodUrl = this.apibaseurl + "/createScopeType";

		let body: "body";
		let response: "json";
		
		var httpOptions = {
			headers: this.getHttpHeaders(),
			observe: body,
			responseType: response
		};

		return this.http.post<sobjs.CreateScopeTypeResponse>(methodUrl,request,httpOptions);

    }

    deleteScopeType (request: sobjs.DeleteScopeTypeRequest): Observable<sobjs.DeleteScopeTypeResponse>
    {
		let methodUrl = this.apibaseurl + "/deleteScopeType";

		let body: "body";
		let response: "json";
		
		var httpOptions = {
			headers: this.getHttpHeaders(),
			observe: body,
			responseType: response
		};

		return this.http.post<sobjs.DeleteScopeTypeResponse>(methodUrl,request,httpOptions);

    }

    createScope (request: sobjs.CreateScopeRequest): Observable<sobjs.CreateScopeResponse>
    {
		let methodUrl = this.apibaseurl + "/createScope";

		let body: "body";
		let response: "json";
		
		var httpOptions = {
			headers: this.getHttpHeaders(),
			observe: body,
			responseType: response
		};

		return this.http.post<sobjs.CreateScopeResponse>(methodUrl,request,httpOptions);

    }

    deleteScope (request: sobjs.DeleteScopeRequest): Observable<sobjs.DeleteScopeResponse>
    {
		let methodUrl = this.apibaseurl + "/deleteScope";

		let body: "body";
		let response: "json";
		
		var httpOptions = {
			headers: this.getHttpHeaders(),
			observe: body,
			responseType: response
		};

		return this.http.post<sobjs.DeleteScopeResponse>(methodUrl,request,httpOptions);

    }


    createGroupMembership (request: sobjs.CreateGroupMembershipRequest): Observable<sobjs.CreateGroupMembershipResponse>
    {
		let methodUrl = this.apibaseurl + "/createGroupMembership";

		let body: "body";
		let response: "json";
		
		var httpOptions = {
			headers: this.getHttpHeaders(),
			observe: body,
			responseType: response
		};

		let returnValue = this.http.post<sobjs.CreateGroupMembershipResponse>(methodUrl,request,httpOptions);
		return  returnValue;
    }

    deleteGroupMembership (request: sobjs.DeleteGroupMembershipRequest): Observable<sobjs.DeleteGroupMembershipResponse>
    {
        let methodUrl = this.apibaseurl + "/deleteGroupMembership";

		let body: "body";
		let response: "json";
		
		var httpOptions = {
			headers: this.getHttpHeaders(),
			observe: body,
			responseType: response
		};

		return this.http.post<sobjs.DeleteGroupMembershipResponse>(methodUrl,request,httpOptions);
	}
	

	searchApplications (request: sobjs.SearchApplicationsRequest): Observable<sobjs.SearchApplicationsResponse>
	{
		let methodUrl = this.apibaseurl + "/searchApplications";
		let body: "body";
		let response: "json";
		
		var httpOptions = {
			headers: this.getHttpHeaders(),
			observe: body,
			responseType: response
		};

		return this.http.post<sobjs.SearchApplicationsResponse>(methodUrl,request,httpOptions);
	}

	searchActions (request: sobjs.SearchActionRequest): Observable<sobjs.SearchActionResponse>
	{
		let methodUrl = this.apibaseurl + "/searchActions";
		let body: "body";
		let response: "json";
		
		var httpOptions = {
			headers: this.getHttpHeaders(),
			observe: body,
			responseType: response
		};

		return this.http.post<sobjs.SearchActionResponse>(methodUrl,request,httpOptions);
	}


	searchResources (request: sobjs.SearchResourceRequest): Observable<sobjs.SearchResourceResponse>
	{
		let methodUrl = this.apibaseurl + "/searchResources";
		let body: "body";
		let response: "json";
		
		var httpOptions = {
			headers: this.getHttpHeaders(),
			observe: body,
			responseType: response
		};

		return this.http.post<sobjs.SearchResourceResponse>(methodUrl,request,httpOptions);
	}

	searchClients (request: sobjs.SearchClientRequest): Observable<sobjs.SearchClientResponse>
	{
		let methodUrl = this.apibaseurl + "/searchClients";
		let body: "body";
		let response: "json";
		
		var httpOptions = {
			headers: this.getHttpHeaders(),
			observe: body,
			responseType: response
		};

		return this.http.post<sobjs.SearchClientResponse>(methodUrl,request,httpOptions);
	}


	searchClientRoles (request: sobjs.SearchClientRoleRequest): Observable<sobjs.SearchClientRoleResponse>
	{
		let methodUrl = this.apibaseurl + "/searchClientRoles";
		let body: "body";
		let response: "json";
		
		var httpOptions = {
			headers: this.getHttpHeaders(),
			observe: body,
			responseType: response
		};

		return this.http.post<sobjs.SearchClientRoleResponse>(methodUrl,request,httpOptions);
	}	


	searchClientGroups (request: sobjs.SearchClientGroupRequest): Observable<sobjs.SearchClientGroupResponse>
	{
		let methodUrl = this.apibaseurl + "/searchClientGroups";
		let body: "body";
		let response: "json";
		
		var httpOptions = {
			headers: this.getHttpHeaders(),
			observe: body,
			responseType: response
		};

		return this.http.post<sobjs.SearchClientGroupResponse>(methodUrl,request,httpOptions);
	}		

	searchScopeTypes (request: sobjs.SearchScopeTypeRequest): Observable<sobjs.SearchScopeTypeResponse>
	{
		let methodUrl = this.apibaseurl + "/searchScopeTypes";
		let body: "body";
		let response: "json";
		
		var httpOptions = {
			headers: this.getHttpHeaders(),
			observe: body,
			responseType: response
		};

		return this.http.post<sobjs.SearchScopeTypeResponse>(methodUrl,request,httpOptions);
	}			

	searchDomainTypes (request: sobjs.SearchDomainTypeRequest): Observable<sobjs.SearchDomainTypeResponse>
	{
		let methodUrl = this.apibaseurl + "/searchDomainTypes";
		let body: "body";
		let response: "json";
		
		var httpOptions = {
			headers: this.getHttpHeaders(),
			observe: body,
			responseType: response
		};

		return this.http.post<sobjs.SearchDomainTypeResponse>(methodUrl,request,httpOptions);
	}			

	searchPermissions (request: sobjs.SearchPermissionRequest): Observable<sobjs.SearchPermissionResponse>
	{
		let methodUrl = this.apibaseurl + "/searchPermissions";
		let body: "body";
		let response: "json";
		
		var httpOptions = {
			headers: this.getHttpHeaders(),
			observe: body,
			responseType: response
		};

		return this.http.post<sobjs.SearchPermissionResponse>(methodUrl,request,httpOptions);
	}			

	searchDomains (request: sobjs.SearchDomainRequest): Observable<sobjs.SearchDomainResponse>
	{
		let methodUrl = this.apibaseurl + "/searchDomains";
		let body: "body";
		let response: "json";
		
		var httpOptions = {
			headers: this.getHttpHeaders(),
			observe: body,
			responseType: response
		};

		return this.http.post<sobjs.SearchDomainResponse>(methodUrl,request,httpOptions);
	}			

	searchScope (request: sobjs.SearchScopeRequest): Observable<sobjs.SearchScopeResponse>
	{
		let methodUrl = this.apibaseurl + "/searchScopes";
		let body: "body";
		let response: "json";
		
		var httpOptions = {
			headers: this.getHttpHeaders(),
			observe: body,
			responseType: response
		};

		return this.http.post<sobjs.SearchScopeResponse>(methodUrl,request,httpOptions);
	}				


	searchClientGroupRoles (request: sobjs.SearchClientGroupRoleRequest): Observable<sobjs.SearchClientGroupRoleResponse>
	{
		let methodUrl = this.apibaseurl + "/searchClientGroupRoles";
		let body: "body";
		let response: "json";
		
		var httpOptions = {
			headers: this.getHttpHeaders(),
			observe: body,
			responseType: response
		};

		return this.http.post<sobjs.SearchClientGroupRoleResponse>(methodUrl,request,httpOptions);
	}				

	createClientGroupRole (request: sobjs.CreateClientGroupRoleRequest): Observable<sobjs.CreateClientGroupRoleResponse>
	{
		let methodUrl = this.apibaseurl + "/createClientGroupRole";
		let body: "body";
		let response: "json";
		
		var httpOptions = {
			headers: this.getHttpHeaders(),
			observe: body,
			responseType: response
		};

		return this.http.post<sobjs.CreateClientGroupRoleResponse>(methodUrl,request,httpOptions);
	}				

	deleteClientGroupRole (request: sobjs.DeleteClientGroupRoleRequest): Observable<sobjs.DeleteClientGroupRoleResponse>
	{
		let methodUrl = this.apibaseurl + "/deleteClientGroupRole";
		let body: "body";
		let response: "json";
		
		var httpOptions = {
			headers: this.getHttpHeaders(),
			observe: body,
			responseType: response
		};

		return this.http.post<sobjs.DeleteClientGroupRoleResponse>(methodUrl,request,httpOptions);
	}				

}
