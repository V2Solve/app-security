import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl, Validators, FormGroup } from '@angular/forms';

import { ResultRow, CellInfo } from '../results-table/results-table.component';
import { BaseForm } from '../base-comps/commonforms';

// Import Services..
import { SecMgmtApiClientService } from '../../../../../../modules/app-security-client/type-script/src/client-service/sec-mgmt-api-client.service';
import { CommonCallsService } from '../../../../../../modules/app-security-client/type-script/src/client-service/common-calls.service'

// Import Communication Model..
import { RequestStatusInformation, CreateBasicAuthClientRequest, DeleteBasicAuthClientRequest }  from '../../../../../../modules/app-security-client/type-script/src/client/commmodel';

// Import Security Model
import { Application, BasicAuthClient } from '../../../../../../modules/app-security-client/type-script/src/model/model';

// Import constants.
import { SecurityResources } from '../../../../../../modules/app-security-client/type-script/src/constants/constants';

@Component({
  selector: 'app-basic-user-management',
  templateUrl: './basic-user-management.component.html',
  styleUrls: ['./basic-user-management.component.css']
})
export class BasicUserManagementComponent extends BaseForm implements OnInit {

  objectName     = new FormControl('',[Validators.required,Validators.maxLength(50)]);
  oldPassword    = new FormControl('',[Validators.maxLength(50)])
  newPassword    = new FormControl ('',[Validators.maxLength(50)]);
  disabled: boolean = false;
  
  formGroup = new FormGroup({"objectName":this.objectName,"newPassword":this.newPassword,"oldPassword":this.oldPassword});
  
  appIdentifier: string;

  viewableObjects = new Array<BasicAuthClient> ();
  viewableApps = new Array<Application>();
  currentKey: string;
  
  displayedColumns = ['Select','Username','Enabled?','Owner App'];
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
          if (element.username == this.currentKey)
          {
              let rr = element;            
              if (rr != undefined)
              {
                if (rr.appIdentifier == null || rr.appIdentifier.length <= 0)
                    this.appIdentifier = "GLOBAL"
                  else 
                  this.appIdentifier = rr.appIdentifier;
                  this.objectName.setValue(rr.username);
                  this.newPassword.setValue(null);
                  this.oldPassword.setValue(null);
                  this.disabled = !rr.enabled;
                  this.setInfoMessage("Updated selected value..");
              }
              return;
          }
      });
    }
  }

  updateObject ()
  {
     let car = new CreateBasicAuthClientRequest ();
     car.appIdentifier = this.appIdentifier;
     if (car.appIdentifier == "GLOBAL")
     car.appIdentifier = null;
     car.name = this.objectName.value;
     car.password    = this.newPassword.value;
     car.oldpassword = this.oldPassword.value;
     car.enabled = !(this.disabled);
     this.managementClient.createBasicAuthClient(car).subscribe(value=>{
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
     let car = new DeleteBasicAuthClientRequest ();
     car.name = this.objectName.value;
     this.managementClient.deleteBasicAuthClient(car).subscribe(value=>{
        console.log(value.status.statusMessage);
        if (value.status.statusCode == RequestStatusInformation.standardSuccessCode)
          this.setInfoMessage(value.status.statusMessage)
          else
          this.setErrorMessage(value.status.statusMessage);
        this.loadViewableObjects();
     },error=>{
      console.log(JSON.stringify(error));
      this.setErrorMessage("Failed to delete record.. check browser console for logs");
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

  loadViewableObjects ()
  {
    this.viewableObjects.length=0;
    this.formResults.length = 0;
    this.callService.loadViewableBasicAuthClients().then(values=>{
      if (values != null && values != undefined) {
      values.forEach(element=>{
        this.viewableObjects.push(element);
        let ci = new Array<CellInfo> ();
        ci.push(new CellInfo(element.username));
        ci.push(new CellInfo(element.username));
        ci.push(new CellInfo(""+element.enabled));
        ci.push(new CellInfo(element.appIdentifier));
        let rr = new ResultRow(element.username,ci);
        this.formResults.push(rr);
      })
    }

    this.dataSource.data=this.formResults;

    });
  }

  ngOnInit(): void 
  {
    this.formTitle="Manage Basic Authentication Clients"
    this.loadViewableApps();
    this.loadViewableObjects();
    this.updatePermissionFlags(SecurityResources.BASIC_AUTH_CLIENT,this.callService);
  }

}
