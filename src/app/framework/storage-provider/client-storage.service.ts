import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientStorageService {

  constructor() { }

  getLocalStorage(key : string) {
    return localStorage.getItem(key)
  }

  setLocalStorage(key : string, value : string | number | Object) {
    localStorage.setItem(key, String(value))
  }

  removeLocalStorage(key  : string)  {
    localStorage.removeItem(key)
  }

  getSessionStorage(key : string) {
    return  sessionStorage.getItem(key)
  }

  setSessionStorage(key : string, value : string  | number  | Object) {
    sessionStorage.setItem(key, String(value))
  }

  removeSessionStorage(key  : string) {
    sessionStorage.removeItem(key)
  }
}
