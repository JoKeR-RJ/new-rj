import { Component, inject } from '@angular/core';
import { UseClassService } from './use-class.service';
import { UseExistingService } from './use-existing.service';
import { IConfig } from './co.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'prove';
  miao='';

  
constructor(){
  
}

  private _useClass=inject(UseClassService);
  private _useExisting=inject(UseExistingService);


  activateMethods(){
    this._useClass.useClass();
    console.log('');
    this._useExisting.useExisting();

  }


}
