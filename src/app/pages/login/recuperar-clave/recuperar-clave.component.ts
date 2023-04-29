import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recuperar-clave',
  templateUrl: './recuperar-clave.component.html',
  styleUrls: ['./recuperar-clave.component.css']
})
export class RecuperarClaveComponent implements OnInit {

  emailSent: boolean = false;

  constructor() {}

  ngOnInit(): void {
  }

  recoverPassword() {
    console.log('correo')
    this.emailSent = true;
  }
}
