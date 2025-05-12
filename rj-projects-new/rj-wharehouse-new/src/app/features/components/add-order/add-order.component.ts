import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'cem-add-order',
  standalone: false,
  templateUrl: './add-order.component.html',
  styleUrl: './add-order.component.scss'
})
export class AddOrderComponent {
  createOrderForm:FormGroup;

  private _fb=inject(FormBuilder);

  constructor(){

  }

  initializeForm(){
    this.createOrderForm = this._fb.group({
      name
    })
  }

}
