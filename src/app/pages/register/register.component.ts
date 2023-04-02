import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', '../../utils/validaciones.css']
})
export class RegisterComponent implements OnInit{

  constructor(
    private fb: FormBuilder
  ){ }

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
    this.registerForm.markAllAsTouched();
    this.contraseñasIguales();
    console.log(this.registerForm.get('nombre')?.value)
    if ( this.registerForm.valid){
      console.log('registrado')
    }
  }

  validarCampo(campo: string) {
    return this.registerForm.get(campo)?.invalid && (this.registerForm.get(campo)?.dirty || this.registerForm.get(campo)?.touched);
  }

  contraseñasIguales() {
    const password = this.registerForm.get('contraseña')?.value;
    const confirmPassword = this.registerForm.get('confirmarContraseña')?.value;
    if (password !== confirmPassword) {
      this.registerForm.get('confirmarContraseña')?.setErrors({ notSame: true });
    }
  }
}
