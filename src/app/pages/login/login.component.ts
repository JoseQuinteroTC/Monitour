import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';
import { AdminObservableService } from 'src/app/services/observables/admin.observable.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../../utils/validaciones.css']
})
export class LoginComponent {

  constructor(
    private authService: AuthService,
    private adminObservables: AdminObservableService,
    private router: Router
  ){}

  correoUsuario: string = '';
  claveUsuario: string = '';

  submitted: boolean = false;
  loading: boolean = false;
  invalidUser: boolean = false;

  login() {
    this.submitted = true;
    if(!this.correoUsuario || !this.claveUsuario){
      return;
    }
    this.loading = true;

    let body = new FormData();
    body.append('email', this.correoUsuario);
    body.append('password', this.claveUsuario);
    this.authService.userLogin(body).subscribe(
      (resp: any) => {
        console.log(resp);
        this.loading = false;
        const token = resp.access_token
        if(token){
          sessionStorage.setItem('token', token);
          const user = resp.user;
          const body: UsuarioModel = {
            id: user.id,
            nombre: user.name,
            apellido: user.lastName,
            correo: user.email
          };
          this.adminObservables.setCurrentUser(body);
          this.router.navigate(['']);
        }
      }
    ),
    (error: any) => {
      this.invalidUser = true;
      console.log(error);
    }
    console.log(body);
    console.log(this.correoUsuario, this.claveUsuario)
  }
}
