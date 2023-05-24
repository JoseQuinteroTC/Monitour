import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { CrearEditarMonitoriaComponent } from './crear-editar-monitoria/crear-editar-monitoria.component';
import { EliminarMonitoriaComponent } from './eliminar-monitoria/eliminar-monitoria.component';
import { MonitoriasService } from 'src/app/services/monitorias.service';
import { AuthService } from 'src/app/services/auth.service';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { firstValueFrom } from 'rxjs';
import { MonitoriaObservablesService } from 'src/app/services/observables/monitoria-observables.service';
import { MonitoriaModel } from 'src/app/models/monitoria.model';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-mis-monitorias',
  templateUrl: './mis-monitorias.component.html',
  styleUrls: ['./mis-monitorias.component.css']
})
export class MisMonitoriasComponent implements OnInit{

  monitor: UsuarioModel;
  monitorias: MonitoriaModel[] = [];
  loading: boolean = false;

  constructor(
    private dialogService: DialogService,
    private monitoriasService: MonitoriasService,
    private messageService: MessageService,
    private monitoriasObservables: MonitoriaObservablesService,
    private authService: AuthService
  ) {}

  async ngOnInit() {
    this.loading = true;
    await firstValueFrom(this.authService.getUserByToken()).then(
      monitor => this.monitor = monitor
    );
    this.cargarMonitorias();
    this.monitoriasObservables.actualizarMonitoriasObservable.subscribe(
      (value: boolean) => {
        console.log(value);
        if (value) {
          this.cargarMonitorias();
        }
      }
    )
  }

  cargarMonitorias() {
    this.loading = true;
    this.monitoriasService.getMonitoriasByMonitor(this.monitor.id).subscribe(
      (monitorias: MonitoriaModel[]) => {
        console.log(monitorias);
        this.monitorias = monitorias;
        this.loading = false;
      }
    );
  }

  // monitorias: any[] = [
  //   {
  //     asignatura: "Ecuaciones diferenciales",
  //     descripcion: `En esta tutoría aprenderás a resolver ecuaciones diferenciales de primer y segundo orden,
  //     junto con problemas de condiciones iniciales y de frontera. Con teoría y ejercicios prácticos,
  //     comprenderás cómo aplicar las ecuaciones diferenciales en situaciones reales.`,
  //     precio: "16000",
  //     modalidad: {
  //       id: 1,
  //       nombre: "Presencial"
  //     },
  //     solicitudes: 3,
  //     visitas: 32
  //   }
  // ]

  showModalMonitoria(monitoria?: any) {
    if (!this.monitor.url_img_profile) {
      this.messageService.add({
        severity: 'error',
        key: 'toastmonitorias',
        life: 4000,
        detail: 'Debe cargar una imagen de perfil para poder publicar monitorias'
      })
      return;
    }
    this.dialogService.open(
      CrearEditarMonitoriaComponent,
      {header: 'Detalles de la monitoria', data: monitoria? monitoria : ""}
    );
  }

  showModalEliminar(monitoriaId: number){
    this.dialogService.open(
      EliminarMonitoriaComponent,
      {header: 'Confirmar eliminación', data: monitoriaId, width: '40rem'}
    );
  }
}
