import { inject, Injectable } from '@angular/core';
import { UseExistingService } from './use-existing.service';

@Injectable({
  providedIn: 'root'
})
export class OtherExistingService {

  private _alias=inject(UseExistingService);

  alias(){
    this._alias.useExisting();
  }


}
