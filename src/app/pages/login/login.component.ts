import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../../utils/validaciones.css']
})
export class LoginComponent {

  constructor(
    private authService: AuthService
  ){}

  correoUsuario: string = '';
  claveUsuario: string = '';
  submitted: boolean = false;

  login() {
    this.submitted = true;
    this.authService.userLogin(this.correoUsuario, this.claveUsuario).subscribe(resp => console.log(resp));
    console.log(this.correoUsuario, this.claveUsuario)
  }
}
