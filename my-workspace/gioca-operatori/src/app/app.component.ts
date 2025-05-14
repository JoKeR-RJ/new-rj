import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MiaoComponent } from "./miao/miao.component";

@Component({
  selector: 'app-root',
  imports: [ MiaoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'gioca-operatori';
}
