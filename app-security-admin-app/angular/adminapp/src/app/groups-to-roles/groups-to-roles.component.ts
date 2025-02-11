import { Component, OnInit } from '@angular/core';
import { BaseForm } from '../base-comps/commonforms';
import { MatTableDataSource } from '@angular/material/table';
import { ResultRow, CellInfo } from '../results-table/results-table.component';

import { FormControl, Validators, FormGroup } from '@angular/forms';

// Import Services..
import { SecMgmtApiClientService } from '../../../../../../modules/app-security-client/type-script/src/client-service/sec-mgmt-api-client.service';
import { CommonCallsService } from '../../../../../../modules/app-security-client/type-script/src/client-service/common-calls.service'

// Import Communication Model..
import {  DeleteClientGroupRoleRequest,CreateClientGroupRoleRequest,SearchClientGroupRoleRequest,SearchClientGroupRoleResponse, RequestStatusInformation }  from '../../../../../../modules/app-security-client/type-script/src/client/commmodel';

// Import Security Model
import { ClientGroupRole,Application,Domain,ClientGroup,ClientRole,Scope } from '../../../../../../modules/app-security-client/type-script/src/model/model';

// Import constants.
import { SecurityResources } from '../../../../../../modules/app-security-client/type-script/src/constants/constants';

@Component({
  selector: 'app-groups-to-roles',
  templateUrl: './groups-to-roles.component.html',
  styleUrls: ['./groups-to-roles.component.css']
})
export class GroupsToRolesComponent extends BaseForm implements OnInit {

  callService: CommonCallsService;
  managementClient: SecMgmtApiClientService;

  constructor(callService: CommonCallsService,client: SecMgmtApiClientService)
  {
    super(); 
    this.callService = callService;
    this.managementClient = client;
  }
  
  // The selected group name.
  groupName = new FormControl('',[Validators.required]);

  // Selected role name
  roleName  = new FormControl ('',[Validators.required]);

  // selected domain name
  domainName = new FormControl ('');

  // Propogate or not ?
  propogate = new FormControl ('');

  propogateValues: string[] = ["Yes","No"];

  // the selected appidentifier
  appIdentifier = new FormControl ('');

  formGroup = new FormGroup({"groupName":this.groupName,"roleName":this.roleName,"domainName":this.domainName,"propogate":this.propogate,"appIdentifier":this.appIdentifier});

  // The groups that are viewable by the person.
  viewableGroups: Array<ClientGroup> = new Array<ClientGroup>();

  // The roles that are available to be assigned.
  viewableRoles: Array<ClientRole> = new Array<ClientRole>();

  viewableObjects     = new Array<ClientGroupRole> ();

  viewableDomains     = new Array<Domain> ();

  viewableApps        = new Array<Application>();

  currentKey: string;
  
  displayedColumns = ['Select','GroupName','RoleName','Domain','Propogate','Owner App'];
  dataSource = new MatTableDataSource<ResultRow>(this.formResults);

  rowSelected (key: string)
  {
    this.currentKey = key;
    if (this.currentKey != undefined)
    {
      let dcgr = new DeleteClientGroupRoleRequest ();
      dcgr.key = this.currentKey;
      this.managementClient.deleteClientGroupRole(dcgr).subscribe(element=>{

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
     let car = new CreateClientGroupRoleRequest ();
     car.groupName = this.groupName.value;
     car.domainName = this.domainName.value;
     car.roleName = this.roleName.value;
     if (this.propogate.value == "Yes")
     car.propogate = true;
     else 
     car.propogate = false;
     car.appIdentifier = this.appIdentifier.value;
     if (car.appIdentifier == "GLOBAL")
     car.appIdentifier = null;
     this.managementClient.createClientGroupRole(car).subscribe(value=>{
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

  loadViewableGroups ()
  {
    this.viewableGroups.length=0;
    this.callService.loadViewableClientGroups().then(values=>{
    
      if (values != null && values != undefined) {
      values.forEach(element=>{
        this.viewableGroups.push(element);
      })
    }

    });
  }

  loadViewableDomains ()
  {
    this.viewableDomains.length=0;
    this.callService.loadViewableDomains().then(values=>{
      if (values != null && values != undefined)
      {
        values.forEach(element=>{
          this.viewableDomains.push(element);
        })
      }
    });
  }

  loadViewableRoles ()
  {
    this.viewableRoles.length = 0;
    this.callService.loadViewableClientRoles().then(values=>{

    if (values != null && values != undefined) {
      values.forEach(element=>{
        this.viewableRoles.push(element);
      })
    }

    });
  }

  
  async receiveViewableOjects (element: SearchClientGroupRoleResponse)
  {
    this.viewableObjects.length = 0;
    this.formResults.length = 0;
    if (element != null && element.clientGroupRoles != null)
    {
       element.clientGroupRoles.forEach(cgr=>{
        this.viewableObjects.push(cgr);
        let ci = new Array<CellInfo> ();
        ci.push(new CellInfo(cgr.key));
        ci.push(new CellInfo(cgr.groupName));
        ci.push(new CellInfo(cgr.roleName));
        ci.push(new CellInfo(cgr.domainName));
        if (cgr.propogate == true)
        ci.push(new CellInfo("Yes"))
        else
        ci.push(new CellInfo("No"))
        ci.push(new CellInfo(cgr.appIdentifier));
        let rr = new ResultRow(cgr.key,ci);
        this.formResults.push(rr);
       })
    this.dataSource.data=this.formResults;
    }
  }
  
  loadViewableObjects ()
  {
    this.viewableObjects.length = 0;
    this.formResults.length = 0;
    if (this.groupName.value == null || this.groupName.value == undefined)
    return;
    let scgrr = new SearchClientGroupRoleRequest ();
    scgrr.groupName = this.groupName.value;
    scgrr.roleName = this.roleName.value;
    scgrr.domainName = this.domainName.value;
    scgrr.appIdentifier = this.appIdentifier.value;
    if (scgrr.appIdentifier == "GLOBAL")
    scgrr.appIdentifier = "";
    this.managementClient.searchClientGroupRoles(scgrr).subscribe(async element=>{
      await this.receiveViewableOjects(element);
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
    
    if (values != null && values != undefined) {
      values.forEach(element=>{
        this.viewableApps.push(element);
      })
    }

    });
  }
 

  subscribeToChanges ()
  {
    this.groupName.valueChanges.subscribe(event=>{
      this.reloadObjects();
    })
    this.roleName.valueChanges.subscribe(event=>{
      this.reloadObjects ();
    })
    this.domainName.valueChanges.subscribe(event=>{
      this.reloadObjects();
    })
    this.appIdentifier.valueChanges.subscribe(event=>{
      this.reloadObjects();
    })
  }

  clearFormControls ()
  {
    this.groupName.setValue("");
    this.roleName.setValue("");
    this.domainName.setValue("");
    this.appIdentifier.setValue("GLOBAL");
  }

  ngOnInit(): void 
  {
    this.formTitle = "Manage Client Groups to Role Mappings."
    this.loadViewableDomains ();
    this.loadViewableGroups ();
    this.loadViewableRoles ();
    this.loadViewableObjects ();
    this.loadViewableApps ();
    this.subscribeToChanges();
    this.updatePermissionFlags(SecurityResources.GROUP_ROLE_MEMBERSHIP,this.callService);
  }
 
}