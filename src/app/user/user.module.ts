import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { RegisterComponent } from './register/register.component';

import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ],
  declarations: [RegisterComponent, LoginComponent, ProfileComponent, EditProfileComponent]
})
export class UserModule { }
