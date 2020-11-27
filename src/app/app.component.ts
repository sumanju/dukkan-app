import { Component, 
         OnInit 
       }              from '@angular/core'

@Component({
  selector    : 'app-root',
  templateUrl : './app.component.html',
  styleUrls   : ['./app.component.scss']
})

export class AppComponent implements OnInit{

  fullScreen  : object  = {}

  constructor() {
  }

  ngOnInit(): void {
    this.fullScreen = {
      height  : screen.height + 'px',
      width   : screen.width + 'px'
    }
  }

}
