import { Injectable } from '@angular/core';
import { Guest } from './guest'

@Injectable()
export class GuestsService {

  constructor() { }

  post_Guest(guest: Guest){
      console.log("Guest sent")
      console.log(guest)
  }

  get_Guests(){
      //Do some'thin crazy
  }
}
