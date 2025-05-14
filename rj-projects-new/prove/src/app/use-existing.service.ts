import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UseExistingService {

  constructor() { }

  useExisting(){
    console.log(  'sono USE EXISTING');

  }
}
