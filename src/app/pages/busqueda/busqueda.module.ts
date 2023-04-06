import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusquedaRoutingModule } from './busqueda-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { BusquedaComponent } from './busqueda.component';
import { GridMonitoresComponent } from './grid-monitores/grid-monitores.component';
import { DetallesMonitorComponent } from './detalles-monitor/detalles-monitor.component';


@NgModule({
  declarations: [
    BusquedaComponent,
    GridMonitoresComponent,
    DetallesMonitorComponent
  ],
  imports: [
    CommonModule,
    BusquedaRoutingModule,
    SharedModule
  ]
})
export class BusquedaModule { }
