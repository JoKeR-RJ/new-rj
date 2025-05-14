import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  template:`

  <p>child component</p>
  <button (click)="childToParent()">figlio emette al padre</button>

`
})
export class ChildComponent implements OnInit {

  b:any;

  @Input() in='';
  @Output() out = new EventEmitter<string>();


  ngOnInit(): void { }

  childToParent(){
    this.out.emit('ciao dal fihlio');
  }

}
