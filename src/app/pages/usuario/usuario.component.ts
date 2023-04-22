import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuario: UsuarioModel;
  eliminarCuenta: boolean = false;

  usuarioForm: FormGroup = this.fb.group({
    nombre: ['', Validators.required],
    apellido: ['', Validators.required],
    email: ['', Validators.required]
  });

  claveForm: FormGroup = this.fb.group({
    clave: ['', Validators.required],
    claveNueva: ['', Validators.required],
    confirmClave: ['', Validators.required]
  });

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.authService.getUserByToken().subscribe(
      (resp) => {
        console.log(resp);
        this.usuario = resp[0];
        this.setDatosUsuario();
      }
    )
  }

  setDatosUsuario() {
    if(!this.usuario){
      return;
    }
    this.usuarioForm.controls['nombre'].setValue(this.usuario.name);
    this.usuarioForm.controls['apellido'].setValue(this.usuario.lastName);
    this.usuarioForm.controls['email'].setValue(this.usuario.email);
  }

  guardarUsuario() {
    if (!this.usuario?.id) {
      return
    }
    let form: FormData = new FormData();
    form.append('id', this.usuario.id.toString());
    form.append('name', this.usuarioForm.get('nombre')?.value);
    form.append('lastName', this.usuarioForm.get('apellido')?.value);
    form.append('email', this.usuarioForm.get('email')?.value);
    this.authService.updateUser(form).subscribe(
      (resp) => {
        window.location.reload();
        console.log(resp);
      }
    )
  }

  cambiarClave() {
    this.contraseñasIguales();

    if (this.claveForm.invalid) {
      return;
    }

    let form: FormData = new FormData();
    form.append('id', this.usuario.id.toString());
    form.append('password', this.claveForm.get('clave')?.value);
    form.append('newPassword', this.claveForm.get('claveNueva')?.value);

    this.authService.changePassword(form).subscribe(
      (resp) => {
        this.claveForm.get('clave')?.setValue('');
        this.claveForm.get('claveNueva')?.setValue('');
        this.claveForm.get('confirmClave')?.setValue('');
      }
    )
  }

  contraseñasIguales() {
    const password = this.claveForm.get('claveNueva')?.value;
    const confirmPassword = this.claveForm.get('confirmClave')?.value;
    if (password !== confirmPassword) {
      this.claveForm.get('confirmClave')?.setErrors({ notSame: true });
    }
  }

  eliminarUsuario() {
    this.authService.deleteUser(this.usuario.id).subscribe(
      (resp) => {
        console.log(resp);
      }
    )
    this.authService.deleteToken();
    this.router.navigate(['']);
  }
}
