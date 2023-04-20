import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';
import { AdminObservableService } from 'src/app/services/observables/admin.observable.service';

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

  constructor(
    private authService: AuthService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.authService.getUserByToken().subscribe(
      (resp) => {
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
    const body: UsuarioModel = {
      id: this.usuario.id,
      name: this.usuarioForm.controls['nombre'].value,
      lastName: this.usuarioForm.controls['apellido'].value,
      email: this.usuarioForm.controls['email'].value
    }
    this.authService.updateUser(body).subscribe(
      (resp) => {
        console.log(resp);
      }
    )
  }
}
