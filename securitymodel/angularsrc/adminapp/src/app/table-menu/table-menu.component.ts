import { Component, OnInit, Input } from '@angular/core';




@Component({
  selector: 'app-table-menu',
  templateUrl: './table-menu.component.html',
  styleUrls: ['./table-menu.component.css']
})
export class TableMenuComponent implements OnInit {

  @Input () menuItems: Array<MenuItem>;

  constructor() { }

  ngOnInit(): void {
  }

  getWidth (index: number): string
  {
    return "20%";
  }

  anyItems (): boolean
  {
    if (this.menuItems == undefined || this.menuItems.length <= 0)
    return false;
    else
    return true;
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