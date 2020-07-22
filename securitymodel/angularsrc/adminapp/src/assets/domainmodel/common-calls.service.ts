import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpXsrfTokenExtractor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import * as sobjs from 'src/assets/domainmodel/appsecuritymodel';
import { environment } from 'src/environments/environment';
import { SecMgmtApiClientService } from 'src/assets/domainmodel/sec-mgmt-api-client.service'
import { ContextMgmtApiClientService } from 'src/assets/domainmodel/context-mgmt-api-client.service'

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

  async loadViewableApps (): Promise<Array<sobjs.Application>>
  {
    let sar = new sobjs.SearchApplicationsRequest;
    let sarr = await this.managementClient.searchApplications(sar).toPromise();
    return sarr.applications;
  }

  async loadViewableActions (): Promise<Array<sobjs.Action>>
  {
    let sar = new sobjs.SearchActionRequest();
    let sarr = await this.managementClient.searchActions(sar).toPromise();
    return sarr.actions;
  }

  async loadViewableResources (): Promise<Array<sobjs.Resource>>
  {
    let sar = new sobjs.SearchResourceRequest();
    let sarr = await this.managementClient.searchResources(sar).toPromise();
    return sarr.resources;
  }

  async loadViewableClients (): Promise<Array<sobjs.AppClient>>
  {
    let sar = new sobjs.SearchClientRequest();
    let sarr = await this.managementClient.searchClients(sar).toPromise();
    return sarr.clients;
  }


  async loadViewableClientGroups (): Promise<Array<sobjs.ClientGroup>>
  {
    let sar = new sobjs.SearchClientGroupRequest();
    let sarr = await this.managementClient.searchClientGroups(sar).toPromise();
    return sarr.clientGroups;
  }  

  async loadViewableClientRoles (): Promise<Array<sobjs.ClientRole>>
  {
    let sar = new sobjs.SearchClientRoleRequest();
    let sarr = await this.managementClient.searchClientRoles(sar).toPromise();
    return sarr.clientRoles;
  } 
  
  async loadViewableDomainTypes (): Promise<Array<sobjs.DomainType>>
  {
    let sar = new sobjs.SearchDomainTypeRequest();
    let sarr = await this.managementClient.searchDomainTypes(sar).toPromise();
    return sarr.domainTypes;
  } 

  async loadViewableScopeTypes (): Promise<Array<sobjs.ScopeType>>
  {
    let sar = new sobjs.SearchScopeTypeRequest();
    let sarr = await this.managementClient.searchScopeTypes(sar).toPromise();
    return sarr.scopeTypes;
  } 
  

  async loadViewablePermissions (): Promise<Array<sobjs.Permission>>
  {
    let sar = new sobjs.SearchPermissionRequest();
    let sarr = await this.managementClient.searchPermissions(sar).toPromise();
    return sarr.permissions;
  }
  
  async loadViewableDomains (): Promise<Array<sobjs.Domain>>
  {
    let sar = new sobjs.SearchDomainRequest();
    let sarr = await this.managementClient.searchDomains(sar).toPromise();
    return sarr.domains;
  }  

  async loadViewableScopes (): Promise<Array<sobjs.Scope>>
  {
    let sar = new sobjs.SearchScopeRequest();
    let sarr = await this.managementClient.searchScope(sar).toPromise();
    return sarr.scopes;
  }  

  async hasPermission (action: string, resource:string): Promise<boolean>
  {
      let sar = new sobjs.SecurityAPIRequest;
      sar.action = action;
      sar.resource = resource;
      let sarr = await this.contextClient.hasPermission(sar).toPromise();
      return sarr.result;
  }

}