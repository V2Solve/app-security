import { Component, OnInit } from '@angular/core';
import { BaseForm } from '../base-comps/commonforms';

import { MatTableDataSource } from '@angular/material/table';
import { ResultRow, CellInfo } from '../results-table/results-table.component';
import { FormControl, Validators, FormGroup } from '@angular/forms';

// Import Services..
import { SecMgmtApiClientService } from '../../../../../../modules/app-security-client/type-script/src/client-service/sec-mgmt-api-client.service';
import { CommonCallsService } from '../../../../../../modules/app-security-client/type-script/src/client-service/common-calls.service'

// Import Communication Model..
import { RequestStatusInformation, CreateDomainRequest, DeleteDomainRequest}  from '../../../../../../modules/app-security-client/type-script/src/client/commmodel';

// Import Security Model
import { Application,Domain,DomainType } from '../../../../../../modules/app-security-client/type-script/src/model/model';

// Import constants.
import { SecurityResources } from '../../../../../../modules/app-security-client/type-script/src/constants/constants';

@Component({
  selector: 'app-domain-management',
  templateUrl: './domain-management.component.html',
  styleUrls: ['./domain-management.component.css']
})
export class DomainManagementComponent extends BaseForm implements OnInit 
{
  // The type of domain that you are creating..
  domainType= new FormControl('',[Validators.required]);

  // The name of the parent domain if any..
  parentDomain: string;

  objectName = new FormControl('',[Validators.required,Validators.maxLength(50)]);
  objectDescription = new FormControl ('',[Validators.maxLength(1024)]);
  
  appIdentifier: string;

  formGroup = new FormGroup({"objectName":this.objectName,"objectDescription":this.objectDescription,"domainType":this.domainType});

  viewableObjects     = new Array<Domain> ();
  viewableApps        = new Array<Application>();
  viewableParents     = new Array<Domain>();
  viewableDomainTypes = new Array<DomainType>();

  currentKey: string;
  
  displayedColumns = ['Select','Name','Type','Parent','Description','Owner App'];
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

                  if (rr.parentDomain == null || rr.parentDomain.name == null || rr.parentDomain.name.length <= 0)
                  this.parentDomain = "<ROOT>";
                  else
                  this.parentDomain = rr.parentDomain.name;


                  this.domainType.setValue(rr.domainType);
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
     let car = new CreateDomainRequest ();
     car.name = this.objectName.value;
     car.description = this.objectDescription.value;
     car.appIdentifier = this.appIdentifier;
     car.domainType = this.domainType.value;
     car.parentDomain = this.parentDomain;
     if (car.appIdentifier == "GLOBAL")
     car.appIdentifier = null;
     if (car.parentDomain == "<ROOT>")
     car.parentDomain = null;
     this.managementClient.createDomain(car).subscribe(value=>{
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
     let car = new DeleteDomainRequest ();
     car.name = this.objectName.value;
     this.managementClient.deleteDomain(car).subscribe(value=>{
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
    if (values != null && values != undefined) {
      values.forEach(element=>{
        this.viewableApps.push(element);
      })
    }

    });
  }


  loadViewableDomainTypes ()
  {
    this.viewableDomainTypes.length = 0;
    this.callService.loadViewableDomainTypes().then(values=>{
    
      if (values != null && values != undefined)  
      {
        values.forEach(element=>{
          this.viewableDomainTypes.push(element);
        })
      }

    });
  }

  loadViewableParents ()
  {
    this.viewableParents.length = 0;
    let dom = new Domain("<ROOT>","<ROOT>");
    this.viewableParents.push(dom);
    this.callService.loadViewableDomains().then(values=>{

      if (values != null && values != undefined) 
      {
        values.forEach(element=>{
          this.viewableParents.push(element);
        })
      }

    });
  }


  loadViewableObjects ()
  {
    this.viewableObjects.length=0;
    this.formResults.length = 0;
    this.callService.loadViewableDomains().then(values=>
    {
      if (values != null && values != undefined) 
      {
        values.forEach(element=>{
          this.viewableObjects.push(element);
          let ci = new Array<CellInfo> ();
          ci.push(new CellInfo(element.name));
          ci.push(new CellInfo(element.name));
          ci.push(new CellInfo(element.domainType));
          if (element.parentDomain != null && element.parentDomain != undefined)
          {
            ci.push(new CellInfo(element.parentDomain.name));
          }
          else
          {
            ci.push(new CellInfo("<ROOT>"));
          }
          ci.push(new CellInfo(element.description));
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
    this.formTitle="Manage Domains";
    this.loadViewableApps();
    this.loadViewableDomainTypes();
    this.loadViewableParents();
    this.loadViewableObjects();
    this.updatePermissionFlags(SecurityResources.RESOURCE_DOMAIN,this.callService);
  }

}