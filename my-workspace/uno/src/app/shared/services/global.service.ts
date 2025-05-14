import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { IGlobal } from '../interfaces/global';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  a:any;
  private subjectGT = new Subject();
  subject$ = new Subject();
  behaviorSubject$ = new BehaviorSubject('original value (BS) ');

  constructor(private _http:HttpClient) {
    this.behaviorSubject$.next('second value (BS)');
   }

  subToSub(){
    this.subject$.subscribe(
    (val) => {
      this.a = val;
      console.log(val);
    }); 

    this.subject$.next('value (S)');
  }

  subToBS(){ 
    
  }

  getterSubject$(){
    return this.subjectGT;
  }

  getFromApi():Observable<IGlobal>{
    return this._http.get<IGlobal>('https://dummyjson.com/quotes');
  }

}
