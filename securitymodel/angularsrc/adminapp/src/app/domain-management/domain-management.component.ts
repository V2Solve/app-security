import { Component, OnInit } from '@angular/core';
import { BaseForm } from '../base-comps/commonforms';
import { CommonCallsService } from 'src/assets/domainmodel/common-calls.service';
import { MatTableDataSource } from '@angular/material/table';
import { ResultRow, CellInfo } from '../results-table/results-table.component';
import { Application, Domain, CreateDomainRequest, RequestStatusInformation, DeleteDomainRequest, DomainType } from 'src/assets/domainmodel/appsecuritymodel';
import { SecMgmtApiClientService } from 'src/assets/domainmodel/sec-mgmt-api-client.service';
import { FormControl } from '@angular/forms';
import { timestamp } from 'rxjs/operators';

@Component({
  selector: 'app-domain-management',
  templateUrl: './domain-management.component.html',
  styleUrls: ['./domain-management.component.css']
})
export class DomainManagementComponent extends BaseForm implements OnInit 
{

  // The type of domain that you are creating..
  domainType: string;

  // The name of the parent domain if any..
  parentDomain: string;

  objectName = new FormControl('');
  objectDescription = new FormControl ('');

  appIdentifier: string;

  viewableObjects     = new Array<Domain> ();
  viewableApps        = new Array<Application>();
  viewableParents     = new Array<Domain>();
  viewableDomainTypes = new Array<DomainType>();

  currentKey: string;
  
  displayedColumns = ['Name','Type','Parent','Description','Owner App'];
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

                  if (rr.parentDomain == null || rr.parentDomain.length <= 0)
                  this.parentDomain = "<ROOT>";
                  else
                  this.parentDomain = rr.parentDomain;


                  this.domainType = rr.domainType;

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
     car.domainType = this.domainType;
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
      values.forEach(element=>{
        this.viewableApps.push(element);
      })
    });
  }


  loadViewableDomainTypes ()
  {
    this.viewableDomainTypes.length = 0;
    this.callService.loadViewableDomainTypes().then(values=>{
    
      if (values != null) 
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

      if (values != null)
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
    this.callService.loadViewableDomains().then(values=>{
      if (values != null)
      {
        values.forEach(element=>{
          this.viewableObjects.push(element);
          let ci = new Array<CellInfo> ();
          ci.push(new CellInfo(element.name));
          ci.push(new CellInfo(element.domainType));
          ci.push(new CellInfo(element.parentDomain));
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
    this.formTitle="Manage Domains"
    this.loadViewableApps();
    this.loadViewableDomainTypes();
    this.loadViewableParents();
    this.loadViewableObjects();
  }  

}