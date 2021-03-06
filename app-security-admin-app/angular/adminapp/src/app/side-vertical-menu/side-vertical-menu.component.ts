import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'src/app/base-comps/commonforms'
import { BaseForm } from 'src/app/base-comps/commonforms'
import {LoaderServiceService} from 'src/app/loader-service.service';

// Import Services..
import { ContextMgmtApiClientService } from '../../../../../../modules/app-security-client/type-script/src/client-service/context-mgmt-api-client.service'

import * as cobjs from '../../../../../../modules/app-security-client/type-script/src/client/commmodel';

// Import constants.
import * as constants from '../../../../../../modules/app-security-client/type-script/src/constants/constants';

@Component({
  selector: 'app-side-vertical-menu',
  templateUrl: './side-vertical-menu.component.html',
  styleUrls: ['./side-vertical-menu.component.css']
})
export class SideVerticalMenuComponent extends BaseForm implements OnInit 
{
  apiClient:  ContextMgmtApiClientService;

  constructor(client: ContextMgmtApiClientService,private loadService: LoaderServiceService)
  { 
    super ();
    this.apiClient = client;
  }

  allMenuItems: Array<MenuItem> = new Array<MenuItem>();
  
  setUpMenuBasedOnPermission (secApiRequest: cobjs.SecurityAPIRequest,resources: string[],mi: Array<MenuItem>): void
  {
      secApiRequest.resources = resources;
      let observable = this.apiClient.hasPermissions(secApiRequest);
      observable.subscribe((value: cobjs.SecurityAPIResponse) => {
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
      let secApiRequest = new cobjs.SecurityAPIRequest ();
      secApiRequest.action = constants.SecurityActions.READ;
      let resources = new Array<string>();
      let menuItems = new Array<MenuItem>();

      {
        let item = new MenuItem("Actions","Manage Actions","/actionManagement");
        item.imageLink="rowing";
        resources.push(constants.SecurityResources.ACTION);
        menuItems.push(item);
      }

      {
        let item = new MenuItem("Applications","Manage Applications","/appManagement");
        resources.push(constants.SecurityResources.APPLICATION);
        item.imageLink="apps";
        menuItems.push(item);
      }

      {
        let item = new MenuItem("Clients","Manage clients","/clientManagement");
        resources.push(constants.SecurityResources.CLIENT);
        item.imageLink="person";
        menuItems.push(item);
      }

      {
        let item = new MenuItem("Permissions","Manage Permissions","/permissionManagement");
        resources.push(constants.SecurityResources.PERMISSION);
        item.imageLink="lock";
        menuItems.push(item);
      }
      
      {
        let item = new MenuItem("Resources","Manage Resources","/resourceManagement");
        resources.push(constants.SecurityResources.RESOURCE);
        item.imageLink="grain";
        menuItems.push(item);
      }

      {
        let item = new MenuItem("Domains","Manage resource actions","/domainManagement");
        resources.push(constants.SecurityResources.RESOURCE_DOMAIN);
        item.imageLink="public";
        menuItems.push(item);
      }

      {
        let item = new MenuItem("Groups","Manage Client Groups","/clientGroupManagement");
        resources.push(constants.SecurityResources.CLIENT_GROUP);
        item.imageLink="group";
        menuItems.push(item);
      }

      {
        let item = new MenuItem("Group-Roles","Manage Role that Groups have","/groupRoleManagement");
        resources.push(constants.SecurityResources.GROUP_ROLE_MEMBERSHIP);
        item.imageLink="recent_actors";
        menuItems.push(item);
      }


      {
        let item = new MenuItem("Roles","Manage Roles","/clientRoleManagement");
        resources.push(constants.SecurityResources.CLIENT_ROLE);
        item.imageLink="school";
        menuItems.push(item);
      }

      {
        let item = new MenuItem("Role to Permission","Manage Roles to Permission Mapping","/rolePermissionManagement");
        resources.push(constants.SecurityResources.PERMISSION_ROLE_MEMBERSHIP);
        item.imageLink="psychology";
        menuItems.push(item);
      }

      {
        let item = new MenuItem("Scope-Types","Manage types of scopes in the system.","/scopetypeManagement");
        resources.push(constants.SecurityResources.SCOPE_TYPE);
        item.imageLink="panorama_vertical";
        menuItems.push(item);

      }

      {
        let item = new MenuItem("Scope","Manage scopes in the system.","/scopeManagement");
        resources.push(constants.SecurityResources.ROLE_SCOPE);
        item.imageLink="panorama_horizontal";
        menuItems.push(item);

      }

      {
        let item = new MenuItem("Memberships","Manage Group Memberships","/clientToGroups");
        resources.push(constants.SecurityResources.CLIENT_GROUP_MEMBERSHIP);
        item.imageLink="group_add";
        menuItems.push(item);
      }

      {
        let item = new MenuItem("Domain-Types","Manage Resource Domain Types","/domaintypeManagement");
        resources.push(constants.SecurityResources.RESOURCE_DOMAIN_TYPE);
        item.imageLink="grain";
        menuItems.push(item);
      }

      {
        let item = new MenuItem("ChangeLogs","View Change Logs","/viewChangeLogs");
        resources.push(constants.SecurityResources.CHANGE_LOG);
        item.imageLink="change_history";
        menuItems.push(item);
      }

      this.setUpMenuBasedOnPermission(secApiRequest,resources,menuItems);
  }
  
  ngOnInit(): void 
  {
      this.figureOutMenutItems();
  }
}
