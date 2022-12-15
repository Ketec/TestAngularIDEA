import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TestModule } from 'test';
import { WrapperComponent } from './wrapper/wrapper.component';
import { RouterModule } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';


function createRemoteUrl(port: number): string {
  return window.location.protocol + '//' + window.location.hostname + ':' + port + '/remoteEntry.js';
}

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
        {
          path: 'test',
          loadChildren: () => loadRemoteModule({
            type: 'module',
            remoteEntry: createRemoteUrl( 4401),
            exposedModule: './Module'
          }).then(m => m.AppModule)
        }
      ]
    )
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
