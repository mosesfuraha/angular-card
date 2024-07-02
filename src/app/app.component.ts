import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { COURSES } from './data';
import { CardComponent } from './card/card.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'newApp';
  courses = COURSES;
}
