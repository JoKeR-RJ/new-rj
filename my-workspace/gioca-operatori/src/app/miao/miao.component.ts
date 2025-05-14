import { Component, inject, OnInit } from '@angular/core';
import { BauService } from '../bau.service';
import { filter, map, tap } from 'rxjs';

@Component({
  selector: 'app-miao',
  imports: [],
  templateUrl: './miao.component.html',
  styleUrl: './miao.component.scss'
})
export class MiaoComponent implements OnInit{

  listaNumeri:number[]=[1,2,3,6,7];
  contenitore:any;
  private _miaoService=inject(BauService);

  ngOnInit(): void {
    this.loadData();
    this.playWithList();
  }

  playWithList(){
   return  console.log('playWithList()\n',this.listaNumeri.filter(val=>val %2 !==0).map(value=>value*47)) 
  }

  loadData(){
    this._miaoService.getdata().pipe(
      tap((val)=>{
        this.contenitore = val;
        console.log('al tap() sono cosi',val);
      })
    ).subscribe();
  }


  
}
