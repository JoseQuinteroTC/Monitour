import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../environment/environment';
import { of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUser: any;

  constructor(
    private http: HttpClient
  ) { }

  userLogin(body: FormData) {
    return this.http.post(
      environment.API_URL + environment.methods.login,
      body
    ).pipe(
      tap(user => {
        this.currentUser = user;
      })
    );
  }

  updateUser(body: FormData) {
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
    if (this.currentUser) {
      return of(this.currentUser);
    }

    return this.http.get(
      environment.API_URL + environment.methods.userToken
      + token).pipe(tap(user => {
        this.currentUser = user;
      })
    )
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  deleteToken() {
    if(this.getToken()){
      localStorage.removeItem('token');
    }
  }

  getToken() {
    return localStorage.getItem('token');
  }

  changePassword(body: FormData) {
    return this.http.post(
      environment.API_URL + environment.methods.updatePassword,
      body
    )
  }

  deleteUser(id: number) {
    return this.http.post(
      environment.API_URL + environment.methods.deleteUser
      + id,
      {}
    )
  }
}
