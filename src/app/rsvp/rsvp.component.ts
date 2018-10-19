import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Guest } from '../guest'
import { GuestsService} from '../guests.service'


@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.css']
})
export class RSVPComponent implements OnInit {
  guest = new Guest();
  guests = new Array<Guest>();
  addNewGuestBool = true;
  showGuestListBool = false;
  
  constructor(private guest_serve: GuestsService) {     
  }

  ngOnInit() {
    let guest1 = new Guest();
    guest1.firstName = "Jackson";
    guest1.lastName = "Miller"
    guest1.email = "jacksonmiller55@gmail.com"
    guest1.phone = 5157793892;
    guest1.address.street = "2604 Stange Rd."
    guest1.address.city = "Ames"
    guest1.address.state = "IA"
    guest1.address.zipcode = 51566;
    this.guests.push(guest1);
  }

  postGuest(guesty: Guest){
    this.showGuestListBool = true;
    this.addNewGuestBool = false;
    this.guests.push(guesty)
    this.guest_serve.post_Guest(guesty)
  }
  new_Guest(){
    this.guest = new Guest();
    this.showGuestListBool = false;
  }

  delete_guest(guesty: Guest){
    
    let index = this.guests.indexOf(guesty, 0);
    if (index > -1) {
    this.guests.splice(index, 1);
    }
  }
  



}
