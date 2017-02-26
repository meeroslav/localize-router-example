import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { TranslateModule } from '@ngx-translate/core';
import { LocalizeRouterModule } from 'localize-router';

let routes = [
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [
    TranslateModule,
    LocalizeRouterModule.forChild(routes),
    RouterModule.forChild(routes)
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
