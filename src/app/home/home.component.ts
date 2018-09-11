import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import 'rxjs/add/oporator/map';
// import 'rxjs/add/oporator/catch';
// import 'rxjs/add/oporator/toPromise'; 
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private http: HttpClient) { 
  this.today = new Date();
 
  }
  today: Date;
  ngOnInit() {
  }
}