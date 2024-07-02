import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../model/course';
import { COURSES } from '../data';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'], // Changed to styleUrls (plural)
})
export class CardComponent {
  course: Course[] = COURSES;
}
