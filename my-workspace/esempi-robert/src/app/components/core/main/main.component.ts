import { Component, inject, OnInit } from "@angular/core";
import { ParentComponent } from "../../features/input-output/parent/parent.component";
import { MulticastService } from "../../../shared/services/multicast.service";
import { UnicastService } from "../../../shared/services/unicast.service";
import { Router, RouterModule } from "@angular/router";
import { tap } from "rxjs";
import { MyMethodsService } from "../../../shared/services/my-methods.service";


@Component({
  selector: 'app-main',
  imports: [RouterModule],
  template:`

  <button (click)="moveTo('/parent')">vai a INPUT & OUTPUT </button>
  <button (click)="moveTo('/unicast')">vai a UNICAST </button>
  <button (click)="moveTo('/multicast')">vai a MULTICAST </button>
  <button (click)="moveTo('/prova')">vai a PROVA </button>
`
})
export class MainComponent implements OnInit{

// private _myMethods=inject(MyMethodsService);

private _rt=inject(Router);

ngOnInit(): void {}

moveTo(str:string){
  this._rt.navigate([str])
}

}
