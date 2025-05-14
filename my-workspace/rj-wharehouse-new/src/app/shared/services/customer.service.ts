import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICustomer } from '../interfaces/customer.interface';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private _apiUrl = 'http://localhost:3000/customers';

  constructor(private _http:HttpClient) { }

  getCustomers(): Observable<ICustomer[]> {
    return this._http.get<ICustomer[]>(this._apiUrl);
  }
}
