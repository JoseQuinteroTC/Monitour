import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { MonitoriasService } from 'src/app/services/monitorias.service';
import { MonitoriaObservablesService } from 'src/app/services/observables/monitoria-observables.service';

@Component({
  selector: 'app-eliminar-monitoria',
  templateUrl: './eliminar-monitoria.component.html',
  styleUrls: ['./eliminar-monitoria.component.css']
})
export class EliminarMonitoriaComponent implements OnInit {

  monitoriaId: number;

  ngOnInit(): void {
    this.monitoriaId = this.dialogConfig.data;
  }

  constructor(
    private dialogRef: DynamicDialogRef,
    private dialogConfig: DynamicDialogConfig,
    private monitoriasService: MonitoriasService,
    private monitoriasObservables: MonitoriaObservablesService,
    private messageService: MessageService
  ){}

  cerrarModal() {
    this.dialogRef.close();
  }

  eliminarMonitoria() {
    this.monitoriasService.deleteMonitoria(this.monitoriaId).subscribe(
      resp => {
        this.monitoriasObservables.setActualizarMonitorias(true);
        this.dialogRef.close();
        this.messageService.add(
          { key: 'toastmonitorias', severity: 'success',  detail: 'La monitoria ha sido eliminada'}
        );
        console.log(resp);
      }
    );
  }
}
