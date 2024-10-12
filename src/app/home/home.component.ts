import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgClass],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
//  menubar 
isMenuOpen: boolean = true;

// toggleMenu(){
//   this.isMenuOpen = !this.isMenuOpen;
// }
closeMenu(){
  this.isMenuOpen = !this.isMenuOpen
}
openMenu(){
  this.isMenuOpen = !this.isMenuOpen
}
}
