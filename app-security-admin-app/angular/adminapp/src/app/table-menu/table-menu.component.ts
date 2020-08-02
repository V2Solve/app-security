import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from 'src/app/base-comps/commonforms'


@Component({
  selector: 'app-table-menu',
  templateUrl: './table-menu.component.html',
  styleUrls: ['./table-menu.component.css']
})
export class TableMenuComponent implements OnInit 
{
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
