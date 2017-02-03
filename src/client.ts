import './polyfills.ts';
import { platformUniversalDynamic } from 'angular2-universal';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/';

if (environment.production) {
  enableProdMode();
}

platformUniversalDynamic().bootstrapModule(AppModule);
