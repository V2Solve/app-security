import { Component, OnInit, EventEmitter, Input, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SecMgmtApiClientService } from 'src/assets/domainmodel/sec-mgmt-api-client.service';
import { SearchApplicationsRequest, Application, CreateApplicationRequest, DeleteApplicationRequest, RequestStatusInformation } from 'src/assets/domainmodel/appsecuritymodel';
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
  selector: 'app-application-mgmt',
  templateUrl: './application-mgmt.component.html',
  styleUrls: ['./application-mgmt.component.css']
})
export class ApplicationMgmtComponent extends BaseForm implements OnInit 
{
  // Fields on the form
  appIdentifier = new FormControl('');
  shortIdentifier = new FormControl('');
  appDescription = new FormControl('');

  callService: CommonCallsService;
  managementClient: SecMgmtApiClientService;
  
  viewableApps: Array<Application> = new Array<Application>();
  currentKey: string;
  
  displayedColumns = ['AppIdentifier','ShortIdentifier','Description'];
  dataSource = new MatTableDataSource<ResultRow>(this.formResults);
  
  constructor(callService: CommonCallsService,client: SecMgmtApiClientService)
  {
    super(); 
    this.callService = callService;
    this.managementClient = client;
  }

  rowSelected (key: string)
  {
    // console.log("Current Row Change Called." + key);
    this.currentKey = key;
    if (this.currentKey != undefined)
    {
        this.viewableApps.forEach(element=>{
          if (element.appIdentifier == this.currentKey)
          {
            let rr = element;
            if (rr != undefined)
            {
                this.appIdentifier.setValue(rr.appIdentifier);
                this.shortIdentifier.setValue(rr.shortIdentifier);
                this.appDescription.setValue(rr.appDescription);
                this.setInfoMessage("Updated selected value..");
            }
           return;   
          }
        });
    }
  }

  updateApplication ()
  {
    console.debug("Update Application called..");
     let car = new CreateApplicationRequest ();
     car.description = this.appDescription.value;
     car.appIdentifier = this.appIdentifier.value;
     car.appShortIdentifier = this.shortIdentifier.value;
     this.managementClient.createApplication(car)
      this.managementClient.createApplication(car).subscribe(value=>{
        console.log(value.status.statusMessage);
        if (value.status.statusCode == RequestStatusInformation.standardSuccessCode)
          this.setInfoMessage(value.status.statusMessage)
          else
          this.setErrorMessage(value.status.statusMessage);
        this.loadViewableApps();
     }, error => {
      console.log(JSON.stringify(error));
      this.setErrorMessage("Failed to create/update application.. check browser console for logs");
     });
  }

  deleteApplication ()
  {
    console.debug("Delete Application called.");
     let car = new DeleteApplicationRequest ();
     car.appIdentifier = this.appIdentifier.value;
     this.managementClient.deleteApplication(car).subscribe(value=>{
        console.log(value.status.statusMessage);
        if (value.status.statusCode == RequestStatusInformation.standardSuccessCode)
          this.setInfoMessage(value.status.statusMessage)
          else
          this.setErrorMessage(value.status.statusMessage);
        this.loadViewableApps();
     },error=>{
      console.log(JSON.stringify(error));
      this.setErrorMessage("Failed to delete application.. check browser console for logs");
     });
  }

  loadViewableApps ()
  {
    this.callService.loadViewableApps().then(values=>{
      this.viewableApps = values;

      if (this.viewableApps != undefined && this.viewableApps.length > 0)
      {
          this.formResults.length = 0;
          this.viewableApps.forEach(app=>
          {
            let ci = new Array<CellInfo> ();
            ci.push(new CellInfo(app.appIdentifier));
            ci.push(new CellInfo(app.shortIdentifier));
            ci.push(new CellInfo(app.appDescription));
            let rr = new ResultRow(app.appDescription,ci);
            this.formResults.push(rr);
          })
        
          this.dataSource.data=this.formResults;
      }
    });
  }


  ngOnInit(): void 
  {
      // Lets load the viewable apps..
      this.formTitle="Manage applications";
      this.loadViewableApps();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }    
}
