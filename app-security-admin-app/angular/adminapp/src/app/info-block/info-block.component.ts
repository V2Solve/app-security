import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info-block',
  templateUrl: './info-block.component.html',
  styleUrls: ['./info-block.component.css']
})
export class InfoBlockComponent implements OnInit 
{
  @Input () informationBlockTitle: string;
  @Input () errorClass: string; // The style sheet class for displaying Error.
  @Input () infoClass: string;  // The style sheet class for display info.
  @Input () messages: Array<Message>;

  constructor() { }

  ngOnInit(): void {
  }

  closeBox ()
  {
    if (this.messages != undefined)
     this.messages.length=0;
  }

  boxVisible (): boolean
  {
    if (this.messages == undefined || this.messages.length<=0)
      return false;
      else
      return true;
  }

}

export class Message
{
  msg: string;
  error: boolean; // True if it is an error,  false if it is just a message.

  constructor(msg: string,error: boolean=false)
  {
    this.msg = msg;
    this.error = error;
  }
}