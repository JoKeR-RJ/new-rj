import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ICommon } from '../interfaces/common.interface';

@Injectable({
  providedIn: 'root'
})
export class UnicastService {

  constructor(private _http:HttpClient) { }

  getDataFromUrl():Observable<ICommon>{
    return this._http.get<ICommon>('https://jsonplaceholder.typicode.com/posts');
  }

}
