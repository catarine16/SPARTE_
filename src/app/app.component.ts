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
}
