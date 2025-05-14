import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-zero',
  imports: [],
  templateUrl: './zero.component.html',
  styleUrl: './zero.component.scss'
})
export class ZeroComponent{


  private _rt=inject(Router);

    goTo(str:string): void {
     this._rt.navigate([str]);
    }


}
