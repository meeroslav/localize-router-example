import { UniversalModule } from 'angular2-universal';
import { NgModule } from '@angular/core';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { HomeModule } from './home/home.module';
import { LocalizeRouterModule, LocalizeParser } from 'localize-router';
import { UsersModule } from './users/users.module';
import { Location } from '@angular/common';

let fs = require('fs');

export class TranslateUniversalLoader implements TranslateLoader {
  /**
   * Gets the translations from the server
   * @param lang
   * @returns {any}
   */
  public getTranslation(lang: string): Observable<any> {
    return Observable.create(observer => {
      observer.next(JSON.parse(fs.readFileSync(`/assets/locales/${lang}.json`, 'utf8')));
      observer.complete();
    });
  }
}

export class LocalizeUniversalLoader extends LocalizeParser {
  /**
   * Gets config from the server
   * @param routes
   */
  public load(routes: Routes): Promise<any> {
    return new Promise((resolve: any) => {
      let data: any = JSON.parse(fs.readFileSync(`/assets/locales.json`, 'utf8'));
      this.locales = data.locales;
      this.prefix = data.prefix;
      this.init(routes).then(resolve);
    });
  }
}

export function localizeLoaderFactory(translate: TranslateService, location: Location) {
  return new LocalizeUniversalLoader(translate, location);
}

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    UniversalModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: TranslateUniversalLoader
      }
    }),
    RouterModule.forRoot(routes),
    LocalizeRouterModule.forRoot(routes, {
      provide: LocalizeParser,
      useFactory: localizeLoaderFactory,
      deps: [TranslateService]
    }),
    HomeModule,
    UsersModule
  ],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
