import { Component, OnInit, EventEmitter, Input, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SecMgmtApiClientService } from 'src/assets/domainmodel/sec-mgmt-api-client.service';
import { Action,SearchApplicationsRequest, Application, CreateApplicationRequest, DeleteApplicationRequest, RequestStatusInformation, CreateActionRequest, DeleteActionRequest, SecurityActions, SecurityResources } from 'src/assets/domainmodel/appsecuritymodel';
import { Observable, pipe } from 'rxjs';
import { CommonCallsService } from 'src/assets/domainmodel/common-calls.service'
import { BaseForm } from 'src/app/base-comps/commonforms'
import { tap } from 'rxjs/operators';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatInput} from '@angular/material/input';
import {ResultRow,CellInfo} from 'src/app/results-table/results-table.component'


@Component({
  selector: 'app-action-mgmt',
  templateUrl: './action-mgmt.component.html',
  styleUrls: ['./action-mgmt.component.css']
})
export class ActionMgmtComponent extends BaseForm implements OnInit
{
  actionName = new FormControl('');
  actionDescription = new FormControl ('');
  appIdentifier: string;

  viewableObjects = new Array<Action> ();
  viewableApps = new Array<Application>();
  currentKey: string;
  
  displayedColumns = ['ActionName','Description','Owner App'];
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
          if (element.actionName == this.currentKey)
          {
              let rr = element;            
              if (rr != undefined)
              {
                if (rr.appIdentifier == null || rr.appIdentifier.length <= 0)
                    this.appIdentifier = "GLOBAL"
                  else 
                  this.appIdentifier = rr.appIdentifier;
      
                  this.actionDescription.setValue(rr.actionDescription);
                  this.actionName.setValue(rr.actionName);
                  this.setInfoMessage("Updated selected value..");
              }
              return;
          }
      });
    }
  }

  updateObject ()
  {
     let car = new CreateActionRequest ();
     car.description = this.actionDescription.value;
     car.appIdentifier = this.appIdentifier;
     if (car.appIdentifier == "GLOBAL")
     car.appIdentifier = null;
     car.name = this.actionName.value;
     this.managementClient.createAction(car).subscribe(value=>{
        console.log(value.status.statusMessage);
        if (value.status.statusCode == RequestStatusInformation.standardSuccessCode)
          this.setInfoMessage(value.status.statusMessage)
          else
          this.setErrorMessage(value.status.statusMessage);
        this.loadViewableObjects();
     }, error => {
      console.log(JSON.stringify(error));
      this.setErrorMessage("Failed to create/update action.. check browser console for logs");
     });
  }

  deleteObject ()
  {
     let car = new DeleteActionRequest ();
     car.name = this.actionName.value;
     this.managementClient.deleteAction(car).subscribe(value=>{
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

  loadViewableObjects ()
  {
    this.viewableObjects.length=0;
    this.formResults.length = 0;
    this.callService.loadViewableActions().then(values=>{
      values.forEach(element=>{
        this.viewableObjects.push(element);
        let ci = new Array<CellInfo> ();
        ci.push(new CellInfo(element.actionName));
        ci.push(new CellInfo(element.actionDescription));
        ci.push(new CellInfo(element.appIdentifier));
        let rr = new ResultRow(element.actionName,ci);
        this.formResults.push(rr);
      })
      this.dataSource.data=this.formResults;
    });
  }

  ngOnInit(): void 
  {
    this.formTitle="Manage Actions"
    this.loadViewableApps();
    this.loadViewableObjects();
    this.updatePermissionFlags(SecurityResources.ACTION,this.callService);
  }
}