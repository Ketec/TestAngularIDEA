import { NgModule } from '@angular/core';
import { UniqueIdDirective } from './unique-id.directive';

@NgModule({
  declarations: [
    UniqueIdDirective
  ],
  exports: [
    UniqueIdDirective
  ]
})
export class DirectivesModule {}
