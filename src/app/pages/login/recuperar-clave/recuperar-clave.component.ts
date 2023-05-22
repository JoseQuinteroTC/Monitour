import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

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

  // Correo form
  correo: string;

  // Codigo form
  codigoSeguridad: string;

  // Nueva clave form
  nuevaClave: string;
  confirmarClave: string;

  constructor() {}

  ngOnInit(): void {
  }

  enviarCorreo() {
    if (this.formEmail.invalid) { return }
    this.emailSent = true;
  }

  enviarCodigo() {
    if (this.formCode.invalid) { return }
    this.codeSent = true;
  }

  cambiarClave() {
    if (this.formPassword.invalid) { return }

  }
}
