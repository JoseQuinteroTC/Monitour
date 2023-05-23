import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-inscripcion-monitor',
  templateUrl: './inscripcion-monitor.component.html',
  styleUrls: ['./inscripcion-monitor.component.css']
})
export class InscripcionMonitorComponent implements OnInit {

  @ViewChild('monitorForm') monitorForm: NgForm;

  documento: string;
  celular: string;
  descripcion: string;

  usuario: UsuarioModel;

  constructor(
    private authService: AuthService,
    private usuarioService: UsuarioService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.authService.getUserByToken().subscribe(
      user => this.usuario = user
    );
  }

  nuevoMonitor() {
    if (!this.usuario || this.monitorForm?.invalid) {
      return;
    }

    const body = {
      id: this.usuario.id,
      description: this.descripcion,
      phone_number: this.celular,
      document: this.documento
    }

    firstValueFrom(this.usuarioService.registerMonitor(body)).then(
      resp => {
        window.location.replace('/');
      }
    );
  }
}
