import { Component, inject, OnInit } from '@angular/core';
import { GlobalService } from '../../../shared/services/global.service';

@Component({
  selector: 'app-due',
  imports: [],
  templateUrl: './due.component.html',
  styleUrl: './due.component.scss'
})
export class DueComponent implements OnInit{


  private _useGlobalService=inject(GlobalService);

  ngOnInit(){
    
  }
}
