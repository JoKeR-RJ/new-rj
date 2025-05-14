import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UseClassService } from './use-class.service';
import { OtherExistingService } from './other-existing.service';
import { UseExistingService } from './use-existing.service';
import { provideHttpClient } from '@angular/common/http';
import { UseValueService } from './use-value.service';
import { MY_CONFIG } from './a';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { 
      provide: UseClassService, 
      useClass: UseClassService 
    } 
    ,
    {
      provide:OtherExistingService ,
      useExisting:UseExistingService
    },
    {
      provide:'my_config',
      useValue:MY_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
