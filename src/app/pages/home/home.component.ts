import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  queryBusqueda: string;

  constructor(
    private router: Router
  ){}

  buscarMonitorias() {
    this.router.navigate(['/busqueda'], {queryParams: {course: this.queryBusqueda}});
  }
}
