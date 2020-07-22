import { Component, OnInit, Input, Output, EventEmitter,ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import  {MatInput} from '@angular/material/input';

@Component({
  selector: 'app-results-table',
  templateUrl: './results-table.component.html',
  styleUrls: ['./results-table.component.css']
})
export class ResultsTableComponent implements OnInit 
{
  @Input ()
  displayedColumns: string [];

  @Input ()
  dataSource: MatTableDataSource<ResultRow>;

  @Input ()
  iconName: string = "arrow_circle_up";

  @Input ()
  iconTitle: string = "Select this Record";

  @Input ()
  selectFunction: boolean = true;

  @Output() 
  currentRowSelected = new EventEmitter<string>();

  allColumns: string [] = new Array();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;


    
  constructor() { }

  deletePressedOnKey (key: string)
  {
    console.log("Delete pressed On Row: " + key);
    this.currentRowSelected.emit(key);
    console.log("Function Emittied: " + key);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.allColumns.length=0;
    this.allColumns.push("selectColumn");
    this.displayedColumns.forEach(element => {
      this.allColumns.push(element);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }  
}

export class CellInfo
{
    data: string;   // The data to show in the cell..
    link: string;   // any link if to show..
    title: string;  // any title to show on the data

    constructor(data: string,link: string=null,title:string = null)
    {
      this.data =data;
      this.link =link;
      this.title=title;
    }
}

export class ResultRow
{
  rowdata: Array<CellInfo>;
  key: string;  // The key for the Row..
 
  constructor(key: string,rowdata: Array<CellInfo>)
  {
    this.key = key;
    this.rowdata=rowdata;
  }
}