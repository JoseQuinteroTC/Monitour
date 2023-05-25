import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminObservableService } from 'src/app/services/observables/admin.observable.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  queryBusqueda: string;

  constructor(
    private router: Router,
    private adminObservables: AdminObservableService
  ){}

  buscarMonitorias() {
    this.router.navigate(['/busqueda'], {queryParams: {course: this.queryBusqueda}});
  }

  inscribirseMonitor() {
    this.adminObservables.isLoggedIn()?
      this.router.navigate(['/inscripcion-monitor']) :
      this.router.navigate(['register']);
  }
}
