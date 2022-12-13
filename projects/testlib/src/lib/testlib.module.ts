import { NgModule } from '@angular/core';
import { TestLibComponent } from './testlib.component';

@NgModule({
  declarations: [
    TestLibComponent
  ],
  exports: [TestLibComponent]
})
export class TestLibModule { }
