import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../../utils/validaciones.css']
})
export class LoginComponent {

  correoUsuario: string = '';
  claveUsuario: string = '';
  submitted: boolean = false;

  login() {
    this.submitted = true;
    console.log(this.correoUsuario, this.claveUsuario)
  }
}
