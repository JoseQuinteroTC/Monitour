import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css', '../../utils/validaciones.css']
})
export class UsuarioComponent implements OnInit {

  usuario: UsuarioModel;
  eliminarCuenta: boolean = false;

  // Loaders
  cambiandoClave: boolean = false;
  cambiandoInfo: boolean = false;
  eliminando: boolean = false;

  //Message booleans
  claveModificada: boolean = false;
  usuarioModificado: boolean = false;

  usuarioForm: FormGroup = this.fb.group({
    nombre: ['', Validators.required],
    apellido: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]]
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
    console.log(this.usuarioForm.controls['email'])
    if (!this.usuario?.id || this.usuarioForm.invalid) {
      return;
    }
    this.cambiandoInfo = true;
    let form: FormData = new FormData();
    form.append('id', this.usuario.id.toString());
    form.append('name', this.usuarioForm.get('nombre')?.value);
    form.append('lastName', this.usuarioForm.get('apellido')?.value);
    form.append('email', this.usuarioForm.get('email')?.value);
    firstValueFrom(this.authService.updateUser(form)).then(
    () => {
      this.cambiandoInfo = false;
      this.usuarioModificado = true;
      setTimeout(() => {
        this.usuarioModificado = false;
        window.location.reload();
      }, 2000);
    }).catch(
      (e) => {
        console.log(e);
        this.usuarioForm.controls['email']?.setErrors({emailTaken: true});
        this.cambiandoInfo = false;
      }
    );
  }

  cambiarClave() {
    console.log(this.claveForm.controls['claveNueva'])
    this.contraseñasIguales();

    if (this.claveForm.invalid) {
      return;
    }

    this.cambiandoClave = true;
    let form: FormData = new FormData();
    form.append('id', this.usuario.id.toString());
    form.append('password', this.claveForm.get('clave')?.value);
    form.append('newPassword', this.claveForm.get('claveNueva')?.value);

    this.authService.changePassword(form).subscribe({
      next: () => {
        this.cambiandoClave = false;
        this.claveForm.reset();
        this.claveModificada = true;
        setTimeout(() => {
          this.claveModificada = false;
        }, 2000);
      },
      error: (e) => {
        console.log(e);
        this.cambiandoClave = false;
        this.claveForm.controls['clave']?.setErrors({invalidClave: true});
      }
    });
  }

  contraseñasIguales() {
    const password = this.claveForm.get('claveNueva')?.value;
    const confirmPassword = this.claveForm.get('confirmClave')?.value;
    if (password !== confirmPassword) {
      this.claveForm.get('confirmClave')?.setErrors({ notSame: true });
    }
  }

  eliminarUsuario() {
    this.eliminando = true;
    firstValueFrom(this.authService.deleteUser(this.usuario.id)).then(
      (resp) => {
        console.log(resp);
        this.authService.deleteToken();
        this.router.navigate(['']);
      }
    );
  }
}
