import { Routes } from '@angular/router';
import { TaskComponent } from './task/task.component';
import { CardComponent } from './card/card.component';

export const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '', component: TaskComponent },
  { path: 'card', component: CardComponent },
];
