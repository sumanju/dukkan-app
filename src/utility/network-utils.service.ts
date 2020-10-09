import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class NetworkUtilsService {

  private baseUrl = ``

  constructor(private httpClient  : HttpClient) { }

  async requestAPI(apiName  : string, apiRequest ?:  any)  {
    return this.httpClient.post<any>(`${this.baseUrl}/${apiName}`, apiRequest).toPromise()
  }
}
