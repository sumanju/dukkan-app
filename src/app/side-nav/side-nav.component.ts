import { Component }          from '@angular/core';
import { BreakpointObserver, 
         Breakpoints 
       }                      from '@angular/cdk/layout';
import { Observable }         from 'rxjs';
import { map, 
         shareReplay 
       }                      from 'rxjs/operators';
import { SIDE_NAV, 
         RouterService, 
         LAZY_ROUTES 
       }                      from '../framework';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {

  SIDE_NAV      : typeof SIDE_NAV   = SIDE_NAV
  sideNavEvent  : SIDE_NAV          

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
              private router            : RouterService) {}

  openNav(sideNavEvent) {

    switch (sideNavEvent) {

      case SIDE_NAV.ONE :
        this.router.navigate(LAZY_ROUTES.UserProfile)
        break
      
      case  SIDE_NAV.TWO :
        this.router.navigate(LAZY_ROUTES.UserRegistration)
        break
      default:

        break
    }
  }

}
