import { Component, inject, OnInit } from '@angular/core';
import { GlobalService } from '../../../shared/services/global.service';
import { take, tap } from 'rxjs';
import { DueComponent } from "../b-due/due.component";

@Component({
  selector: 'app-uno',
  imports: [],
  templateUrl: './uno.component.html',
  styleUrl: './uno.component.scss',
})
export class UnoComponent implements OnInit {
  private _useGlobalService = inject(GlobalService);

  a:any;
  ngOnInit(): void {
    //console.log(this._useGlobalService.a);
    this.useBS();
  }

  // useSub() {
  //   this._useGlobalService.subToSub();
  // }



  useBS() {
    this._useGlobalService.behaviorSubject$.pipe(
      take(1),
        tap((val) => {
          this.a=val;
          console.log(val);
        })
      )
      .subscribe();
  }
}
