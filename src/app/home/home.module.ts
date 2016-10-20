import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { TranslateModule } from 'ng2-translate';

@NgModule({
  imports: [
    TranslateModule,
    RouterModule.forChild([
      { path: '', component: HomeComponent }
    ])
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
