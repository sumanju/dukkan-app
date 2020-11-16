import { Component, 
         OnInit 
       }                from '@angular/core'
import { API_STATE }    from '../framework'
import { FormBuilder, 
         FormGroup, 
         Validators 
       }                from '@angular/forms'

enum MODE {
  LOGIN   = "LOGIN",
  SIGNUP  = "SIGNUP"
}

@Component({
  selector    : 'app-login-signup-component',
  templateUrl : './login-signup-component.component.html',
  styleUrls   : ['./login-signup-component.component.scss']
})

export class LoginSignupComponentComponent implements OnInit {

  API_STATE   : typeof API_STATE  = API_STATE
  MODE        : typeof MODE       = MODE

  apiState    : API_STATE  
  mode        : MODE              = MODE.LOGIN  

  loginForm   : FormGroup                 
  signupForm  : FormGroup          

  constructor(private fb  : FormBuilder) {

    this.loginForm  = this.fb.group({
      userId    : ['',  Validators.required],
      password  : ['',  Validators.required]
    })

    this.signupForm = this.fb.group({
      userId    : ['',  Validators.required],
      mobile    : ['',  Validators.required],
      password  : ['',  Validators.required]
    })

  }

  ngOnInit() {
    
  }


  
////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                HTML CALLBACKS
////////////////////////////////////////////////////////////////////////////////////////////////////////

  clearForms()  {
    this.loginForm.reset()
    this.signupForm.reset()
  }

  changeMode()  {
    this.mode = this.mode === MODE.LOGIN  ? MODE.SIGNUP : MODE.LOGIN
    this.clearForms()
  }

  proceed() {
  }

}
