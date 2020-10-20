import { NgModule }                       from '@angular/core'
import { Routes, 
         RouterModule 
       }                                  from '@angular/router'
import { MODULE_ROUTES, 
         COMPONENTS_ROUTES, 
         LAZY_ROUTES}                     from './framework/app-routing-constant'
import { LandingComponentComponent }      from './landing-component/landing-component.component'
import { LoginSignupComponentComponent }  from './login-signup-component/login-signup-component.component'
import { AppLoadingComponent }            from './app-loading/app-loading.component'

const routes: Routes = [
  {
    path      : LAZY_ROUTES.Loading,
    component : AppLoadingComponent
  },
  { path      : LAZY_ROUTES.LoginSignup, 
    component : LoginSignupComponentComponent
  },
  { path      : LAZY_ROUTES.LandingPage ,
    component : LandingComponentComponent,
  }, 
  { path          : MODULE_ROUTES.UserInfo,
    loadChildren  : ()  =>  import('./user-info/user-info.module').then(m => m.UserInfoModule)
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
