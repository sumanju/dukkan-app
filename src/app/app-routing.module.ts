import { NgModule }                   from '@angular/core'
import { Routes, 
         RouterModule 
       }                              from '@angular/router'
import { MODULE_ROUTES, 
         COMPONENTS_ROUTES }          from './framework/app-routing-constant'
import { LandingComponentComponent }  from './landing-component/landing-component.component'
import { LoginSignpComponent }        from './login-signp/login-signp.component'

const routes: Routes = [
  { path      : COMPONENTS_ROUTES.LandingComp, 
    component : LoginSignpComponent
  },
  { path      : COMPONENTS_ROUTES.LandingComp ,
    component : LandingComponentComponent
  }, 
  { path          : MODULE_ROUTES.UserInfo  ,
    loadChildren  : ()  =>  import('./user-info/user-info.module').then(m => m.UserInfoModule)
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
