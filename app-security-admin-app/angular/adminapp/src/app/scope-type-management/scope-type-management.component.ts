import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

import { BaseForm } from '../base-comps/commonforms';
import { ResultRow, CellInfo } from '../results-table/results-table.component';

// Import Services..
import { SecMgmtApiClientService } from '../../../../../../modules/app-security-client/type-script/src/client-service/sec-mgmt-api-client.service';
import { CommonCallsService } from '../../../../../../modules/app-security-client/type-script/src/client-service/common-calls.service'

// Import Communication Model..
import { CreateScopeTypeRequest, RequestStatusInformation, DeleteScopeTypeRequest} from '../../../../../../modules/app-security-client/type-script/src/client/commmodel';

// Import Security Model
import { Application,ScopeType } from '../../../../../../modules/app-security-client/type-script/src/model/model';

// Import constants.
import { SecurityResources } from '../../../../../../modules/app-security-client/type-script/src/constants/constants';


@Component({
  selector: 'app-scope-type-management',
  templateUrl: './scope-type-management.component.html',
  styleUrls: ['./scope-type-management.component.css']
})
export class ScopeTypeManagementComponent extends BaseForm implements OnInit {

  objectName = new FormControl('',[Validators.required,Validators.maxLength(50)]);
  objectDescription = new FormControl ('',[Validators.maxLength(1024)]);
  
  formGroup = new FormGroup({"objectName":this.objectName,"objectDescription":this.objectDescription});

  appIdentifier: string;

  viewableObjects = new Array<ScopeType> ();
  viewableApps = new Array<Application>();
  currentKey: string;
  
  displayedColumns = ['Select','ScopeType','Owner App'];
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
      
                  // this.objectDescription.setValue(rr.description);
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
     let car = new CreateScopeTypeRequest ();
     // car.description = this.objectDescription.value;
     car.appIdentifier = this.appIdentifier;
     if (car.appIdentifier == "GLOBAL")
     car.appIdentifier = null;
     car.name = this.objectName.value;
     this.managementClient.createScopeType(car).subscribe(value=>{
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
     let car = new DeleteScopeTypeRequest ();
     car.name = this.objectName.value;
     this.managementClient.deleteScopeType(car).subscribe(value=>{
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
    
    if (values != null && values != undefined) {
      values.forEach(element=>{
        this.viewableApps.push(element);
      })
    }

    });
  }

  loadViewableObjects ()
  {
    this.viewableObjects.length=0;
    this.formResults.length = 0;
    this.callService.loadViewableScopeTypes().then(values=>{
      if (values != null && values != undefined)
      {
        values.forEach(element=>{
          this.viewableObjects.push(element);
          let ci = new Array<CellInfo> ();
          ci.push(new CellInfo(element.name));
          ci.push(new CellInfo(element.name));
          // ci.push(new CellInfo(element.description));
          ci.push(new CellInfo(element.appIdentifier));
          let rr = new ResultRow(element.name,ci);
          this.formResults.push(rr);
        })
      }
      this.dataSource.data=this.formResults;
    });
  }

  ngOnInit(): void 
  {
    this.formTitle="Manage Scope Types"
    this.loadViewableApps();
    this.loadViewableObjects();
    this.updatePermissionFlags(SecurityResources.SCOPE_TYPE,this.callService);
  }

}
