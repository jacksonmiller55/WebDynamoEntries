import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav-menu',
  templateUrl: './sidenav-menu.component.html',
  styleUrls: ['./sidenav-menu.component.css']
})
export class SidenavMenuComponent implements OnInit {
  show_home_component = true;
  show_guest_list_component = false

  constructor() { 
  }

  ngOnInit() {
  }

  show_home(){
    this.show_guest_list_component = false
    this.show_home_component = true
  }

  show_guest_list(){
    this.show_guest_list_component = true
    this.show_home_component = false
  }
}
