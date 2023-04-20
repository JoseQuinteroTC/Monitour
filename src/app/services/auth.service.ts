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

  updateUser(body: any) {
    return this.http.post(
      environment.API_URL + environment.methods.updateUser,
      body
    )
  }

  userRegister(body: FormData) {
    return this.http.post(
      environment.API_URL + environment.methods.register,
      body
    )
  }

  getUserByToken() {
    const token = this.getToken();
    return this.http.get(
      environment.API_URL + environment.methods.userToken
      + token
    )
  }

  setToken(token: string) {
    sessionStorage.setItem('token', token);
  }

  deleteToken() {
    if(this.getToken()){
      sessionStorage.removeItem('token');
    }
  }

  getToken() {
    return sessionStorage.getItem('token');
  }
}
