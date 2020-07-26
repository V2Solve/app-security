import { Component, OnInit } from '@angular/core';
import { BaseForm } from '../base-comps/commonforms';
import { CommonCallsService } from 'src/assets/domainmodel/common-calls.service';
import { MatTableDataSource } from '@angular/material/table';
import { ResultRow, CellInfo } from '../results-table/results-table.component';
import { Application, Permission, CreatePermissionRequest, RequestStatusInformation, DeletePermissionRequest, Action, Resource, SecurityResources } from 'src/assets/domainmodel/appsecuritymodel';
import { SecMgmtApiClientService } from 'src/assets/domainmodel/sec-mgmt-api-client.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { timestamp } from 'rxjs/operators';


@Component({
  selector: 'app-permission-management',
  templateUrl: './permission-management.component.html',
  styleUrls: ['./permission-management.component.css']
})
export class PermissionManagementComponent extends BaseForm implements OnInit 
{

  actionName = new FormControl('',[Validators.required,Validators.maxLength(50)]);
  resourceName = new FormControl('',[Validators.required,Validators.maxLength(50)]);
  objectName = new FormControl('',[Validators.required,Validators.maxLength(50)]);
  objectDescription = new FormControl ('',[Validators.maxLength(1024)]);

  formGroup = new FormGroup({"objectName":this.objectName,"objectDescription":this.objectDescription,"actionName":this.actionName,"resourceName":this.resourceName});
  
  appIdentifier: string;

  viewableObjects   = new Array<Permission> ();
  viewableApps      = new Array<Application>();
  viewableActions   = new Array<Action>();
  viewableResources = new Array<Resource>();

  currentKey: string;
  
  displayedColumns = ['Select','Name','Action','Resource','Description','Owner App'];
  dataSource = new MatTableDataSource<ResultRow>(this.formResults);

  callService: CommonCallsService;
  managementClient: SecMgmtApiClientService;

  constructor(callService: CommonCallsService,client: SecMgmtApiClientService)
  {
    super(); 
    this.callService = callService;
    this.managementClient = client;
  }

  rowSelected (key: string)
  {
    this.currentKey = key;
    if (this.currentKey != undefined)
    {
      this.viewableObjects.forEach(element=>{
          if (element.name == this.currentKey)
          {
              let rr = element;            
              if (rr != undefined)
              {
                if (rr.appIdentifier == null || rr.appIdentifier.length <= 0)
                    this.appIdentifier = "GLOBAL"
                  else 
                  this.appIdentifier = rr.appIdentifier;
                  this.actionName.setValue(rr.action);
                  this.resourceName.setValue(rr.resource);
                  this.objectDescription.setValue(rr.description);
                  this.objectName.setValue(rr.name);
                  this.setInfoMessage("Updated selected value..");
              }
              return;
          }
      });
    }
  }

  updateObject ()
  {
     let car = new CreatePermissionRequest ();
     car.name = this.objectName.value;
     car.description = this.objectDescription.value;
     car.appIdentifier = this.appIdentifier;
     car.actionName = this.actionName.value;
     car.resourceName = this.resourceName.value;
     if (car.appIdentifier == "GLOBAL")
     car.appIdentifier = null;
     this.managementClient.createPermission(car).subscribe(value=>{
        console.log(value.status.statusMessage);
        if (value.status.statusCode == RequestStatusInformation.standardSuccessCode)
          this.setInfoMessage(value.status.statusMessage)
          else
          this.setErrorMessage(value.status.statusMessage);
        this.loadViewableObjects();
     }, error => {
      console.log(JSON.stringify(error));
      this.setErrorMessage("Failed to create/update record.. check browser console for logs");
     });
  }

  deleteObject ()
  {
     let car = new DeletePermissionRequest ();
     car.name = this.objectName.value;
     this.managementClient.deletePermission(car).subscribe(value=>{
        console.log(value.status.statusMessage);
        if (value.status.statusCode == RequestStatusInformation.standardSuccessCode)
          this.setInfoMessage(value.status.statusMessage)
          else
          this.setErrorMessage(value.status.statusMessage);
        this.loadViewableObjects();
     },error=>{
      console.log(JSON.stringify(error));
      this.setErrorMessage("Failed to delete action.. check browser console for logs");
     });
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


  loadViewableResources ()
  {
    this.viewableResources.length = 0;
    this.callService.loadViewableResources().then(values=>{
      values.forEach(element=>{
        this.viewableResources.push(element);
      })
    });
  }

  loadViewableActions ()
  {
    this.viewableActions.length = 0;
    this.callService.loadViewableActions().then(values=>{
      values.forEach(element=>{
        this.viewableActions.push(element);
      })
    });
  }


  loadViewableObjects ()
  {
    this.viewableObjects.length=0;
    this.formResults.length = 0;
    this.callService.loadViewablePermissions().then(values=>{
      values.forEach(element=>{
        this.viewableObjects.push(element);
        let ci = new Array<CellInfo> ();
        ci.push(new CellInfo(element.name));
        ci.push(new CellInfo(element.name));
        ci.push(new CellInfo(element.action));
        ci.push(new CellInfo(element.resource));
        ci.push(new CellInfo(element.description));
        ci.push(new CellInfo(element.appIdentifier));
        let rr = new ResultRow(element.name,ci);
        this.formResults.push(rr);
      })
      this.dataSource.data=this.formResults;
    });
  }

  ngOnInit(): void 
  {
    console.log("NgInit Permissions");
    this.formTitle="Manage Permissions"
    this.loadViewableApps();
    this.loadViewableActions();
    this.loadViewableResources();
    this.loadViewableObjects();
    this.updatePermissionFlags(SecurityResources.PERMISSION,this.callService);
  }  

}
