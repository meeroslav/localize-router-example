import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { UserComponent } from './user/user.component';
import { ProfileComponent } from './profile/profile.component';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LocalizeRouterModule } from 'localize-router';

let routes = [
  { path: '', component: UsersComponent },
  { path: ':id', component: UserComponent },
  { path: ':id/profile', component: ProfileComponent }
];

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    LocalizeRouterModule.forChild(routes),
    RouterModule.forChild(routes)
  ],
  declarations: [UsersComponent, UserComponent, ProfileComponent]
})
export class UsersModule { }
