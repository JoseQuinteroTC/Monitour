import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private http: HttpClient
  ) { }

  registerMonitor(body: any) {
    return this.http.post(
      environment.API_URL + environment.methods.registerMonitor,
      body
    );
  }
}
