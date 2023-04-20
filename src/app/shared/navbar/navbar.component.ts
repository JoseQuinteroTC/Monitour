import { Component, OnInit } from '@angular/core';

import { AdminObservableService } from 'src/app/services/observables/admin.observable.service';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { Router } from '@angular/router';

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
    private router: Router
  ) { }

  ngOnInit(): void {
   this.logged = this.adminObservables.isLoggedIn();
   this.usuario = this.adminObservables.getCurrentUser();
  }

  logout() {
    this.logged = false;
    localStorage.removeItem('token');
    this.router.navigate(['']);
  }
}
