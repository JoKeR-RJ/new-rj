import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MyMethodsService {

  constructor() { }

  private _rt=inject(Router);

  navigateTo(str:string){
    this._rt.navigate([str])
  }
}
