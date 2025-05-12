import { Component, inject, OnInit } from '@angular/core';
import { IOrder } from '../../../shared/interfaces/order.interface';
import { OrderService } from '../../../shared/services/order.service';
import { Router } from '@angular/router';
import { take, tap } from 'rxjs';

@Component({
  selector: 'cem-show-orders',
  standalone: false,
  templateUrl: './show-orders.component.html',
  styleUrl: './show-orders.component.scss'
})
export class ShowOrdersComponent implements OnInit{

  orderList:IOrder[]=[];
  tHeadLabels:string[]=['descrizione','totale'];
  buttonText='Aggiungi';
  h5Text='ordini in evidenza';

  private _orderService=inject(OrderService);
  private _rt=inject(Router);

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders(){
    this._orderService.getOrders().pipe(
      take(1),
      tap((val)=>{
        this.orderList=val;
        console.log(val);
      })
    ).subscribe();
  }

  navigateTo(){
    this._rt.navigate(['/add-order'])
  }


}
