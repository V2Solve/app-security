import { Component, OnInit } from '@angular/core';
import { BaseForm } from '../base-comps/commonforms';
import { CommonCallsService } from 'src/assets/domainmodel/common-calls.service';
import { MatTableDataSource } from '@angular/material/table';
import { ResultRow, CellInfo } from '../results-table/results-table.component';
import { Application, Domain, CreateDomainRequest, RequestStatusInformation, DeleteDomainRequest, DomainType, ScopeType, Scope, CreateScopeRequest, DeleteScopeRequest, SecurityResources } from 'src/assets/domainmodel/appsecuritymodel';
import { SecMgmtApiClientService } from 'src/assets/domainmodel/sec-mgmt-api-client.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { timestamp } from 'rxjs/operators';


@Component({
  selector: 'app-scope-management',
  templateUrl: './scope-management.component.html',
  styleUrls: ['./scope-management.component.css']
})
export class ScopeManagementComponent extends BaseForm implements OnInit {

  // The type of Scope that you are creating..
  scopeType = new FormControl('',[Validators.required]);

  objectName = new FormControl('',[Validators.required,Validators.maxLength(50)]);
  objectDescription = new FormControl ('',[Validators.maxLength(1024)]);
  objectValue = new FormControl('',[Validators.required,Validators.maxLength(1024)]);
  
  formGroup = new FormGroup({"scopeType":this.scopeType,"objectName":this.objectName,"objectDescription":this.objectDescription,"objectValue":this.objectValue});
  
  appIdentifier: string;

  viewableObjects     = new Array<Scope> ();
  viewableApps        = new Array<Application>();
  viewableScopeTypes = new Array<ScopeType>();

  currentKey: string;
  
  displayedColumns = ['Select','Name','Type','Value','Description','Owner App'];
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
          if (element.scopeName == this.currentKey)
          {
              let rr = element;            
              if (rr != undefined)
              {
                if (rr.appIdentifier == null || rr.appIdentifier.length <= 0)
                    this.appIdentifier = "GLOBAL"
                  else 
                  this.appIdentifier = rr.appIdentifier;

                  this.scopeType.setValue(rr.scopeType);

                  this.objectDescription.setValue(rr.description);
                  this.objectName.setValue(rr.scopeName);
                  this.setInfoMessage("Updated selected value..");
              }
              return;
          }
      });
    }
  }

  updateObject ()
  {
     let car = new CreateScopeRequest ();
     car.name = this.objectName.value;
     car.description = this.objectDescription.value;
     car.value = this.objectValue.value;
     car.scopeType = this.scopeType.value;
     car.appIdentifier = this.appIdentifier;
     if (car.appIdentifier == "GLOBAL")
     car.appIdentifier = null;
     this.managementClient.createScope(car).subscribe(value=>{
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
     let car = new DeleteScopeRequest ();
     car.name = this.objectName.value;
     this.managementClient.deleteScope(car).subscribe(value=>{
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


  loadViewableScopeTypes ()
  {
    this.viewableScopeTypes.length = 0;
    this.callService.loadViewableScopeTypes().then(values=>{
    
      if (values != null && values != undefined) 
      {
        values.forEach(element=>{
          this.viewableScopeTypes.push(element);
        })
      }

    });
  }

  loadViewableObjects ()
  {
    this.viewableObjects.length=0;
    this.formResults.length = 0;
    this.callService.loadViewableScopes().then(values=>{
      if (values != null && values != undefined)
      {
        values.forEach(element=>{
          this.viewableObjects.push(element);
          let ci = new Array<CellInfo> ();
          ci.push(new CellInfo(element.scopeName));
          ci.push(new CellInfo(element.scopeName));
          ci.push(new CellInfo(element.scopeType));
          ci.push(new CellInfo(element.scopeValue));
          ci.push(new CellInfo(element.description));
          ci.push(new CellInfo(element.appIdentifier));
          let rr = new ResultRow(element.scopeName,ci);
          this.formResults.push(rr);
        })
      }

      this.dataSource.data=this.formResults;
      
    });
  }

  ngOnInit(): void 
  {
    this.formTitle="Manage Scopes"
    this.loadViewableApps();
    this.loadViewableScopeTypes();
    this.loadViewableObjects();
    this.updatePermissionFlags(SecurityResources.ROLE_SCOPE,this.callService);
  }  


}
