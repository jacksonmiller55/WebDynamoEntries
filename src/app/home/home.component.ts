import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import 'rxjs/add/oporator/map';
// import 'rxjs/add/oporator/catch';
// import 'rxjs/add/oporator/toPromise'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) { 
  this.today = new Date();
  this.day = this.today.toDateString()


  }
  today: Date;
  day: string;

  ngOnInit() {
  }
}