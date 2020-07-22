import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpXsrfTokenExtractor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import * as sobjs from 'src/assets/domainmodel/appsecuritymodel';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContextMgmtApiClientService {

	apibaseurl: string;
	http: HttpClient;	
	username: string;
	password: string;
	
	constructor (httpClient: HttpClient)
	{
		this.apibaseurl = environment.contextApiBaseUrl;
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
	 
	hasGroup (request: sobjs.SecurityAPIRequest) : Observable<sobjs.SecurityAPIResponse>
	{
		let methodUrl = this.apibaseurl + "/hasGroup";
		return this.http.post<sobjs.SecurityAPIResponse>(methodUrl,request,this.getHttpOptions());	
	}
	
	hasRole (request: sobjs.SecurityAPIRequest) : Observable<sobjs.SecurityAPIResponse>
	{
		let methodUrl = this.apibaseurl + "/hasRole";
		return this.http.post<sobjs.SecurityAPIResponse>(methodUrl,request,this.getHttpOptions ());	
	}

	hasPermission (request: sobjs.SecurityAPIRequest) : Observable<sobjs.SecurityAPIResponse>
	{
		let methodUrl = this.apibaseurl + "/hasPermission";
		return this.http.post<sobjs.SecurityAPIResponse>(methodUrl,request,this.getHttpOptions ());
	}

	hasPermissions (request: sobjs.SecurityAPIRequest) : Observable<sobjs.SecurityAPIResponse>
	{
		let methodUrl = this.apibaseurl + "/hasPermissions";
		return this.http.post<sobjs.SecurityAPIResponse>(methodUrl,request,this.getHttpOptions());
	}

	hasPermissionInScope (request: sobjs.SecurityAPIRequest) : Observable<sobjs.SecurityAPIResponse>
	{
		let methodUrl = this.apibaseurl + "/hasPermissionInScope";

		return this.http.post<sobjs.SecurityAPIResponse>(methodUrl,request,this.getHttpOptions ());
	}


	hasPermissionReturnGroups (request: sobjs.SecurityAPIRequest) : Observable<sobjs.SecurityAPIResponse>
	{
		let methodUrl = this.apibaseurl + "/hasPermissionReturnGroups";

		return this.http.post<sobjs.SecurityAPIResponse>(methodUrl,request,this.getHttpOptions ());
	}
	
	hasPermissionReturnRoles (request: sobjs.SecurityAPIRequest) : Observable<sobjs.SecurityAPIResponse>
	{
		let methodUrl = this.apibaseurl + "/hasPermissionReturnRoles";

		return this.http.post<sobjs.SecurityAPIResponse>(methodUrl,request,this.getHttpOptions ());
	}

	hasPermissionReturnScopes (request: sobjs.SecurityAPIRequest) : Observable<sobjs.SecurityAPIResponse>
	{
		let methodUrl = this.apibaseurl + "/hasPermissionReturnScopes";

		return this.http.post<sobjs.SecurityAPIResponse>(methodUrl,request,this.getHttpOptions ());
	}

	getSecurityContext (request: sobjs.SecurityAPIRequest): Observable<sobjs.SecurityAPIResponse>
	{
		let methodUrl = this.apibaseurl + "/getSecurityContext";
		return this.http.post<sobjs.SecurityAPIResponse>(methodUrl,request,this.getHttpOptions());
	}

	hasPermissionAs (action: string,resource: string): Observable<sobjs.SecurityAPIResponse>
	{
		let secApiR = new sobjs.SecurityAPIRequest ();
		secApiR.action=action;
		secApiR.resource=resource;
		let permission = false;
		return this.hasPermission(secApiR);
	}


}
