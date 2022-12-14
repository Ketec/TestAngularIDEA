import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TestModule } from 'test';
import { WrapperComponent } from './wrapper/wrapper.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    WrapperComponent
  ],
  imports: [
    BrowserModule,
    TestModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          pathMatch: 'full',
          redirectTo: 'demo'
        },
        {
          path: 'demo',
          loadChildren: () => import('./subdir/subdir.module').then(m => m.SubdirModule)
        },
      ]
    )
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
