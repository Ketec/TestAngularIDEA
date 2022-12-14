import { Routes } from '@angular/router';
import { SubCompComponent } from './sub-comp/sub-comp.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'subpath/first',
    pathMatch: 'full',
  },
  {
    path: 'subpath',
    children: [
      {
        path: 'first',
        component: SubCompComponent
      }
    ]
  }
];
