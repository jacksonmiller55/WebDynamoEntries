import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  show_home_component = true;
  show_guest_list_component = false;
  
  constructor() {
  }
  ngOnInit() {
  }

  show_home(){
    this.show_guest_list_component = false;
    this.show_home_component = true;
  }

  show_guest_list(){
    this.show_guest_list_component = true;
    this.show_home_component = false;
  }

}
