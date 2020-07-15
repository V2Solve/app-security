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
		if (this.username != null)
		{
			let authorizationHeader = "Basic " + btoa(this.username+ ":" + this.password);
			// console.log("Authorization header: " + authorizationHeader);
			httpHeaders = new HttpHeaders({"Authorization": authorizationHeader});
		}
		
		return httpHeaders;
	}
	 
	hasGroup (request: sobjs.SecurityAPIRequest) : Observable<sobjs.SecurityAPIResponse>
	{
		let methodUrl = this.apibaseurl + "/hasGroup";

		let body: "body";
		let response: "json";
		
		var httpOptions = {
			headers: this.getHttpHeaders(),
			observe: body,
			responseType: response
		};

		return this.http.post<sobjs.SecurityAPIResponse>(methodUrl,request,httpOptions);	
	}
	
	hasRole (request: sobjs.SecurityAPIRequest) : Observable<sobjs.SecurityAPIResponse>
	{
		let methodUrl = this.apibaseurl + "/hasRole";

		let body: "body";
		let response: "json";
		
		var httpOptions = {
			headers: this.getHttpHeaders(),
			observe: body,
			responseType: response
		};

		return this.http.post<sobjs.SecurityAPIResponse>(methodUrl,request,httpOptions);	
	}


	hasPermission (request: sobjs.SecurityAPIRequest) : Observable<sobjs.SecurityAPIResponse>
	{
		let methodUrl = this.apibaseurl + "/hasPermission";

		let body: "body";
		let response: "json";
		
		var httpOptions = {
			headers: this.getHttpHeaders(),
			observe: body,
			responseType: response
		};

		return this.http.post<sobjs.SecurityAPIResponse>(methodUrl,request,httpOptions);
	}

	hasPermissions (request: sobjs.SecurityAPIRequest) : Observable<sobjs.SecurityAPIResponse>
	{
		let methodUrl = this.apibaseurl + "/hasPermissions";

		let body: "body";
		let response: "json";
		
		var httpOptions = {
			headers: this.getHttpHeaders(),
			observe: body,
			responseType: response
		};

		return this.http.post<sobjs.SecurityAPIResponse>(methodUrl,request,httpOptions);
	}

	hasPermissionInScope (request: sobjs.SecurityAPIRequest) : Observable<sobjs.SecurityAPIResponse>
	{
		let methodUrl = this.apibaseurl + "/hasPermissionInScope";

		let body: "body";
		let response: "json";
		
		var httpOptions = {
			headers: this.getHttpHeaders(),
			observe: body,
			responseType: response
		};

		return this.http.post<sobjs.SecurityAPIResponse>(methodUrl,request,httpOptions);
	}


	hasPermissionReturnGroups (request: sobjs.SecurityAPIRequest) : Observable<sobjs.SecurityAPIResponse>
	{
		let methodUrl = this.apibaseurl + "/hasPermissionReturnGroups";

		let body: "body";
		let response: "json";
		
		var httpOptions = {
			headers: this.getHttpHeaders(),
			observe: body,
			responseType: response
		};

		return this.http.post<sobjs.SecurityAPIResponse>(methodUrl,request,httpOptions);
	}
	
	hasPermissionReturnRoles (request: sobjs.SecurityAPIRequest) : Observable<sobjs.SecurityAPIResponse>
	{
		let methodUrl = this.apibaseurl + "/hasPermissionReturnRoles";

		let body: "body";
		let response: "json";
		
		var httpOptions = {
			headers: this.getHttpHeaders(),
			observe: body,
			responseType: response
		};

		return this.http.post<sobjs.SecurityAPIResponse>(methodUrl,request,httpOptions);
	}

	hasPermissionReturnScopes (request: sobjs.SecurityAPIRequest) : Observable<sobjs.SecurityAPIResponse>
	{
		let methodUrl = this.apibaseurl + "/hasPermissionReturnScopes";

		let body: "body";
		let response: "json";
		
		var httpOptions = {
			headers: this.getHttpHeaders(),
			observe: body,
			responseType: response
		};

		return this.http.post<sobjs.SecurityAPIResponse>(methodUrl,request,httpOptions);
	}

	getSecurityContext (request: sobjs.SecurityAPIRequest) : Observable<sobjs.SecurityAPIResponse>
	{
		let methodUrl = this.apibaseurl + "/getSecurityContext";

		let body: "body";
		let response: "json";
		
		var httpOptions = {
			headers: this.getHttpHeaders(),
			observe: body,
			responseType: response
		};

		return this.http.post<sobjs.SecurityAPIResponse>(methodUrl,request,httpOptions);
	}
}
