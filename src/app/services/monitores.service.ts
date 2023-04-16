import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class MonitoresService {

  constructor(
    private http: HttpClient
  ) { }

  getMonitores() {
    return this.http.get(
      environment.API_URL + environment.methods.monitores
    )
  }
}
