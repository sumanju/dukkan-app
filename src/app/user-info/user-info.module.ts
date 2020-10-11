import { NgModule }               from '@angular/core'
import { CommonModule }           from '@angular/common'
import { UserProfileComponent }   from './user-profile/user-profile.component'
import { UserInfoRoutingModule }  from './user-info-routing.module';
import { UserRegistrationComponent } from './user-registration/user-registration.component'

@NgModule({
  declarations  : [UserProfileComponent, UserRegistrationComponent],
  imports       : [
    CommonModule,
    UserInfoRoutingModule
  ]
})
export class UserInfoModule { }
