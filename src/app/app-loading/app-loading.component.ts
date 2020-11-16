import { Component, OnInit }  from '@angular/core';
import { ClientStorageService, 
         LAZY_ROUTES, 
         RouterService 
       }                      from '../framework';

@Component({
  selector    : 'app-app-loading',
  templateUrl : './app-loading.component.html',
  styleUrls   : ['./app-loading.component.scss']
})
export class AppLoadingComponent implements OnInit {

  userId  : string

  constructor(private storage : ClientStorageService,
              private router  : RouterService) {
  }

  ngOnInit(): void {
    this.userId = this.storage.getLocalStorage('userId')
    setTimeout(() => {
      if (this.userId)  {
        this.router.navigate(LAZY_ROUTES.LandingPage)
      } else {
        this.router.navigate(LAZY_ROUTES.LoginSignup)
      }
    }, 1000)  
  }
}
