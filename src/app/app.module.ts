import { BrowserModule }                  from '@angular/platform-browser'
import { NgModule, 
         NO_ERRORS_SCHEMA 
       }                                  from '@angular/core'
import { AppRoutingModule }               from './app-routing.module'
import { AppComponent }                   from './app.component'
import { BrowserAnimationsModule }        from '@angular/platform-browser/animations'
import { HttpClientModule }               from '@angular/common/http'
import { MaterialModule }                 from './material/material.module'
import { FormsModule, 
         ReactiveFormsModule 
       }                                  from '@angular/forms';
import { SideNavComponent }               from './side-nav/side-nav.component';
import { LandingComponentComponent }      from './landing-component/landing-component.component';
import { LoginSignupComponentComponent }  from './login-signup-component/login-signup-component.component';
import { TranslatePipe }                  from './framework/translation/translate.pipe';
import { AppLoadingComponent }            from './app-loading/app-loading.component';
import { AppCommonModule }                from './app-common/app-common.module'

@NgModule({
  declarations  : [
    AppComponent,
    SideNavComponent,
    LandingComponentComponent,
    LoginSignupComponentComponent,
    TranslatePipe,
    AppLoadingComponent
  ],
  imports       : [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AppCommonModule
  ],
  providers   : [],
  schemas     : [NO_ERRORS_SCHEMA],
  bootstrap   : [AppComponent]
})

export class AppModule { }
