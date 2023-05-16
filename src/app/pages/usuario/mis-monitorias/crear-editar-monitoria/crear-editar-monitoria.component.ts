import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Subscription } from 'rxjs';
import { MonitoriaModel } from 'src/app/models/monitoria.model';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';
import { MonitoriasService } from 'src/app/services/monitorias.service';
import { MonitoriaObservablesService } from 'src/app/services/observables/monitoria-observables.service';

@Component({
  selector: 'app-crear-editar-monitoria',
  templateUrl: './crear-editar-monitoria.component.html',
  styleUrls: ['./crear-editar-monitoria.component.css']
})
export class CrearEditarMonitoriaComponent implements OnInit{

  //Enums
  modalidades: string[] = [
    "Presencial",
    "Virtual",
    "Hibrido"
  ];

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
  ];

  // Variables
  @ViewChild('monitoriaForm') monitoriaForm: NgForm;

  monitoria: MonitoriaModel;
  descripcionMonitoria: string;
  precioMonitoria: string;

  selectedAsignatura: string;
  filteredAsignaturas: string[];

  selectedModalidad: string;


  modalSubscription: Subscription;
  monitoriaSubscription: Subscription;
  loading: boolean;
  usuario: UsuarioModel;

  constructor(
    private authService: AuthService,
    private dialogRef: DynamicDialogRef,
    private dialogConfig: DynamicDialogConfig,
    private monitoriasService: MonitoriasService,
    private monitoriasObservables: MonitoriaObservablesService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.authService.getUserByToken().subscribe(
      usuario => this.usuario = usuario
    )
    this.monitoria = this.dialogConfig.data;
    if (this.monitoria) {
      this.setInfoMonitoria();
    }
  }

  filterAsignaturas(event: any): void {
    const query = event.query?.trim()?.toLowerCase();
    this.filteredAsignaturas = this.asignaturas.filter(
      (a) => a?.trim().toLowerCase().indexOf(query) >= 0
    );
  }

  setInfoMonitoria() {
    this.descripcionMonitoria = this.monitoria.description;
    this.selectedAsignatura = this.monitoria.course;
    this.selectedModalidad = this.monitoria.modality;
    this.precioMonitoria = this.monitoria.price.toString();
  }

  guardarMonitoria() {
    if (this.monitoriaForm.invalid) {
      return;
    }

    this.loading = true;
    if (this.monitoria) {
      const body = {
        id: this.monitoria.id,
        course: this.selectedAsignatura,
        price: this.precioMonitoria,
        description: this.descripcionMonitoria,
        modality: this.selectedModalidad
      }
      this.monitoriasService.updateMonitoria(body).subscribe(
        ({data: monitoria}: any) => {
          console.log(monitoria);
          this.monitoriasObservables.setActualizarMonitorias(true);
          this.loading = false;
          this.cerrarModal();
          this.messageService.add({key: 'toastmonitorias', severity: 'success', detail: 'La monitoria ha sido actualizada'});
        }
      )
    }
    else {
      const body = {
        idMonitor: this.usuario.id,
        course: this.selectedAsignatura,
        price: this.precioMonitoria,
        description: this.descripcionMonitoria,
        modality: this.selectedModalidad
      }
      this.monitoriasService.nuevaMonitoria(body).subscribe(
        ({data: monitoria}: any) => {
          this.loading = false;
          console.log(monitoria);
          this.monitoriasObservables.setActualizarMonitorias(true);
          this.cerrarModal();
          this.messageService.add({key: 'toastmonitorias', severity: 'success', detail: 'La monitoria ha sido creada'});
        }
      );
    }
  }

  cerrarModal() {
    this.dialogRef.close();
  }
}
