import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { TranslateModule, TranslateLoader, TranslateStaticLoader, TranslateService } from 'ng2-translate';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';
import { LocalizeRouterModule, StaticParserLoader, LocalizeParser } from 'localize-router';
import { UsersModule } from './users/users.module';

export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, '/assets/locales', '.json');
}

// export function localizeLoaderFactory(translate: TranslateService, http: Http) {
//   return new StaticParserLoader(translate, http);
// }

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }
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
    RouterModule.forRoot(routes),
    LocalizeRouterModule.forRoot(routes
    //   , {
    //   provide: LocalizeParser,
    //   useFactory: localizeLoaderFactory,
    //   deps: [TranslateService, Http]
    // }
    ),
    HomeModule,
    UsersModule
  ],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
