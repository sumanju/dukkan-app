import { BrowserModule }            from '@angular/platform-browser'
import { NgModule, NO_ERRORS_SCHEMA }                 from '@angular/core'
import { AppRoutingModule }         from './app-routing.module'
import { AppComponent }             from './app.component'
import { BrowserAnimationsModule }  from '@angular/platform-browser/animations'
import { HttpClientModule }         from '@angular/common/http'
import { MaterialModule }           from './material/material.module'

@NgModule({
  declarations  : [
    AppComponent
  ],
  imports       : [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers   : [],
  schemas     : [NO_ERRORS_SCHEMA],
  bootstrap   : [AppComponent]
})
export class AppModule { }
