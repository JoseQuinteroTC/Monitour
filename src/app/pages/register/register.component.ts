import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
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
      })
  }

  registro() {
    this.registerForm.markAllAsTouched();
    console.log(this.registerForm.get('nombre')?.value)
    if ( this.registerForm.valid){
      console.log('registrado')

    }
  }

  validarCampo(campo: string) {
    return this.registerForm.get(campo)?.invalid && (this.registerForm.get(campo)?.dirty || this.registerForm.get(campo)?.touched);
  }
}
