/*
  This service override router service to get more functionality.
  1) having router stack to track the navigation
  2) queryparams become more easy to use.
  3) go back functionality is added.
*/

import { Injectable } from '@angular/core'
import { Router }     from '@angular/router'

interface UrlStack {
  urlString   : string
  queryParams : object
}

@Injectable({
  providedIn: 'root'
})

export class RouterService {

  private urlStack  : UrlStack[]  = []

  constructor(private router : Router) { }

  navigate(routeName : string, routeParams : object)  {
    this.urlStack.push({
      urlString   : routeName,
      queryParams : routeParams
    })
    this.router.navigate([routeName])
  }

  goBack()  {
    this.urlStack.pop()
    this.router.navigate([ this.urlStack[this.urlStack.length - 1].urlString ])
  } 

  getQueryParams()  {
    return this.urlStack[this.urlStack.length - 1].queryParams
  }

  navigateBackBy(index : number)  {
    
    if (this.urlStack.length - index > 0)
      this.urlStack.slice(0, this.urlStack.length - index)
    else
      return
    this.router.navigate([ this.urlStack[this.urlStack.length - 1].urlString ])
  }
  
}
