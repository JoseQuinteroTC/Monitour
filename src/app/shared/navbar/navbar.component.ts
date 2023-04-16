import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { AdminObservableService } from 'src/app/services/observables/admin.observable.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  logged:boolean = false;
  usuario: UsuarioModel | undefined;

  constructor(
    private adminObservables: AdminObservableService
  ) { }

  ngOnInit(): void {
   this.logged = this.adminObservables.isLoggedIn();
   this.usuario = this.adminObservables.getCurrentUser();
   console.log(this.usuario);
  }

  logout() {
    this.logged = false;
    sessionStorage.removeItem('token');
  }
}
