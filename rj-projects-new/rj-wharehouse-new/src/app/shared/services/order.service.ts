import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICustomer } from '../interfaces/customer.interface';
import { IOrders } from '../interfaces/order.interface';


@Injectable({
  providedIn: 'root'
})
export class OrderService {
  
  private apiUrl = 'http://localhost:3000/orders';
  
  constructor(private _http: HttpClient) {}

  getOrders(): Observable<IOrders[]> {
    return this._http.get<IOrders[]>(this.apiUrl);
  }

  createOrder(order: Omit<IOrders, 'id'>): Observable<IOrders> {
    return this._http.post<IOrders>(this.apiUrl, order);
  }





}
