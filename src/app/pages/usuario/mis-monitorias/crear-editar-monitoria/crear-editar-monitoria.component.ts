import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalObservablesService } from 'src/app/services/observables/modal-observables.service';

@Component({
  selector: 'app-crear-editar-monitoria',
  templateUrl: './crear-editar-monitoria.component.html',
  styleUrls: ['./crear-editar-monitoria.component.css']
})
export class CrearEditarMonitoriaComponent implements OnInit{

  @Input('editarMonitoria') editarMonitoria: boolean;

  descripcionMonitoria: string;
  precioMonitoria: string;

  selectedAsignatura: any;
  filteredAsignaturas: any[];
  asignaturas: any[] = [
    "Ecuaciones diferenciales",
    "Calculo integral",
    "Calculo diferencial",
    "Sistemas operativos",
    "Arquitectura de software",
    "Ingles",
    "Redes",
    "Algoritmos y programacion",
    "Estructura de datos",
    "Programacion orientada a objetos",
    "Diseño organizacional TI",
    "Bases de datos"
  ]

  selectedModalidad: any;
  modalidades: any[] = [
    {
      id: 1,
      nombre: "Presencial"
    },
    {
      id: 2,
      nombre: "Virtual"
    },
    {
      id: 3,
      nombre: "Hibrido"
    }
  ]

  modalSubscription: Subscription;

  constructor(
    private modalObservables: ModalObservablesService
  ) {}

  ngOnInit(): void {
    this.modalSubscription = this.modalObservables.modalMonitoriaObservable.subscribe(
      (monitoria: any) => {
        console.log(monitoria);
        if (monitoria) {
          this.setInfoMonitoria(monitoria);
        }
      }
    )
  }

  filterAsignaturas(event: any): void {
    const query = event.query?.trim()?.toLowerCase();
    this.filteredAsignaturas = this.asignaturas.filter(
      (a) => a?.trim().toLowerCase().indexOf(query) >= 0
    );
  }

  setInfoMonitoria(monitoria: any) {
    console.log(monitoria);
    this.descripcionMonitoria = monitoria.descripcion;
    this.selectedAsignatura = monitoria.asignatura;
    this.selectedModalidad = monitoria.modalidad;
    this.precioMonitoria = monitoria.precio;
  }
}
