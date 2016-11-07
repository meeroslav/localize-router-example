import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from "@angular/router";
import { LocalizeRouterModule } from "localize-router";

export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, '/assets/locales', '.json');
}

const routes: Routes = [
  { path: '', loadChildren: 'app/home/home.module#HomeModule'},
  { path: 'users', loadChildren: 'app/users/users.module#UsersModule'},
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    }),
    LocalizeRouterModule.forRoot(routes),
    RouterModule.forRoot(routes)
  ],
  exports: [LocalizeRouterModule, RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
