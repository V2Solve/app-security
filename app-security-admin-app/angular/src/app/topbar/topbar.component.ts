import { Component, OnInit } from '@angular/core';
import * as sobjs from 'src/assets/domainmodel/appsecuritymodel';
import { HttpClient, HttpHeaders, HttpParams, HttpXsrfTokenExtractor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError, observable, pipe } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ContextMgmtApiClientService } from 'src/assets/domainmodel/context-mgmt-api-client.service';
import { MenuItem } from 'src/app/base-comps/commonforms'
import { BaseForm } from 'src/app/base-comps/commonforms'
import {LoaderServiceService} from 'src/app/loader-service.service';


@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent extends BaseForm implements OnInit 
{
  apiClient:  ContextMgmtApiClientService;
  spinBarVisibility: boolean = false;

  loggedInUser: string = "NotloggedIn";

  constructor(client: ContextMgmtApiClientService,private loadService: LoaderServiceService)
  { 
    super ();
    this.apiClient = client;
  }

  allMenuItems: Array<MenuItem> = new Array<MenuItem>();
  
  setUpMenuBasedOnPermission (secApiRequest: sobjs.SecurityAPIRequest,resources: string[],mi: Array<MenuItem>): void
  {
      secApiRequest.resources = resources;
      let observable = this.apiClient.hasPermissions(secApiRequest);
      observable.subscribe((value: sobjs.SecurityAPIResponse) => {
        let count = 0;
        if (value.results != null)
        {
          value.results.forEach(element => {
            if (element == true)
            {
              this.allMenuItems.push(mi[count]);
              count++;
            }
          });
        }
      });
  }

  figureOutMenutItems ()
  {
      this.allMenuItems.length = 0; // Clear the menu Items.
      let secApiRequest = new sobjs.SecurityAPIRequest ();
      secApiRequest.action = sobjs.SecurityActions.READ;
      let resources = new Array<string>();
      let menuItems = new Array<MenuItem>();

      {
        let item = new MenuItem("Actions","Manage Actions","/actionManagement");
        item.imageLink="rowing";
        resources.push(sobjs.SecurityResources.ACTION);
        menuItems.push(item);
      }

      {
        let item = new MenuItem("Applications","Manage Applications","/appManagement");
        resources.push(sobjs.SecurityResources.APPLICATION);
        item.imageLink="apps";
        menuItems.push(item);
      }

      {
        let item = new MenuItem("Clients","Manage clients","/clientManagement");
        resources.push(sobjs.SecurityResources.CLIENT);
        item.imageLink="person";
        menuItems.push(item);
      }

      {
        let item = new MenuItem("Permissions","Manage Permissions","/permissionManagement");
        resources.push(sobjs.SecurityResources.PERMISSION);
        item.imageLink="lock";
        menuItems.push(item);
      }
      
      {
        let item = new MenuItem("Resources","Manage Resources","/resourceManagement");
        resources.push(sobjs.SecurityResources.RESOURCE);
        item.imageLink="grain";
        menuItems.push(item);
      }

      {
        let item = new MenuItem("Domains","Manage resource actions","/domainManagement");
        resources.push(sobjs.SecurityResources.RESOURCE_DOMAIN);
        item.imageLink="public";
        menuItems.push(item);
      }

      {
        let item = new MenuItem("Groups","Manage Client Groups","/clientGroupManagement");
        resources.push(sobjs.SecurityResources.CLIENT_GROUP);
        item.imageLink="group";
        menuItems.push(item);
      }

      {
        let item = new MenuItem("Group-Roles","Manage Role that Groups have","/groupRoleManagement");
        resources.push(sobjs.SecurityResources.GROUP_ROLE_MEMBERSHIP);
        item.imageLink="recent_actors";
        menuItems.push(item);
      }


      {
        let item = new MenuItem("Roles","Manage Roles","/clientRoleManagement");
        resources.push(sobjs.SecurityResources.CLIENT_ROLE);
        item.imageLink="school";
        menuItems.push(item);
      }

      {
        let item = new MenuItem("Role to Permission","Manage Roles to Permission Mapping","/rolePermissionManagement");
        resources.push(sobjs.SecurityResources.PERMISSION_ROLE_MEMBERSHIP);
        item.imageLink="psychology";
        menuItems.push(item);
      }

      {
        let item = new MenuItem("Scope-Types","Manage types of scopes in the system.","/scopetypeManagement");
        resources.push(sobjs.SecurityResources.SCOPE_TYPE);
        item.imageLink="panorama_vertical";
        menuItems.push(item);

      }

      {
        let item = new MenuItem("Scope","Manage scopes in the system.","/scopeManagement");
        resources.push(sobjs.SecurityResources.ROLE_SCOPE);
        item.imageLink="panorama_horizontal";
        menuItems.push(item);

      }

      {
        let item = new MenuItem("Memberships","Manage Group Memberships","/clientToGroups");
        resources.push(sobjs.SecurityResources.CLIENT_GROUP_MEMBERSHIP);
        item.imageLink="group_add";
        menuItems.push(item);
      }

      {
        let item = new MenuItem("Domain-Types","Manage Resource Domain Types","/domaintypeManagement");
        resources.push(sobjs.SecurityResources.RESOURCE_DOMAIN_TYPE);
        item.imageLink="grain";
        menuItems.push(item);
      }

      {
        let item = new MenuItem("ChangeLogs","View Change Logs","/viewChangeLogs");
        resources.push(sobjs.SecurityResources.CHANGE_LOG);
        item.imageLink="change_history";
        menuItems.push(item);
      }

      this.setUpMenuBasedOnPermission(secApiRequest,resources,menuItems);
  }

  figureOutLoggedInUser ()
  {
    let req = new sobjs.SecurityAPIRequest();
    this.apiClient.getSecurityContext(req).subscribe(element=>{
      if (element.status.statusCode = sobjs.RequestStatusInformation.standardSuccessCode)
      {
      this.loggedInUser = element.clientSecurityContext.client.clientIdentifier;
      if (this.loggedInUser == null || this.loggedInUser.length<=0)
        this.loggedInUser = "Unknown.";
    } else 
      {
        this.loggedInUser="Error fetching user info.";
      }
      },pipe=>{
      this.loggedInUser="Error!";
    })   
  }

  ngOnInit(): void 
  {
      this.figureOutLoggedInUser ();
      this.figureOutMenutItems();
      // console.log("Subscribing to the loadService..");
      this.loadService.httpProgress().subscribe(element=>{
          this.spinBarVisibility = element;
      });
  }
  
}