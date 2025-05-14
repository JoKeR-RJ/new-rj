import { Component, inject, Injectable, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { take, tap } from 'rxjs';
import { UnicastService } from './shared/services/unicast.service';
@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit{

  data:any;

  private _rt=inject(Router)
  private _useUnicastService= inject(UnicastService);

  ngOnInit(): void {}

  unicastSubscription(){
    this._useUnicastService.getDataFromUrl().pipe(
      take(1),
      tap( (store) => {
        this.data=store
        console.log(store); 
      })
    ).subscribe();
  }

  moveTo() {
    this._rt.navigate(['/main']);
  }
}
