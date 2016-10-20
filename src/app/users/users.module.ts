import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { UserComponent } from './user/user.component';
import { ProfileComponent } from './profile/profile.component';
import { CommonModule } from "@angular/common";
import { TranslateModule } from 'ng2-translate';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule.forChild([
      { path: '', component: UsersComponent },
      { path: ':id', component: UserComponent },
      { path: ':id/profile', component: ProfileComponent }
    ])
  ],
  declarations: [UsersComponent, UserComponent, ProfileComponent]
})
export class UsersModule { }
