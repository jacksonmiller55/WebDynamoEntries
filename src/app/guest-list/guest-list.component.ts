import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Guest } from '../guest'
import { GuestsService} from '../guests.service'


@Component({
  selector: 'app-guest-list',
  templateUrl: './guest-list.component.html',
  styleUrls: ['./guest-list.component.css']
})
export class GuestListComponent implements OnInit {
  guest = new Guest();
  guests = new Array<Guest>();
  addNewGuestBool = false;
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
  



}
