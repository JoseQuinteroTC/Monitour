import { Component } from '@angular/core';
import { ModalObservablesService } from 'src/app/services/observables/modal-observables.service';

@Component({
  selector: 'app-mis-monitorias',
  templateUrl: './mis-monitorias.component.html',
  styleUrls: ['./mis-monitorias.component.css']
})
export class MisMonitoriasComponent {

  constructor(
    private modalObservables: ModalObservablesService
  ) {

  }

  editarMonitoria: boolean;

  monitorias: any[] = [
    {
      asignatura: "Ecuaciones diferenciales",
      descripcion: `En esta tutoría aprenderás a resolver ecuaciones diferenciales de primer y segundo orden,
      junto con problemas de condiciones iniciales y de frontera. Con teoría y ejercicios prácticos,
      comprenderás cómo aplicar las ecuaciones diferenciales en situaciones reales.`,
      precio: "16000",
      modalidad: {
        id: 1,
        nombre: "Presencial"
      },
      solicitudes: 3,
      visitas: 32
    },
    {
      asignatura: "Estructura de datos",
      descripcion: `En esta tutoría aprenderás a resolver ecuaciones diferenciales de primer y segundo orden,
      junto con problemas de condiciones iniciales y de frontera. Con teoría y ejercicios prácticos,
      comprenderás cómo aplicar las ecuaciones diferenciales en situaciones reales.`,
      precio: "22000",
      modalidad: {
        id: 2,
        nombre: "Virtual"
      },
      solicitudes: 10,
      visitas: 55
    },
    {
      asignatura: "Ingles",
      descripcion: `En esta tutoría aprenderás a resolver ecuaciones diferenciales de primer y segundo orden,
      junto con problemas de condiciones iniciales y de frontera. Con teoría y ejercicios prácticos,
      comprenderás cómo aplicar las ecuaciones diferenciales en situaciones reales.`,
      precio: "18000",
      modalidad: {
        id: 3,
        nombre: "Hibrido"
      },
      solicitudes: 15,
      visitas: 70
    },
  ]

  showModalMonitoria(monitoria?: any) {
    this.modalObservables.setModalMonitoriaObservable(monitoria);
  }

  showModalEliminar(){
    this.modalObservables.setMonitoriaEliminar("Probando");
  }
}
