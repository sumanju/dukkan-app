import { NgModule }                   from '@angular/core'
import { Routes, 
         RouterModule 
       }                              from '@angular/router'
import { UserProfileComponent }       from './user-profile/user-profile.component'
import { UserRegistrationComponent }  from './user-registration/user-registration.component'
import { COMPONENTS_ROUTES }          from '../framework/app-routing-constant';


const routes: Routes = [
  {
    path      : COMPONENTS_ROUTES.UserProfile,
    component : UserProfileComponent
  },
  {
    path      : COMPONENTS_ROUTES.UserRegistration,
    component : UserRegistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserInfoRoutingModule { }
