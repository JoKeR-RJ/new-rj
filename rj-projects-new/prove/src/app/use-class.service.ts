import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UseClassService {

  constructor() { }

  useClass(){
     console.log('sono USE CLASS');
    
  }
}
