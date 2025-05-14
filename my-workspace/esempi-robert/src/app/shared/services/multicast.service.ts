import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, of, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MulticastService {

  constructor() { }
  n:any;
  subject$ = new Subject();
  behaviorSubject$ = new BehaviorSubject<any>('VALORE ORIGINALE del BS');

  replaySubject$= new ReplaySubject(50);

  private sub =new Subject();

  setter(a:number){
    this.sub.next(a);
  }

  getter(){
    return this.sub.asObservable();
  }
  

  emitSubject$(){
    this.n= of(3,7,9).subscribe(val => console.log(val) );
    
    this.subject$.subscribe(
      (value) => {
        console.log(value)
      });

    this.subject$.next(9);
    this.subject$.next(9);

    
  }

  emitBehaviorSubject$(){
    this.subject$.next('valore 1');
    this.subject$.next('valore 2');
    this.subject$.next('valore 3');
    this.subject$.complete();
    this.subject$.next('valore 4');
  }
  
}
