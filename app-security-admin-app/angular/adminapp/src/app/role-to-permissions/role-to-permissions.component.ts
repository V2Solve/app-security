import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl, Validators, FormGroup } from '@angular/forms';

import { BaseForm } from '../base-comps/commonforms';
import { ResultRow, CellInfo } from '../results-table/results-table.component';

// Import Services..
import { SecMgmtApiClientService } from '../../../../../../modules/app-security-client/type-script/src/client-service/sec-mgmt-api-client.service';
import { CommonCallsService } from '../../../../../../modules/app-security-client/type-script/src/client-service/common-calls.service'

// Import Communication Model..
import { RequestStatusInformation, DeleteClientRolePermissionRequest, CreateClientRolePermissionRequest, SearchClientRolePermissionRequest, SearchClientRoleResponse, SearchClientRolePermissionResponse } from '../../../../../../modules/app-security-client/type-script/src/client/commmodel';

// Import Security Model
import { Application,ClientRole,Permission,ClientRolePermission, Scope } from '../../../../../../modules/app-security-client/type-script/src/model/model';

// Import constants.
import { SecurityResources } from '../../../../../../modules/app-security-client/type-script/src/constants/constants';

@Component({
  selector: 'app-role-to-permissions',
  templateUrl: './role-to-permissions.component.html',
  styleUrls: ['./role-to-permissions.component.css']
})
export class RoleToPermissionsComponent extends BaseForm implements OnInit 
{
  
  callService: CommonCallsService;
  managementClient: SecMgmtApiClientService;

  constructor(callService: CommonCallsService,client: SecMgmtApiClientService)
  {
    super(); 
    this.callService = callService;
    this.managementClient = client;
  }
  
  // The selected group name.
  roleName = new FormControl('',[Validators.required]);
    // selected permission name
  permissionName = new FormControl('',[Validators.required]);

  // scope name - selected scope name
  scopeName = new FormControl ('',[Validators.maxLength(50)]);

  scopeAssignmentType = new FormControl('',[Validators.maxLength(50)]);

  permissionValue = new FormControl('',[Validators.required,Validators.maxLength(50)]); // allow,deny

  // the selected appidentifier
  appIdentifier = new FormControl ('');


  formGroup = new FormGroup({"roleName":this.roleName,"permissionName":this.permissionName,"permissionValue":this.permissionValue,"scopeName":this.scopeName,"appIdentifier":this.appIdentifier});


  // the selected permission value..
  
  permissionValues = ["allow","deny"];

  // The roles that are available to be assigned.
  viewableRoles: Array<ClientRole> = new Array<ClientRole>();

  // The groups that are viewable by the person.
  viewablePermissions: Array<Permission> = new Array<Permission>();

  // THe objects that we are managing.
  viewableObjects     = new Array<ClientRolePermission> ();

  viewableApps        = new Array<Application>();

  viewableScopes      = new Array<Scope> ();

  currentKey: string;
  
  displayedColumns = ['Select','RoleName','Permission','Value','Scope','Scope Assignment Type','Owner App'];
  dataSource = new MatTableDataSource<ResultRow>(this.formResults);

  rowSelected (key: string)
  {
    this.currentKey = key;
    if (this.currentKey != undefined)
    {
      let dcgr = new DeleteClientRolePermissionRequest ();
      dcgr.key = this.currentKey;
      this.managementClient.deleteClientRolePermission(dcgr).subscribe(element=>{

        if (element.status.statusCode == RequestStatusInformation.standardSuccessCode)
        {
          this.pushInfoMessage(element.status.statusMessage);
        }
        else
        {
          this.pushErrorMessage(element.status.statusMessage);
        }
        this.reloadObjects ();
      },error=>{
        this.pushErrorMessage(JSON.stringify(error));
      })
    }
  }

  updateObject ()
  {
     let car = new CreateClientRolePermissionRequest ();
     car.roleName = this.roleName.value;
     car.permissionName = this.permissionName.value;
     car.value = this.permissionValue.value;
     car.scopeName = this.scopeName.value;
     car.appIdentifier = this.appIdentifier.value;
     car.scopeAssignmentType = this.scopeAssignmentType.value;
     if (car.appIdentifier == "GLOBAL")
     car.appIdentifier = null;
     this.managementClient.createClientRolePermission(car).subscribe(value=>{
        console.log(value.status.statusMessage);
        if (value.status.statusCode == RequestStatusInformation.standardSuccessCode)
          this.setInfoMessage(value.status.statusMessage)
          else
          this.setErrorMessage(value.status.statusMessage);
        this.reloadObjects();
     }, error => {
      console.log(JSON.stringify(error));
      this.setErrorMessage("Failed to create/update record.. check browser console for logs");
     });
  }

