import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpXsrfTokenExtractor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import * as cobjs from '../client/commmodel';		// Communication Objects.
import * as mobjs from '../model/model';			// Model Objects
import { Scope, Domain, ChangeLog, AppClient, Resource, Permission, Application, Action, ClientGroupRole, ClientGroup, ClientRole, ClientRolePermission, DomainType, ScopeType } from "../model/model";


@Injectable({
  providedIn: 'root'
})
export class ContextMgmtApiClientService 
{
	apibaseurl: string;
	http: HttpClient;	
	username: string;
	password: string;
	
	constructor (httpClient: HttpClient,apibaseurl: string,username: string,password:string)
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
		var httpOptions = {
			headers: this.getHttpHeaders(),
		};

		return httpOptions;
	}
	 
	hasGroup (request: cobjs.SecurityAPIRequest): Observable<cobjs.SecurityAPIResponse>
	{
		let methodUrl = this.apibaseurl + "/hasGroup";
		let obj =  this.http.post<cobjs.SecurityAPIResponse>(methodUrl,request,this.getHttpOptions());
		return obj;
	}
	
	hasRole (request: cobjs.SecurityAPIRequest): Observable<cobjs.SecurityAPIResponse>
	{
		let methodUrl = this.apibaseurl + "/hasRole";
		let obj = this.http.post<cobjs.SecurityAPIResponse>(methodUrl,request,this.getHttpOptions ());	
		return obj;
	}

	hasPermission (request: cobjs.SecurityAPIRequest) : Observable<cobjs.SecurityAPIResponse>
	{
		let methodUrl = this.apibaseurl + "/hasPermission";
		return this.http.post<cobjs.SecurityAPIResponse>(methodUrl,request,this.getHttpOptions ());
	}

	hasPermissions (request: cobjs.SecurityAPIRequest) : Observable<cobjs.SecurityAPIResponse>
	{
		let methodUrl = this.apibaseurl + "/hasPermissions";
		return this.http.post<cobjs.SecurityAPIResponse>(methodUrl,request,this.getHttpOptions());
	}

	hasPermissionInScope (request: cobjs.SecurityAPIRequest) : Observable<cobjs.SecurityAPIResponse>
	{
		let methodUrl = this.apibaseurl + "/hasPermissionInScope";

		return this.http.post<cobjs.SecurityAPIResponse>(methodUrl,request,this.getHttpOptions ());
	}


	hasPermissionReturnGroups (request: cobjs.SecurityAPIRequest) : Observable<cobjs.SecurityAPIResponse>
	{
		let methodUrl = this.apibaseurl + "/hasPermissionReturnGroups";

		return this.http.post<cobjs.SecurityAPIResponse>(methodUrl,request,this.getHttpOptions ());
	}
	
	hasPermissionReturnRoles (request: cobjs.SecurityAPIRequest) : Observable<cobjs.SecurityAPIResponse>
	{
		let methodUrl = this.apibaseurl + "/hasPermissionReturnRoles";

		return this.http.post<cobjs.SecurityAPIResponse>(methodUrl,request,this.getHttpOptions ());
	}

	hasPermissionReturnScopes (request: cobjs.SecurityAPIRequest) : Observable<cobjs.SecurityAPIResponse>
	{
		let methodUrl = this.apibaseurl + "/hasPermissionReturnScopes";

		return this.http.post<cobjs.SecurityAPIResponse>(methodUrl,request,this.getHttpOptions ());
	}

	getSecurityContext (request: cobjs.GetSecurityContextRequest): Observable<cobjs.GetSecurityContextResponse>
	{
		let methodUrl = this.apibaseurl + "/getSecurityContext";
		return this.http.post<cobjs.GetSecurityContextResponse>(methodUrl,request,this.getHttpOptions());
	}

	hasPermissionAs (action: string,resource: string): Observable<cobjs.SecurityAPIResponse>
	{
		let secApiR = new cobjs.SecurityAPIRequest ();
		secApiR.action=action;
		secApiR.resource=resource;
		let permission = false;
		return this.hasPermission(secApiR);
	}

}
