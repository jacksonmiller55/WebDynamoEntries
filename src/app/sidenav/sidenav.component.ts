import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  show_home_component = true;
  show_rsvp_component = false;
  show_registry_component = false;
  show_about_component = false;
  
  constructor() {
  }
  ngOnInit() {
  }

  show_home(){
    this.show_home_component = true;
    this.show_rsvp_component = false;
    this.show_registry_component = false;
    this.show_about_component = false;
  }

  show_rsvp(){
    this.show_home_component = false;
    this.show_rsvp_component = true;
    this.show_registry_component = false;
    this.show_about_component = false;
  }
  show_registry(){
    this.show_home_component = false;
    this.show_rsvp_component = false;
    this.show_registry_component = true;
    this.show_about_component = false;
  } 
  show_about(){
    this.show_home_component = false;
    this.show_rsvp_component = false;
    this.show_registry_component = false;
    this.show_about_component = true;
  }
}
