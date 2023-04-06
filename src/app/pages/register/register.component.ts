import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', '../../utils/validaciones.css']
})
export class RegisterComponent implements OnInit{

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
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

    console.log(this.registerForm.get('nombre')?.value)
    if ( this.registerForm.valid){
      let body = new FormData();
      body.append('name', this.registerForm.get('nombre')?.value);
      body.append('lastName', this.registerForm.get('apellidos')?.value);
      body.append('email', this.registerForm.get('correo')?.value);
      body.append('password', this.registerForm.get('contraseña')?.value);

      console.log(body);

      this.authService.userRegister(body).subscribe(resp => console.log(resp));
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
