import { Component, OnInit } from '@angular/core';

import { AdminObservableService } from 'src/app/services/observables/admin.observable.service';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  logged: boolean = false;
  usuario: UsuarioModel | undefined;

  constructor(
    private adminObservables: AdminObservableService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
   this.logged = this.adminObservables.isLoggedIn();
   this.authService.getUserByToken().subscribe(
    usuario => this.usuario = usuario
   );
  }

  logout() {
    this.logged = false;
    localStorage.removeItem('token');
    this.router.navigate(['']);
  }
}
