import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError, Subscriber } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Component({
  selector: 'app-bottombar',
  templateUrl: './bottombar.component.html',
  styleUrls: ['./bottombar.component.css']
})
export class BottombarComponent implements OnInit {

  constructor() 
  { 

  }

  ngOnInit(): void 
  {
    
  }

}
