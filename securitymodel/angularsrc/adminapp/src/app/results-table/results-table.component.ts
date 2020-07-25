import { Component, OnInit, Input, Output, EventEmitter,ViewChild, AfterViewInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource, MatTable} from '@angular/material/table';
import  {MatInput} from '@angular/material/input';
import { LoaderServiceService } from '../loader-service.service';

@Component({
  selector: 'app-results-table',
  templateUrl: './results-table.component.html',
  styleUrls: ['./results-table.component.css']
})
export class ResultsTableComponent implements OnInit,AfterViewInit
{
  @Input ()
  displayedColumns: string [];

  copyOfDisplayedColumns: string [] = new Array<string>();

  @Input ()
  dataSource: MatTableDataSource<any>;

  @Input ()
  iconName: string = "arrow_circle_up";

  @Input ()
  iconTitle: string = "Select this Record";

  @Input ()
  selectFunction: boolean = true;

  @Output() 
  currentRowSelected = new EventEmitter<string>();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  spinbarVisibility: boolean = false;

   constructor(private loadService: LoaderServiceService) {

   }

  deletePressedOnKey (key: string)
  {
    console.log("Delete pressed On Row: " + key);
    this.currentRowSelected.emit(key);
    console.log("Function Emittied: " + key);
  }

  dataFilter (rowdata: ResultRow, filter:string)
  {
      let decision = false;

      if (rowdata != null)
      {
          if (rowdata.rowdata != null)
          {
            rowdata.rowdata.forEach(value=>{
                let a = value;
                if (a != null && a.data != null)
                {
                    if (a.data.toLowerCase().indexOf(filter)>=0)
                    {
                      decision = true;
                      return decision;
                    }
                }
            })
          }
      }
      
      return decision;
  }


  sortDataAccessor (data: ResultRow, sortHeaderId: string): string
  {
      let dataToReturn = null;
      
      if (this.displayedColumns != null && this.displayedColumns != undefined)
      {
        let i = 0;
        for (let header of this.displayedColumns)
        {
          if (header == sortHeaderId)
          {
            dataToReturn = data.rowdata[i].data;
            return dataToReturn;
          }
          i++;
        }
      }

      return dataToReturn;
  }

  ngAfterViewInit(): void 
  {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.filterPredicate = this.dataFilter.bind(this);    
    this.dataSource.sortingDataAccessor=this.sortDataAccessor.bind(this);
  }

  ngOnInit() 
  {
    this.displayedColumns.forEach(columnName=>{
      this.copyOfDisplayedColumns.push(columnName);
    })
    this.loadService.httpProgress().subscribe(element=>{
      this.spinbarVisibility = element;
    })
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

    toString (): string
    {
      return this.data;
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