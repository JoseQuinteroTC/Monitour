import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AdminObservableService } from 'src/app/services/observables/admin.observable.service';
import { AuthService } from 'src/app/services/auth.service';
import { UsuarioModel } from 'src/app/models/usuario.model';

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
    this.invalidUser = false;
    if(!this.correoUsuario || !this.claveUsuario){
      return;
    }

    this.loading = true;
    const body = new FormData();
    body.append('email', this.correoUsuario);
    body.append('password', this.claveUsuario);

    this.authService.userLogin(body).subscribe(
      (resp: any) => {
        console.log(resp);
        this.loading = false;
        const token = resp.access_token;

        if(token){
          localStorage.setItem('token', token);
          const user = resp.user;
          this.adminObservables.setCurrentUser(user);
          this.router.navigate(['']);
        }
      },
      (error) => {
        this.loading = false;
        this.invalidUser = true;
        console.log(error);
      }
    )
    console.log(body);
    console.log(this.correoUsuario, this.claveUsuario);
  }
}
