import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  userLogin(email: string, clave:string) {
    return this.http.get(
      environment.API_URL + environment.methods.login,
      {}
    )
  }
}
