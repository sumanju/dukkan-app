import { Component, OnInit } from '@angular/core';
import { LAZY_ROUTES, RouterService } from '../framework';

@Component({
  selector: 'app-landing-component',
  templateUrl: './landing-component.component.html',
  styleUrls: ['./landing-component.component.scss']
})
export class LandingComponentComponent implements OnInit {

  constructor(private router : RouterService) { }

  ngOnInit(): void {
  }

  some()  {
    this.router.navigate(LAZY_ROUTES.UserProfile)
  }
}
