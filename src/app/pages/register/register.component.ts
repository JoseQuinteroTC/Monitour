import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioModel } from 'src/app/models/usuario.model';

import { AuthService } from 'src/app/services/auth.service';
import { AdminObservableService } from 'src/app/services/observables/admin.observable.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', '../../utils/validaciones.css']
})
export class RegisterComponent implements OnInit{

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ){ }

  submitted: boolean = false;
  registerForm: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      correo: ['', Validators.required],
      contraseña: ['', Validators.required],
      confirmarContraseña: ['', Validators.required]
    });
  }

  registro() {
    this.submitted = true;
    this.registerForm.markAllAsTouched();
    this.contraseñasIguales();

    if ( this.registerForm.valid) {
      let body = new FormData();
      body.append('name', this.registerForm.get('nombre')?.value);
      body.append('lastName', this.registerForm.get('apellidos')?.value);
      body.append('email', this.registerForm.get('correo')?.value);
      body.append('password', this.registerForm.get('contraseña')?.value);

      this.authService.userRegister(body).subscribe({
        next: (resp: any) => {
          console.log(resp);
          const token = resp.access_token;
          if (token) {
            this.authService.setToken(token);
            this.router.navigate(['login']);
          }
        },
        error: (e) => {
          this.registerForm.controls['correo']?.setErrors({emailTaken: true});
          console.log(e);
        }
      });
    }
  }

  validarCampo(campo: string) {
    return this.submitted && this.registerForm.get(campo)?.invalid
    && (this.registerForm.get(campo)?.dirty || this.registerForm.get(campo)?.touched);
  }

  contraseñasIguales() {
    const password = this.registerForm.get('contraseña')?.value;
    const confirmPassword = this.registerForm.get('confirmarContraseña')?.value;
    if (password !== confirmPassword) {
      this.registerForm.get('confirmarContraseña')?.setErrors({ notSame: true });
    }
  }
}
