import { Injectable } from '@angular/core';
import { UsuarioModel } from 'src/app/models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AdminObservableService {

  private user: UsuarioModel = {
    id: 0,
    nombre: '',
    apellido: '',
    correo: ''
  };

  isLoggedIn() {
    return sessionStorage.getItem('token') != undefined;
  }

  setCurrentUser(user: UsuarioModel) {
    Object.assign(this.user, user);
  }

  getCurrentUser() {
    return this.user;
  }
}
