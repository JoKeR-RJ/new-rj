import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ChildComponent } from "../child/child.component";


@Component({
  selector: 'app-parent',
  imports: [CommonModule, ChildComponent],
  template: `

  <app-child [in]="msg" (out)="receiveChild($event)"></app-child>

  <div *ngIf="container.length> 1" >
   <p>parent component</p>
   <p>{{container}}</p>
  </div>

  `
})
export class ParentComponent {
  msg:string='msg padre';
  text:string='';
  container:string='';

  receiveChild(text:string){
    this.container = text ;
  }

}
