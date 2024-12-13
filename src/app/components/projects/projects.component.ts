import { Component } from '@angular/core';
import { TitleBarComponent } from '../title-bar/title-bar.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [TitleBarComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

}
