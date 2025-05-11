import { Component } from '@angular/core';

@Component({
  selector: 'cem-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  homeText='Home';
  statusLogin='status : Logged in';
}
