/*
    This file is use to write routing path constants and export path globally to the app.
*/

export const MODULE_ROUTES =  {
  UserInfo    : 'userInfo'
}

export const COMPONENTS_ROUTES = {
  Loading           : '',
  LoginSignup       : 'loginsignup',
  LandingComp       : 'landingPage',
  UserProfile       : 'userProfile',
  UserRegistration  : 'userRegistration'
}

export const LAZY_ROUTES  = {
  // Root level routes
  Loading           : `${COMPONENTS_ROUTES.Loading}`,
  LoginSignup       : `${COMPONENTS_ROUTES.LoginSignup}`,
  LandingPage       : `${COMPONENTS_ROUTES.LandingComp}`,

  // Lazy Module routes
  UserProfile       : `${MODULE_ROUTES.UserInfo}/${COMPONENTS_ROUTES.UserProfile}`,
  UserRegistration  : `${MODULE_ROUTES.UserInfo}/${COMPONENTS_ROUTES.UserRegistration}`
}