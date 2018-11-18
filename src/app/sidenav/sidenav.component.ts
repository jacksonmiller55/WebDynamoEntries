import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  show_home_component = true;
  show_rsvp_component = false;
  show_area_2_component = false;
  show_area_3_component = false;
  show_area_4_component = false;
  show_area_5_component = false;
  show_area_6_component = false;
  show_area_7_component = false;
  show_area_8_component = false;
  show_about_component = false;
  
  constructor() {
  }
  ngOnInit() {
  }

  show_home(){
    this.show_home_component = true;
    this.show_rsvp_component = false;
    this.show_area_2_component = false;
    this.show_area_3_component = false;
    this.show_area_4_component = false;
    this.show_area_5_component = false;
    this.show_area_6_component = false;
    this.show_area_7_component = false;
    this.show_area_8_component = false;
    this.show_about_component = false;
  }

  show_rsvp(){
    this.show_home_component = false;
    this.show_rsvp_component = true;
    this.show_area_2_component = false;
    this.show_area_3_component = false;
    this.show_area_4_component = false;
    this.show_area_5_component = false;
    this.show_area_6_component = false;
    this.show_area_7_component = false;
    this.show_area_8_component = false;
    this.show_about_component = false;
  }
   
  show_about(){
    this.show_home_component = false;
    this.show_rsvp_component = false;
    this.show_area_2_component = false;
    this.show_area_3_component = false;
    this.show_area_4_component = false;
    this.show_area_5_component = false;
    this.show_area_6_component = false;
    this.show_area_7_component = false;
    this.show_area_8_component = false;
    this.show_about_component = true;
  }
}
