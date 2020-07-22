import { Component, OnInit } from '@angular/core';
import { BaseForm } from '../base-comps/commonforms';
import { CommonCallsService } from 'src/assets/domainmodel/common-calls.service';
import { MatTableDataSource } from '@angular/material/table';
import { ResultRow, CellInfo } from '../results-table/results-table.component';
import { Application, Domain, CreateDomainRequest, RequestStatusInformation, DeleteDomainRequest, DomainType, ClientGroup, SearchClientGroupRequest, SearchClientRequest, DeleteGroupMembershipRequest, CreateGroupMembershipRequest, SearchClientResponse, AppClient, SecurityActions, SecurityResources } from 'src/assets/domainmodel/appsecuritymodel';
import { SecMgmtApiClientService } from 'src/assets/domainmodel/sec-mgmt-api-client.service';
import { FormControl } from '@angular/forms';
import { timestamp, count } from 'rxjs/operators';
import { SelectionModel } from '@angular/cdk/collections';
import { MatListOption } from '@angular/material/list';
import { Observable } from 'rxjs';
import { Timestamp } from 'rxjs/internal/operators/timestamp';


@Component({
  selector: 'app-client-to-groups',
  templateUrl: './client-to-groups.component.html',
  styleUrls: ['./client-to-groups.component.css']
})
export class ClientToGroupsComponent extends BaseForm implements OnInit {

  // The text field that folks will put search item in.
  clientName = new FormControl('');
  clientIdentifier: string = null;

  assignedGroupSelected: string;
  assignableGroupSelected: string;
  
  // The viewable groups that can be assigned.
  assignableGroups = new Array<ClientGroup>();

  // The groups that have been assigned already.
  assignedGroups = new Array<ClientGroup>();
  
  callService: CommonCallsService;
  managementClient: SecMgmtApiClientService;

  searchedClients: AppClient [] = new Array<AppClient>();


  constructor(callService: CommonCallsService,client: SecMgmtApiClientService)
  {
    super(); 
    this.callService = callService;
    this.managementClient = client;
  }

  
  swapVisible (): boolean
  {
     return (!(this.clientIdentifier == null || this.clientIdentifier == undefined));
  }


  searchClients ()
  {
    let sc = new SearchClientRequest ();
    sc.clientIdentifier = this.clientName.value;
    this.searchedClients.length = 0;

    if (sc.clientIdentifier == null || sc.clientIdentifier.length <= 0)
    {
        return null;
    }

    this.managementClient.searchClients(sc).subscribe(element=>
    {
        this.searchedClients.length = 0;
        if (element != null && element.clients != null)
        {
          element.clients.forEach(client=>{
            this.searchedClients.push(client);
          })
        }
    });
  }

  searchClient ()
  {
    let sc = new SearchClientRequest ();
    sc.clientIdentifier = this.clientName.value;
    
    if (sc.clientIdentifier == null || sc.clientIdentifier.length <= 0)
    {
      this.pushErrorMessage("Provide a search string..");
      return;
    }
    this.clientIdentifier = null;
    this.managementClient.searchClients(sc).subscribe(element=>{
        if (element != null && element.status.statusCode == RequestStatusInformation.standardSuccessCode)
        {
            if (element.clients != null && element.clients.length > 0)
            {
                let appC = element.clients[0];
                this.clientIdentifier = appC.clientIdentifier;
                this.loadGroups ();
            }
            else
            {
              this.pushInfoMessage("No client found.");
            }
        }
        else
        {
          this.pushErrorMessage("Client with id: " + sc.clientIdentifier + " not found. - " + element.status.statusCode);
        }
    },error=>{
        this.pushErrorMessage(JSON.stringify(error));
    })
  }

  async assignGroup (selected: SelectionModel<MatListOption>)
  {
    if (selected != null)
    {
      let a = selected.selected;
      if (a != null)
      {
        a.forEach(async element => {
          
          let aGM = new CreateGroupMembershipRequest ();
          aGM.clientIdentifier = this.clientIdentifier;
          aGM.clientGroupIdentifier = element.value;
          await this.managementClient.createGroupMembership(aGM).toPromise().then(async response=>{
            if (response.status.statusCode == RequestStatusInformation.standardSuccessCode)
            {
              this.pushInfoMessage("Added membership: " + element.value);
              this.loadGroups ();
            }
            else
            {
              this.pushErrorMessage("Error Adding membership: " + response.status.statusMessage);
            }
          })
        })

        
      }
    }
  }

  async unAssignGroup (selected: SelectionModel<MatListOption>)
  {
        console.log("UnAssign Group Called.");

        if (selected != null)
        {
          let a = selected.selected;
          if (a != null)
          {
            a.forEach(async element => 
            {
                // console.log("UnAssigning: " + element.value);
                let dGM = new DeleteGroupMembershipRequest ();
                dGM.clientIdentifier = this.clientIdentifier;
                dGM.clientGroupIdentifier = element.value;
                await this.managementClient.deleteGroupMembership(dGM).toPromise().then(async response=>{
                      if (response.status.statusCode == RequestStatusInformation.standardSuccessCode)
                      {
                        this.pushInfoMessage("Removed membership: " + element.value);
                        this.loadGroups ();
                      }
                      else
                      {
                        this.pushErrorMessage("Error removing membership: " + response.status.statusMessage);
                      }
                })
            })
          }
        }
  }

  async loadGroups ()
  {
    let aGroups = new Array<ClientGroup> ();
    let vGroups = new Array<ClientGroup> ();

    let sgr = new SearchClientGroupRequest();
    sgr.forClientIdentifier = this.clientIdentifier;
    await this.managementClient.searchClientGroups(sgr).toPromise().then(async element=>{
          if (element != null && element.clientGroups != null)
          {
              element.clientGroups.forEach(group=>{
                // console.log("Assigned Group: " + JSON.stringify(group));
                aGroups.push(group);
              })
          }
    });
    
    // Lets call the assignable groups.
    sgr.forClientIdentifier = null;
    await this.managementClient.searchClientGroups(sgr).toPromise().then(async element=>{
      if (element != null && element.clientGroups != null)
      {
          element.clientGroups.forEach(group=>{
            // console.log("Assignable Group: " + JSON.stringify(group));
            vGroups.push(group);
          })
      }
    });

    let fvGroups = new Array<ClientGroup>();
    // Okay now that both are available. lets remove common Groups.
    vGroups.forEach(vGrp=>{
        let match: boolean = false;
        aGroups.forEach(aGrp=>{
          if (aGrp.name == vGrp.name)
          { 
              match = true;
          }
        })
        if (match == false)
        {
            // Push only if there is no match.
            fvGroups.push(vGrp);
        }
    })

    // Okay so now move them to the respective arrays.
    this.assignedGroups.length = 0;
    this.assignableGroups.length = 0;
    fvGroups.forEach(element=>{
        this.assignableGroups.push(element);
    })

    aGroups.forEach(element=>{
        this.assignedGroups.push(element);
    })

  }

  ngOnInit(): void 
  {
    this.formTitle="Manage Client Group Memberships"
    this.updatePermissionFlags(SecurityResources.CLIENT_GROUP_MEMBERSHIP,this.callService);
  }

}
