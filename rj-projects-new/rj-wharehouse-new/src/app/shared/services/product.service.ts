import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _apiUrl = 'http://localhost:3000/products';

  constructor(private _http:HttpClient) { }

  getProducts(): Observable<IProduct[]> {
    return this._http.get<IProduct[]>(this._apiUrl);
  }

  getProductById(id: number): Observable<IProduct> {
    return this._http.get<IProduct>(`${this._apiUrl}/${id}`);
  }

  addProduct(product: IProduct): Observable<IProduct> {
    return this._http.post<IProduct>(this._apiUrl, product);
  }

  updateProduct(id: number, product): Observable<IProduct> {
    return this._http.patch<IProduct>(`${this._apiUrl}/${id}`, product);
  }

  removeProduct(id: number): Observable<void> {
    return this._http.delete<void>(`${this._apiUrl}/${id}`);
  }
}

