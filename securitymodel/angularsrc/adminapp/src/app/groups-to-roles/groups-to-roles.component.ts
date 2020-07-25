import { Component, OnInit } from '@angular/core';
import { BaseForm } from '../base-comps/commonforms';
import { ClientGroup, ClientRole, ClientGroupRole, Scope, Application, Domain, DeleteClientGroupRoleRequest, RequestStatusInformation, CreateClientGroupRoleRequest, SearchClientGroupRoleRequest, SearchClientGroupRoleResponse, SecurityResources } from 'src/assets/domainmodel/appsecuritymodel';
import { CommonCallsService } from 'src/assets/domainmodel/common-calls.service';
import { SecMgmtApiClientService } from 'src/assets/domainmodel/sec-mgmt-api-client.service';
import { MatTableDataSource } from '@angular/material/table';
import { ResultRow, CellInfo } from '../results-table/results-table.component';
import { timestamp } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

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
  groupName = new FormControl('');

  // Selected role name
  roleName  = new FormControl ('');

  // selected domain name
  domainName = new FormControl ('');

  // scope name - selected scope name
  scopeName = new FormControl ('');

  // the selected appidentifier
  appIdentifier = new FormControl ('');

  // The groups that are viewable by the person.
  viewableGroups: Array<ClientGroup> = new Array<ClientGroup>();

  // The roles that are available to be assigned.
  viewableRoles: Array<ClientRole> = new Array<ClientRole>();

  viewableObjects     = new Array<ClientGroupRole> ();

  viewableDomains     = new Array<Domain> ();

  viewableApps        = new Array<Application>();

  viewableScopes      = new Array<Scope> ();

  currentKey: string;
  
  displayedColumns = ['Select','GroupName','RoleName','Domain','Scope','Owner App'];
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
     car.scopeName = this.scopeName.value;
     car.roleName = this.roleName.value;
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

  loadViewableScopes ()
  {
    this.viewableScopes.length=0;
    this.callService.loadViewableScopes().then(values=>{
      if (values != null)
      {
        values.forEach(element=>{
          this.viewableScopes.push(element);
        })
      }
    });
  }

  loadViewableGroups ()
  {
    this.viewableGroups.length=0;
    this.callService.loadViewableClientGroups().then(values=>{
      values.forEach(element=>{
        this.viewableGroups.push(element);
      })
    });
  }

  loadViewableDomains ()
  {
    this.viewableDomains.length=0;
    this.callService.loadViewableDomains().then(values=>{
      if (values != null)
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
      values.forEach(element=>{
        this.viewableRoles.push(element);
      })
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
        ci.push(new CellInfo(cgr.scopeName));
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
    scgrr.scopeName = this.scopeName.value;
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
      values.forEach(element=>{
        this.viewableApps.push(element);
      })
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
    this.scopeName.valueChanges.subscribe(event=>{
      this.reloadObjects();
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
    this.scopeName.setValue("");
    this.appIdentifier.setValue("GLOBAL");
  }

  ngOnInit(): void 
  {
    this.formTitle = "Manage Client Groups to Role Mappings."
    this.loadViewableDomains ();
    this.loadViewableGroups ();
    this.loadViewableRoles ();
    this.loadViewableScopes ();
    this.loadViewableObjects ();
    this.loadViewableApps ();
    this.subscribeToChanges();
    this.updatePermissionFlags(SecurityResources.GROUP_ROLE_MEMBERSHIP,this.callService);
  }
 
}