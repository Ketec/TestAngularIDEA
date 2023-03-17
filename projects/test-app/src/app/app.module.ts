import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
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
