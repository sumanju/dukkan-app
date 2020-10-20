import { Component, OnInit } from '@angular/core';
import { ClientStorageService, LAZY_ROUTES } from '../framework';
import { Router } from '@angular/router';

@Component({
  selector    : 'app-app-loading',
  templateUrl : './app-loading.component.html',
  styleUrls   : ['./app-loading.component.scss']
})
export class AppLoadingComponent implements OnInit {

  userId  : string

  constructor(private storage : ClientStorageService,
              private router  : Router) {
  }

  ngOnInit(): void {
    this.userId = this.storage.getLocalStorage('userId')
    if (this.userId)  {
      this.router.navigate([LAZY_ROUTES.LandingPage])
    } else {
      this.router.navigate([LAZY_ROUTES.LoginSignup])
    }
  }


}
