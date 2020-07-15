import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export class Domain
{
	domainName: String;
	domainType: String;
}

export class Scope
{
	scopeName: String;
	scopeType: String;
	scopeValue: String;
}


export class RequestStatusInformation
{
	statusCode: String;
	statusMessage: String;
	
	public static standardSuccessCode: String = "Succeeded";
	public static standardFailureCode: String = "Failed";
	public static standardSuccessMessage: String = "Operation Succeeded";
	public static standardFailureMessage: String = "Operation Failed";
}

export class PagingInformation
{
	// may be set in request or response
	currentPage: Number;
	
	// usually set in requests..
	pageSize: Number;
	
	// may be set in request or response..
	noOfPages: Number;
	
	// may be set in the response
	totalNoOfRecords: Number;
	
	// may be set in the response.
	recordsReturned: Number;	
}

export  class BaseRequest
{
	/**
	 * Unique Calling Client Id;
	 */
	callingClientId: String;
	
	/**
	 * Additional groups that the client must be assumed to belong to 
	 *
	 */
	groups: Array<String>;

	pagingInfo: PagingInformation;	
}


export class BaseResponse
{
	
	// will specific what the status is. (error, or success depending on the code)
	status: RequestStatusInformation;
	
	// In case of paging enabled the number of records returned could be held in here..
	pageInfo: RequestStatusInformation;
}


export class CreateApplicationRequest extends BaseRequest
{
	appIdentifier: String;
	appShortIdentifier: String;
	description: String;
}


export  class CreateApplicationResponse extends BaseResponse
{
	
}


export  class SecurityAPIRequest extends BaseRequest
{
	/**
	 * Request Parameters - depending on the request some of these would be set.
	 */
	action: String;
	resource: String;
	roleName: String;
	groupName: String;
	scope: Scope;
	resourceDomain: Domain;	
}

export class SecurityAPIResponse extends BaseResponse
{
	/**
	 * Used for true false type of return data..
	 */
	result: Boolean;
	
	// Group Names
	groups: Array<String>;
	
	// Role Names;
	roles: Array<String>;
	
	// Array of scopes
	scopes: Array<Scope>;
}

//options: {
//    headers?: HttpHeaders | {[header: string]: string | string[]},
//    observe?: 'body' | 'events' | 'response',
//    params?: HttpParams|{[param: string]: string | string[]},
//    reportProgress?: boolean,
//    responseType?: 'arraybuffer'|'blob'|'json'|'text',
//    withCredentials?: boolean,
//  }

@Injectable()
export class ContextAPIClient
{
	endpointurl: string;
	http: HttpClient;		
	
	constructor (endpoint: string,private httpClient: HttpClient)
	{
		this.endpointurl = endpoint;
		this.http = httpClient;
	} 
	
	hasGroup (request: SecurityAPIRequest) : SecurityAPIResponse
	{
		var httpOptions : {};

		let returndata: SecurityAPIResponse;

		this.http.post<SecurityAPIResponse>(this.endpointurl,request,httpOptions).subscribe((data: SecurityAPIResponse)=>{
			returndata = data;
		})

		return returndata;
	}
	
	hasRole (request: SecurityAPIRequest) : SecurityAPIResponse
	{
		return null;
	}


	hasPermission (request: SecurityAPIRequest) : SecurityAPIResponse
	{
		return null;
	}


	hasPermissionInScope (request: SecurityAPIRequest) : SecurityAPIResponse
	{
		return null;
	}


	hasPermissionReturnGroups (request: SecurityAPIRequest) : SecurityAPIResponse
	{
		return null;
	}
	
	hasPermissionReturnRoles (request: SecurityAPIRequest) : SecurityAPIResponse
	{
		return null;
	}

	hasPermissionReturnScopes (request: SecurityAPIRequest) : SecurityAPIResponse
	{
		return null;
	}

	getSecurityContext (request: SecurityAPIRequest) : Observable<SecurityAPIResponse>
	{
		return this.http.post<SecurityAPIResponse>(this.endpointurl,request);
	}
}