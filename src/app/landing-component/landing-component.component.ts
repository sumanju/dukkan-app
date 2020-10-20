import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LAZY_ROUTES } from '../framework';

@Component({
  selector: 'app-landing-component',
  templateUrl: './landing-component.component.html',
  styleUrls: ['./landing-component.component.scss']
})
export class LandingComponentComponent implements OnInit {

  constructor(private r : Router) { }

  ngOnInit(): void {
  }

}
