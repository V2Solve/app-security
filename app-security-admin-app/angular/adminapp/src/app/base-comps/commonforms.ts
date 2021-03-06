import { CellInfo } from 'src/app/results-table/results-table.component'
import { Message } from 'src/app/info-block/info-block.component'

// Import Services..
import { CommonCallsService } from '../../../../../../modules/app-security-client/type-script/src/client-service/common-calls.service'

// Import constants.
import { SecurityActions } from '../../../../../../modules/app-security-client/type-script/src/constants/constants';


export class BaseForm
{
    /** Error Messages */
    errorMsgTooManyCharacters: string = "Field has too many characters";
    errorMsgRequiredField: string = "Field is required.";

    formTitle: string = "Base Title";

    objectReadPermission   = false;
    objectUpdatePermission = false;
    objectDeletePermission = false;
    objectCreatePermission = false;    

    /**
     * These are all pertaining to results component at the bottom of the form.
     */
    formResultsHeading: string = "Form Results";
    formResultsTitle: Array<CellInfo> = new Array();
    formResults: Array<any>=new Array();
    messages: Array<Message> = new Array<Message>();

    pushErrorMessage (msg: string)
    {
        let m = new Message(msg,true);
        this.messages.push(m);
    }

    pushInfoMessage (msg: string)
    {
        let m = new Message(msg,false);
        this.messages.push(m);
    }


    clearMessages ()
    {
        this.messages.length=0;
    }

    setErrorMessage (msg: string)
    {
        this.clearMessages();
        this.pushErrorMessage(msg);
    }


    setInfoMessage (msg: string)
    {
        this.clearMessages();
        this.pushInfoMessage(msg);
    }

 
    updatePermissionFlags (objectType: string,callService: CommonCallsService)
    {
        callService.hasPermission(SecurityActions.READ,objectType).then(element=>{
          this.objectReadPermission = element;
        })
        callService.hasPermission(SecurityActions.UPDATE,objectType).then(element=>{
          this.objectUpdatePermission = element;
        })
        callService.hasPermission(SecurityActions.CREATE,objectType).then(element=>{
          this.objectCreatePermission = element;
        })
        callService.hasPermission(SecurityActions.DELETE,objectType).then(element=>{
          this.objectDeletePermission = element;
        })
    }
 
    isCreateOrDeletePermission (): boolean
    {
        return (this.objectCreatePermission || this.objectDeletePermission);
    }

    isDeletePermission (): boolean
    {
        return this.objectDeletePermission;
    }

    isCreatePermission (): boolean
    {
        return this.objectCreatePermission;
    }

    isReadPermission (): boolean
    {
        return this.objectReadPermission;
    }
    
}

export class MenuItem
{
    itemName: string;
    itemTitle: string;
    itemLink: string;
    imageLink: string;

    constructor (itemName: string,itemTitle: string,itemLink: string)
    {
      this.itemName = itemName;
      this.itemLink = itemLink;
      this.itemTitle = itemTitle;
    }
}