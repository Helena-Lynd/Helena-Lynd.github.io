import { CommonModule } from '@angular/common';
import {Component} from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'title-bar',
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  standalone: true,
  templateUrl: './title-bar.component.html',
  styleUrl: './title-bar.component.css'
})

export class TitleBarComponent {
  
}