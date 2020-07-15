import { CellInfo, ResultRow } from 'src/app/results-table/results-table.component'
import { Message } from 'src/app/info-block/info-block.component'

export class BaseForm
{
    formTitle: string = "Base Title";

    /**
     * These are all pertaining to results component at the bottom of the form.
     */
    formResultsHeading: string = "Form Results";
    formResultsTitle: Array<CellInfo> = new Array();
    formResults: Array<ResultRow>=new Array();
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
}