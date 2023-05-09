import { Component } from '@angular/core';

@Component({
  selector: 'app-mis-monitorias',
  templateUrl: './mis-monitorias.component.html',
  styleUrls: ['./mis-monitorias.component.css']
})
export class MisMonitoriasComponent {

  monitorias: any[] = [
    {
      asignatura: "Ecuaciones diferenciales",
      precio: "5000",
      modalidad: "Virtual",
      estudiantes: 4
    },
    {
      asignatura: "Calculo integral",
      precio: "3000",
      modalidad: "Presencial",
      estudiantes: 8
    },
    {
      asignatura: "Calculo diferencial",
      precio: "2000",
      modalidad: "Hibrido",
      estudiantes: 3
    }
  ]

}
