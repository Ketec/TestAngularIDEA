import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routes as demoRoutes } from './subdir-routes';
import { WrapperComponent } from '../wrapper/wrapper.component';
import { SubCompComponent } from './sub-comp/sub-comp.component';
import { TestModule } from 'test';

const routes: Routes = [
  {
    path: '',
    component: WrapperComponent,
    children: demoRoutes
  }
];

@NgModule({
  declarations: [
    SubCompComponent
  ],
  imports: [
    CommonModule,
    TestModule,
    RouterModule.forChild(routes)
  ]
})
export class SubdirModule {}
