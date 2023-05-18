import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit{

  usuario: UsuarioModel;

  constructor(
    private authService: AuthService
  ){}

  ngOnInit(): void {
    firstValueFrom(this.authService.getUserByToken()).then(
      user => this.usuario = user
    );
  }
}
