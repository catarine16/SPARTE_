import { Component, ElementRef, Renderer2 } from '@angular/core';
@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css'
})
export class TopbarComponent {
  isNavbarOpen = false; 
  constructor(private el: ElementRef, private renderer: Renderer2) {}
  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
    const navbar = this.el.nativeElement.querySelector('.navbar');
    if (this.isNavbarOpen) {
      this.renderer.setStyle(navbar, 'left', '0');
    } else {          
      this.renderer.setStyle(navbar, 'left', '-250px');
    } 
  }
  
}



