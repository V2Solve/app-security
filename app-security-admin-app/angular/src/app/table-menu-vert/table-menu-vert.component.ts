import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from 'src/app/base-comps/commonforms'

@Component({
  selector: 'app-table-menu-vert',
  templateUrl: './table-menu-vert.component.html',
  styleUrls: ['./table-menu-vert.component.css']
})
export class TableMenuVertComponent implements OnInit 
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