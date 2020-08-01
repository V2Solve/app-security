import { Component, OnInit } from '@angular/core';
import { BaseForm } from '../base-comps/commonforms';
import { CommonCallsService } from 'src/assets/domainmodel/common-calls.service';
import { MatTableDataSource } from '@angular/material/table';
import { ResultRow, CellInfo } from '../results-table/results-table.component';
import { Application, ClientGroup, CreateClientGroupRequest, RequestStatusInformation, DeleteClientGroupRequest, SecurityResources, ChangeLog, SearchChangeLogRequest } from 'src/assets/domainmodel/appsecuritymodel';
import { SecMgmtApiClientService } from 'src/assets/domainmodel/sec-mgmt-api-client.service';
import { FormControl } from '@angular/forms';
import { DataSource } from '@angular/cdk/table';
import { CollectionViewer } from '@angular/cdk/collections';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-change-log-mgmt',
  templateUrl: './change-log-mgmt.component.html',
  styleUrls: ['./change-log-mgmt.component.css']
})
export class ChangeLogMgmtComponent extends BaseForm implements OnInit 
{
  actionName   = new FormControl('');
  resourceName = new FormControl ('');
  changerId    = new FormControl ('');
  recordIdentifier = new FormControl ('');
  changeTitle  = new FormControl('');
  
  toDate = new FormControl('');
  fromDate = new FormControl('');

  
  viewableObjects = new Array<ChangeLog> ();
  
  displayedColumns = ['ChangeTime','ChangeTitle','Action','Resource','By','RecordId','CurrentRecord','OriginalRecord'];

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

  }

  loadViewableObjects ()
  {
    this.viewableObjects.length=0;
    this.formResults.length = 0;
    let sar = new SearchChangeLogRequest();
    sar.action = this.actionName.value;
    sar.resource = this.resourceName.value;
    sar.changerId = this.changerId.value;
    sar.changeTitle = this.changeTitle.value;
    sar.toDate = this.toDate.value;
    sar.fromDate = this.fromDate.value;
    this.managementClient.searchChangeLogs(sar).subscribe(value=>{
      if (value.changes != null)
      {
        value.changes.forEach(element=>{
          this.viewableObjects.push(element);
          let ci = new Array<CellInfo> ();
          if (element.datetime == null || element.datetime == undefined)
          ci.push(new CellInfo('undefined.'));
          else
          {
            let dt=new Date(element.datetime);
            ci.push(new CellInfo(dt.toUTCString()))
          }
          ci.push(new CellInfo(element.changeTitle));
          ci.push(new CellInfo(element.action));
          ci.push(new CellInfo(element.resource));
          ci.push(new CellInfo(element.changerId));
          ci.push(new CellInfo(element.recordIdentifier));
          ci.push(new CellInfo(element.changedRecord));
          ci.push(new CellInfo(element.originalRecord));
          let rr = new ResultRow("",ci);
          this.formResults.push(rr);
        })
      }
      this.dataSource.data=this.formResults;
    },error=>{
      this.pushErrorMessage(JSON.stringify(error));
    });
  }

  ngOnInit(): void 
  {
    this.formTitle="View Change Logs"
    this.loadViewableObjects();
    this.updatePermissionFlags(SecurityResources.CHANGE_LOG,this.callService);
  }
}


export class ChangeLogDataSource<T> extends DataSource<T>
{
  connect(collectionViewer: CollectionViewer): Observable<T[] | readonly T[]> {
    throw new Error("Method not implemented.");
  }
  
  disconnect(collectionViewer: CollectionViewer): void {
    throw new Error("Method not implemented.");
  }
}