import { Component, OnInit } from '@angular/core';
import { BaseForm } from '../base-comps/commonforms';
import { FormControl, Validators, FormGroup } from '@angular/forms';
// Import constants
import * as constants from '../../../../../../modules/app-security-client/type-script/src/constants/constants';
import { CreateTrustedBasicAppRequest, RequestStatusInformation, CreateTrustedBasicAppResponse }  from '../../../../../../modules/app-security-client/type-script/src/client/commmodel';
import { CommonCallsService } from '../../../../../../modules/app-security-client/type-script/src/client-service/common-calls.service';
import { SecMgmtApiClientService } from '../../../../../../modules/app-security-client/type-script/src/client-service/sec-mgmt-api-client.service';
// Import constants.
import { SecurityResources } from '../../../../../../modules/app-security-client/type-script/src/constants/constants';

@Component({
  selector: 'app-trusted-app-onboarding',
  templateUrl: './trusted-app-onboarding.component.html',
  styleUrls: ['./trusted-app-onboarding.component.css']
})
export class TrustedAppOnboardingComponent extends BaseForm implements OnInit 
{
	appName = new FormControl('',[Validators.required,Validators.maxLength(50)]);
	appAccronym = new FormControl('',[Validators.required,Validators.maxLength(50)]);
	appDescription = new FormControl('',[Validators.required,Validators.maxLength(255)]);
	 
	basicAuthAppUser = new FormControl('',[Validators.required,Validators.maxLength(50)]);
	basicAuthAppPassword = new FormControl('',[Validators.required,Validators.maxLength(50)]);
	
	basicAuthAppOwnerClientId = new FormControl('',[Validators.required,Validators.maxLength(50)]);
	basicAuthAppOwnerPassword = new FormControl('',[Validators.required,Validators.maxLength(50)]);
	
	appOwnersGroupName = new FormControl('',[Validators.required,Validators.maxLength(50)]);
	trustedAppsGroupName = new FormControl('',[Validators.required,Validators.maxLength(50)]);
  appOwnerRole = new FormControl('',[Validators.required,Validators.maxLength(50)]);
  
  formGroup = new FormGroup({"appName":this.appName,
                             "appAccronym":this.appAccronym,
                             "appDescription":this.appDescription,
                             "basicAuthAppUser":this.basicAuthAppUser,
                             "basicAuthAppPassword":this.basicAuthAppPassword,
                             "basicAuthAppOwnerClientId":this.basicAuthAppOwnerClientId,
                             "basicAuthAppOwnerPassword":this.basicAuthAppOwnerPassword,
                             "appOwnersGroupName":this.appOwnersGroupName,
                             "trustedAppsGroupName":this.trustedAppsGroupName,
                             "appOwnerRole":this.appOwnerRole
                            });

  callService: CommonCallsService;
  managementClient: SecMgmtApiClientService;

  constructor(callService: CommonCallsService,client: SecMgmtApiClientService)
  {
    super(); 
    this.callService = callService;
    this.managementClient = client;
  }

  loadDefaultValues ()
  {
      this.formTitle = "Create A Trusted Basic Authentication App";
      this.updatePermissionFlags(constants.SecurityResources.ONBOARD_TRUSTED_APP ,this.callService);
      this.appOwnerRole.setValue(constants.SecurityGroupsAndRoles.APP_OWNER_ROLE);
      this.trustedAppsGroupName.setValue(constants.SecurityGroupsAndRoles.TRUSTED_APP_GROUP);
  }


  updateObject ()
  {
     let car = new CreateTrustedBasicAppRequest ();
     car.appAccronym = this.appAccronym.value;
     car.appName = this.appName.value;
     car.appDescription = this.appDescription.value;
     car.appOwnerRole = this.appOwnerRole.value;
     car.appOwnersGroupName = this.appOwnersGroupName.value;
     car.basicAuthAppOwnerClientId = this.basicAuthAppOwnerClientId.value;
     car.basicAuthAppOwnerPassword = this.basicAuthAppOwnerPassword.value;
     car.basicAuthAppUser = this.basicAuthAppUser.value;
     car.basicAuthAppPassword = this.basicAuthAppPassword.value;
     this.managementClient.createTrustedBasicAuthApp(car).subscribe(value=>{
        console.log(value.status.statusMessage);
        if (value.status.statusCode == RequestStatusInformation.standardSuccessCode)
          this.setInfoMessage(value.status.statusMessage)
          else
          this.setErrorMessage(value.status.statusMessage);
     }, error => {
      console.log(JSON.stringify(error));
      this.setErrorMessage("Failed to create/update record.. check browser console for logs");
     });
  }



  ngOnInit(): void {
    // Lets put default values..
    this.loadDefaultValues();
  }

}