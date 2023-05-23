import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-recuperar-clave',
  templateUrl: './recuperar-clave.component.html',
  styleUrls: ['./recuperar-clave.component.css']
})
export class RecuperarClaveComponent implements OnInit {
  @ViewChild('formEmail') formEmail: NgForm;
  @ViewChild('formCode') formCode: NgForm;
  @ViewChild('formPassword') formPassword: NgForm;

  emailSent: boolean = false;
  codeSent: boolean = false;
  loading: boolean = false;

  // Correo form
  correo: string;

  // Codigo form
  codigoSeguridad: string;

  // Nueva clave form
  nuevaClave: string;
  confirmarClave: string;

  constructor(
    private usuarioService: UsuarioService,
    private dialogRef: DynamicDialogRef,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
  }

  enviarCorreo() {
    if (this.formEmail.invalid) { return }
    this.loading = true;
    this.usuarioService.emailClave(this.correo).subscribe({
      next: (resp) => {
        this.loading = false;
        console.log(resp)
        this.emailSent = true;
      },
      error: (e) => {
        this.formEmail.controls['emailUsuario']?.setErrors({notFound: true});
        this.loading = false;
      }
    });
  }

  enviarCodigo() {
    if (this.formCode.invalid) { return }
    this.loading = true;
    const body: FormData = new FormData();
    body.append('email', this.correo);
    body.append('pin', this.codigoSeguridad);
    this.usuarioService.codigoClave(body).subscribe({
      next: (resp) => {
        this.loading = false;
        console.log(resp)
        this.codeSent = true;
      },
      error: (e) => {
        this.formCode.controls['codigoEmail']?.setErrors({invalid: true});
        this.loading = false;
      }
    })
  }

  cambiarClave() {
    if (this.formPassword.invalid || !this.verificarClaves()) { return }
    this.loading = true;
    const body: FormData = new FormData();
    body.append('email', this.correo);
    body.append('password', this.nuevaClave);
    this.usuarioService.changePasswordByPin(body).subscribe(
      (resp) => {
        this.messageService.add({
          severity: 'success',
          key: 'toastlogin',
          detail: 'La contraseña ha sido actualizada exitosamente'
        })
        this.loading = false;
        console.log(resp);
        this.dialogRef.close();
      }
    )
  }

  verificarClaves() {
    if (this.nuevaClave !== this.confirmarClave) {
      this.formPassword.controls["confirmPassword"]?.setErrors({notEqual: true});
      return false;
    }
    return true;
  }
}
