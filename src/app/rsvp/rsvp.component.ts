import { Component, OnInit, ErrorHandler } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Guest } from '../services/guest'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.css']
})
export class RSVPComponent implements OnInit {
  guest: Guest;
  constructor(private http: HttpClient) { 
  }

  ngOnInit() {
    this.guest;
  }

  /** POST: add a new hero to the database */
  postGuest (guest: Guest): Observable<Guest> {
    const api_url: string = 'https://mb5r10j9bc.execute-api.us-east-1.amazonaws.com/dev'
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    return this.http.post<Guest>(api_url, guest, httpOptions)
      .pipe(
        catchError(this.handleError('postGuest', guest))
      );
    }
  handleError(arg0: string, guest: Guest): (err: any, caught: Observable<Guest>) => never {
    throw new Error("Method not implemented.");
  }
}
