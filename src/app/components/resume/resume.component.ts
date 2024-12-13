import { Component } from '@angular/core';
import { TitleBarComponent } from '../title-bar/title-bar.component';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [TitleBarComponent],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {

}
