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
      descripcion: `En esta tutoría aprenderás a resolver ecuaciones diferenciales de primer y segundo orden,
      junto con problemas de condiciones iniciales y de frontera. Con teoría y ejercicios prácticos,
      comprenderás cómo aplicar las ecuaciones diferenciales en situaciones reales.`,
      precio: "16000",
      modalidad: "Presencial",
      solicitudes: 3,
      visitas: 32
    },
    {
      asignatura: "Estructura de datos",
      descripcion: `En esta tutoría aprenderás a resolver ecuaciones diferenciales de primer y segundo orden,
      junto con problemas de condiciones iniciales y de frontera. Con teoría y ejercicios prácticos,
      comprenderás cómo aplicar las ecuaciones diferenciales en situaciones reales.`,
      precio: "22000",
      modalidad: "Virtual",
      solicitudes: 10,
      visitas: 55
    },
    {
      asignatura: "Ingles",
      descripcion: `En esta tutoría aprenderás a resolver ecuaciones diferenciales de primer y segundo orden,
      junto con problemas de condiciones iniciales y de frontera. Con teoría y ejercicios prácticos,
      comprenderás cómo aplicar las ecuaciones diferenciales en situaciones reales.`,
      precio: "18000",
      modalidad: "Hibrido",
      solicitudes: 15,
      visitas: 70
    },
  ]

}
