import { NgModule } from '@angular/core';
import { Http } from '@angular/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';
import { LocalizeRouterModule } from 'localize-router';
import { BrowserModule } from '@angular/platform-browser';

export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, '/assets/locales/', '.json');
}

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'users', loadChildren: './users/users.module#UsersModule' },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  bootstrap: [ AppComponent ],
  imports: [
    BrowserModule.withServerTransition({
      appId: 'my-app-id'
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [ Http ]
      }
    }),
    RouterModule.forRoot(routes),
    LocalizeRouterModule.forRoot(routes),
    HomeModule
  ],
  exports: [RouterModule]
})
export class AppModule { }
