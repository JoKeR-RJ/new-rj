import { Component, inject, OnInit } from '@angular/core';
import { take, tap } from 'rxjs';
import { UnicastService } from '../../../shared/services/unicast.service';

@Component({
  selector: 'app-unicast',
  imports: [],
template:` 
<p>unicast works => console</p>
`
})
export class UnicastComponent implements OnInit{

  data:any;

  private _useUnicastService= inject(UnicastService);

  ngOnInit(): void {
    this._useUnicastService.getDataFromUrl().pipe(
      take(1),
      tap((firstData)=>{
        this.data=firstData;
        console.log('UNICAST',firstData)
      })
    ).subscribe()
  }
}
