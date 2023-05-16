import { Component } from '@angular/core';
import { AdminObservableService } from './services/observables/admin.observable.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private authService: AuthService
  ) {
    this.authService.getUserByToken().subscribe();
  }

  title = "Monitour";
}
