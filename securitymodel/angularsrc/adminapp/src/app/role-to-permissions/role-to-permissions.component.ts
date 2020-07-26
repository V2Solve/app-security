import { Component, OnInit } from '@angular/core';
import { BaseForm } from '../base-comps/commonforms';
import { ClientGroup, ClientRole, ClientGroupRole, Scope, Application, Domain, DeleteClientGroupRoleRequest, RequestStatusInformation, CreateClientGroupRoleRequest, SearchClientGroupRoleRequest, Permission, ClientRolePermission, DeleteClientRolePermissionRequest, CreateClientRolePermissionRequest, SearchClientRolePermissionRequest, SecurityResources } from 'src/assets/domainmodel/appsecuritymodel';
import { CommonCallsService } from 'src/assets/domainmodel/common-calls.service';
import { SecMgmtApiClientService } from 'src/assets/domainmodel/sec-mgmt-api-client.service';
import { MatTableDataSource } from '@angular/material/table';
import { ResultRow, CellInfo } from '../results-table/results-table.component';
import { timestamp } from 'rxjs/operators';
import { FormControl, Validators, FormGroup } from '@angular/forms';

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

  permissionValue = new FormControl('',[Validators.required,Validators.maxLength(50)]); // allow,deny

  formGroup = new FormGroup({"roleName":this.roleName,"permissionName":this.permissionName,"permissionValue":this.permissionValue});

  // the selected appidentifier
  appIdentifier: string;

  // the selected permission value..
  
  permissionValues = ["allow","deny"];

  // The roles that are available to be assigned.
  viewableRoles: Array<ClientRole> = new Array<ClientRole>();

  // The groups that are viewable by the person.
  viewablePermissions: Array<Permission> = new Array<Permission>();

  // THe objects that we are managing.
  viewableObjects     = new Array<ClientRolePermission> ();

  viewableApps        = new Array<Application>();

  currentKey: string;
  
  displayedColumns = ['Select','RoleName','Permission','Value','Owner App'];
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
     car.appIdentifier = this.appIdentifier;
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
      values.forEach(element=>{
        this.viewableRoles.push(element);
      })
    });
  }

  loadViewablePermissions ()
  {
    this.viewablePermissions.length=0;
    this.callService.loadViewablePermissions().then(values=>{
      values.forEach(element=>{
        this.viewablePermissions.push(element);
      })
    });
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
    scgrr.appIdentifier = this.appIdentifier;
    this.managementClient.searchClientRolePermissions(scgrr).subscribe(element=>{

      if (element != null && element.clientRolePermissions != null)
      {
         element.clientRolePermissions.forEach(cgr=>{
          this.viewableObjects.push(cgr);
          let ci = new Array<CellInfo> ();
          ci.push(new CellInfo(cgr.key));
          ci.push(new CellInfo(cgr.roleName));
          ci.push(new CellInfo(cgr.permissionName));
          ci.push(new CellInfo(cgr.value));
          ci.push(new CellInfo(cgr.appIdentifier));
          let rr = new ResultRow(cgr.key,ci);
          this.formResults.push(rr);
         })
      }
      this.dataSource.data=this.formResults;
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
      values.forEach(element=>{
        this.viewableApps.push(element);
      })
    });
  }
 

  ngOnInit(): void 
  {
    this.formTitle = "Manage Role to Permission Mappings."
    this.loadViewableRoles ();
    this.loadViewablePermissions ();
    this.loadViewableObjects ();
    this.loadViewableApps ();
    this.roleName.valueChanges.subscribe(event=>{
      this.reloadObjects();
    })

    this.updatePermissionFlags(SecurityResources.PERMISSION_ROLE_MEMBERSHIP,this.callService);
  }

}
