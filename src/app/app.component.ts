import { Component, OnInit } from '@angular/core'
import { ClientStorageService } from './framework/storage-provider/client-storage.service';
import { Router } from '@angular/router';
import { COMPONENTS_ROUTES } from './framework/app-routing-constant';

@Component({
  selector    : 'app-root',
  templateUrl : './app.component.html',
  styleUrls   : ['./app.component.scss']
})

export class AppComponent implements OnInit{
  
  userId  : string

  constructor(private storage : ClientStorageService,
              private router  : Router) {
  }

  ngOnInit(): void {
    this.userId = this.storage.getLocalStorage('userId')
    if (this.userId)  {
      this.router.navigate([COMPONENTS_ROUTES.LandingComp])
    }
  }


}
