import { Component, OnInit } from '@angular/core'
import { ClientStorageService } from './framework/storage-provider/client-storage.service';

@Component({
  selector    : 'app-root',
  templateUrl : './app.component.html',
  styleUrls   : ['./app.component.scss']
})

export class AppComponent implements OnInit{
  
  userId  : string

  constructor(private storage : ClientStorageService) {
  }

  ngOnInit(): void {
    this.userId = this.storage.getLocalStorage('userId')
  }


}
