import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpXsrfTokenExtractor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import * as cobjs from '../client/commmodel';
import { Scope, Domain, ChangeLog, AppClient, Resource, Permission, Application, Action, ClientGroupRole, ClientGroup, ClientRole, ClientRolePermission, DomainType, ScopeType, BasicAuthClient } from "../model/model";
import { SecMgmtApiClientService } from './sec-mgmt-api-client.service'
import { ContextMgmtApiClientService } from './context-mgmt-api-client.service'

@Injectable({
  providedIn: 'root'
})
export class CommonCallsService {

  contextClient: ContextMgmtApiClientService;	
  managementClient: SecMgmtApiClientService;
	
	constructor (mgmtClient: SecMgmtApiClientService,conClient: ContextMgmtApiClientService)
	{
    this.contextClient = conClient;
    this.managementClient = mgmtClient;
  }

  async loadViewableApps (): Promise<Array<Application>>
  {
    let sar = new cobjs.SearchApplicationsRequest;
    let sarr = await this.managementClient.searchApplications(sar).toPromise();
    return sarr.applications;
  }

  async loadViewableActions (): Promise<Array<Action>>
  {
    let sar = new cobjs.SearchActionRequest();
    let sarr = await this.managementClient.searchActions(sar).toPromise();
    return sarr.actions;
  }

  async loadViewableBasicAuthClients (): Promise<Array<BasicAuthClient>>
  {
    let sar = new cobjs.SearchBasicAuthClientRequest()
    let sarr = await this.managementClient.searchBasicAuthClients(sar).toPromise();
    return sarr.basicAuthClients;
  }


  async loadViewableResources (): Promise<Array<Resource>>
  {
    let sar = new cobjs.SearchResourceRequest();
    let sarr = await this.managementClient.searchResources(sar).toPromise();
    return sarr.resources;
  }

  async loadViewableClients (): Promise<Array<AppClient>>
  {
    let sar = new cobjs.SearchClientRequest();
    let sarr = await this.managementClient.searchClients(sar).toPromise();
    return sarr.clients;
  }


  async loadViewableClientGroups (): Promise<Array<ClientGroup>>
  {
    let sar = new cobjs.SearchClientGroupRequest();
    let sarr = await this.managementClient.searchClientGroups(sar).toPromise();
    return sarr.clientGroups;
  }  

  async loadViewableClientRoles (): Promise<Array<ClientRole>>
  {
    let sar = new cobjs.SearchClientRoleRequest();
    let sarr = await this.managementClient.searchClientRoles(sar).toPromise();
    return sarr.clientRoles;
  } 
  
  async loadViewableDomainTypes (): Promise<Array<DomainType>>
  {
    let sar = new cobjs.SearchDomainTypeRequest();
    let sarr = await this.managementClient.searchDomainTypes(sar).toPromise();
    return sarr.domainTypes;
  } 

  async loadViewableScopeTypes (): Promise<Array<ScopeType>>
  {
    let sar = new cobjs.SearchScopeTypeRequest();
    let sarr = await this.managementClient.searchScopeTypes(sar).toPromise();
    return sarr.scopeTypes;
  } 
  

  async loadViewablePermissions (): Promise<Array<Permission>>
  {
    let sar = new cobjs.SearchPermissionRequest();
    let sarr = await this.managementClient.searchPermissions(sar).toPromise();
    return sarr.permissions;
  }
  
  async loadViewableDomains (): Promise<Array<Domain>>
  {
    let sar = new cobjs.SearchDomainRequest();
    let sarr = await this.managementClient.searchDomains(sar).toPromise();
    return sarr.domains;
  }  

  async loadViewableScopes (): Promise<Array<Scope>>
  {
    let sar = new cobjs.SearchScopeRequest();
    let sarr = await this.managementClient.searchScope(sar).toPromise();
    return sarr.scopes;
  }  

  async hasPermission (action: string, resource:string): Promise<boolean>
  {
      let sar = new cobjs.SecurityAPIRequest;
      sar.action = action;
      sar.resource = resource;
      let sarr = await this.contextClient.hasPermission(sar).toPromise();
      return sarr.result;
  }

}