import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'cem-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  private _rt=inject(Router);
  photo:string='assets/card/r1.jpg';

  text =
  {
    routes:{
      r1:'show-products',
      r2:'add-edit-product',
      r3:'show-orders',
      r4:'add-order',
      err:'error-page',
      label1:'Mostra tutti prodotti',
      label2:'Aggiungi o modifica prodotti',
      label3:'Mostra tutti ordini',
      label4:'Aggiungi ordini',
    },
    actions:{
      navigate:'naviga ',
    } 
  }

  onClick(str:string){
    this._rt.navigate([`/${str}`]);
  }
}

