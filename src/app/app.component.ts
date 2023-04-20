import { Component } from '@angular/core';
import { AdminObservableService } from './services/observables/admin.observable.service';
import { AuthService } from './services/auth.service';
import { UsuarioModel } from './models/usuario.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private adminObservables: AdminObservableService,
    private authService: AuthService
  ) {
    this.authService.getUserByToken().subscribe(
      (resp) => {
        console.log(resp);
        const user = resp[0];
          const body: UsuarioModel = {
            id: user.id,
            name: user.name,
            lastName: user.lastName,
            email: user.email
          };
          this.adminObservables.setCurrentUser(body);
      }
    )
  }

  title = "Monitour";
}
