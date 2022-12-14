import { NgModule } from '@angular/core';
import { DirectivesModule } from './directives';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [],
  imports: [ DirectivesModule, ComponentsModule ],
  exports: [ DirectivesModule, ComponentsModule ]
})
export class TestModule { }
