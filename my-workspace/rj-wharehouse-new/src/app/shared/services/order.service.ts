import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IOrder } from '../interfaces/order.interface';



@Injectable({
  providedIn: 'root'
})
export class OrderService {
  
  private apiUrl = 'http://localhost:3000/orders';
  
  constructor(private _http: HttpClient) {}

  getOrders(): Observable<IOrder[]> {
    return this._http.get<IOrder[]>(this.apiUrl);
  }

  createOrder(order: Omit<IOrder, 'id'>): Observable<IOrder> {
    return this._http.post<IOrder>(this.apiUrl, order);
  }





}
