import { Component, inject, OnInit } from '@angular/core';
import { MulticastService } from '../../../shared/services/multicast.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-multicast',
  imports: [],
  template:` 
  <p>multicast works => console</p>
  `
})
export class MulticastComponent implements OnInit{

  private _useMulticastService= inject(MulticastService);
  a:any;
  ngOnInit(): void {
    // this._useMulticastService.emitSubject$();

    this._useMulticastService.getter().pipe(
      tap((val)=>{
        this.a=val;
        console.log(val);
        
      })
    ).subscribe()
  }


}
