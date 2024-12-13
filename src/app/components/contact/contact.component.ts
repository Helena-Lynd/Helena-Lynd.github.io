import { Component } from '@angular/core';
import { TitleBarComponent } from '../title-bar/title-bar.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [TitleBarComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
