import { Injectable }           from '@angular/core';
import { NetworkUtilsService }  from '../framework';

@Injectable({
  providedIn : 'root'
})

export class LoginAuthService {

  constructor(private httpCall : NetworkUtilsService) { }

  signUpUser(params : any) : Promise<any>  {
    return this.httpCall.requestAPI('', params)
  }

  loginAuth(params : any) : Promise<any> {
    return this.httpCall.requestAPI('', params)
  } 

}
