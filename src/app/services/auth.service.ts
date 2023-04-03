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

  userLogin(body: FormData) {
    return this.http.post(
      environment.API_URL + environment.methods.login,
      body
    )
  }

  userRegister(body: FormData) {
    return this.http.post(
      environment.API_URL + environment.methods.register,
      
      body
    )
  }
}
