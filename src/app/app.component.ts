import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { TopbarComponent } from './pages/topbar/topbar.component';
import { CommonModule } from '@angular/common';
 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TopbarComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Sparte';
  ngOnInit(): void {
    const img: HTMLImageElement = document.createElement("img");
    img.src = "/assets/img/back2.png";
    img.style.position = "fixed";
    img.style.top = "0";
    img.style.left = "0";
    img.style.width = "100vw";
    img.style.height = "100vh";
    img.style.zIndex = "-1";
    document.body.appendChild(img);
  }
 
}
