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

  subirFotoPerfil(body: FormData) {
    return this.http.post(
      environment.API_URL + environment.methods.subirImagenMonitor,
      body
    );
  }

  emailClave(email: string) {
    return this.http.get(
      environment.API_URL + "email/" + email
    );
  }

  codigoClave(body: FormData) {
    return this.http.post(
      environment.API_URL + "reset",
      body
    );
  }

  changePasswordByPin(body: FormData) {
    return this.http.post(
      environment.API_URL + "resetPassword",
      body
    );
  }

  getCertificado(id: number) {
    return this.http.get(
      environment.BASE_URL + environment.methods.descargarCertificado + id
    );
  }
}
