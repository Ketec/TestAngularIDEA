import { NgModule } from '@angular/core';
import { TestlibComponent } from './testlib.component';

@NgModule({
  declarations: [
    TestlibComponent
  ],
  exports: [
    TestlibComponent
  ]
})
export class TestlibModule { }