  reloadObjects ()
  {
    this.loadViewableObjects ();
  }

  loadViewableRoles ()
  {
    this.viewableRoles.length = 0;
    this.callService.loadViewableClientRoles().then(values=>{
    
    if (values != null && values != undefined) {
      values.forEach(element=>{
        this.viewableRoles.push(element);
      })
    }

    });
  }

  loadViewablePermissions ()
  {
    this.viewablePermissions.length=0;
    this.callService.loadViewablePermissions().then(values=>{
    
    if (values != null && values != undefined) {
      values.forEach(element=>{
        this.viewablePermissions.push(element);
      })
    }

    });
  }

  loadViewableScopes ()
  {
    this.viewableScopes.length=0;
    this.callService.loadViewableScopes().then(values=>{
      if (values != null && values != undefined) 
      {
        values.forEach(element=>{
          this.viewableScopes.push(element);
        })
      }
    });
  }

  async receiveViewableOjects (element: SearchClientRolePermissionResponse)
  {
    this.viewableObjects.length = 0;
    this.formResults.length = 0;
    if (element != null && element.clientRolePermissions != null)
    {
       element.clientRolePermissions.forEach(cgr=>{
        this.viewableObjects.push(cgr);
        let ci = new Array<CellInfo> ();
        ci.push(new CellInfo(cgr.key));
        ci.push(new CellInfo(cgr.roleName));
        ci.push(new CellInfo(cgr.permissionName));
        ci.push(new CellInfo(cgr.value));
        ci.push(new CellInfo(cgr.scopeName));
        ci.push(new CellInfo(cgr.scopeAssignmentType));
        ci.push(new CellInfo(cgr.appIdentifier));
        let rr = new ResultRow(cgr.key,ci);
        this.formResults.push(rr);
       })

      this.dataSource.data=this.formResults;
    }

  }


  loadViewableObjects ()
  {
    this.viewableObjects.length = 0;
    this.formResults.length = 0;
    if (this.roleName.value == null || this.roleName.value == undefined)
    return;

    let scgrr = new SearchClientRolePermissionRequest ();
    scgrr.roleName = this.roleName.value;
    scgrr.permissionName = this.permissionName.value;
    scgrr.appIdentifier = this.appIdentifier.value;
    if (scgrr.appIdentifier == "GLOBAL")
    scgrr.appIdentifier=null;
    scgrr.scopeName = this.scopeName.value;
    this.managementClient.searchClientRolePermissions(scgrr).subscribe(async element=>{
      await this.receiveViewableOjects(element);
    })
  }

  loadViewableApps ()
  {
    this.viewableApps.length = 0;
    let app = new Application();
    app.appIdentifier="GLOBAL";
    app.shortIdentifier="GLOBAL";
    this.viewableApps.push(app);
    this.callService.loadViewableApps().then(values=>{
    
    if (values != null && values != undefined) {
      values.forEach(element=>{
        this.viewableApps.push(element);
      })
    }

    });
  }
 
  clearFormControls ()
  {
    this.roleName.setValue("");
    this.scopeName.setValue("");
    this.permissionName.setValue("");
    this.appIdentifier.setValue("GLOBAL");
    this.scopeAssignmentType.setValue("allow");
  }

  subscribeToChanges ()
  {
    this.roleName.valueChanges.subscribe(event=>{
      this.reloadObjects();
    })
    this.scopeName.valueChanges.subscribe(event=>{
      this.reloadObjects ();
    })
    this.permissionName.valueChanges.subscribe(event=>{
      this.reloadObjects();
    })
    this.appIdentifier.valueChanges.subscribe(event=>{
      this.reloadObjects();
    })
  }


  ngOnInit(): void 
  {
    this.formTitle = "Manage Role to Permission Mappings."
    this.loadViewableRoles ();
    this.loadViewablePermissions ();
    this.loadViewableObjects ();
    this.loadViewableApps ();
    this.loadViewableScopes ();
    this.subscribeToChanges ();
    this.updatePermissionFlags(SecurityResources.PERMISSION_ROLE_MEMBERSHIP,this.callService);
  }

}
