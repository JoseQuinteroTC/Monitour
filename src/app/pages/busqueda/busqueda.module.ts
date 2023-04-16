import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusquedaComponent } from './busqueda.component';
import { BusquedaRoutingModule } from './busqueda-routing.module';
import { DetallesMonitorComponent } from './detalles-monitor/detalles-monitor.component';
import { GridMonitoresComponent } from './grid-monitores/grid-monitores.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    BusquedaComponent,
    DetallesMonitorComponent,
    GridMonitoresComponent
  ],
  imports: [
    BusquedaRoutingModule,
    CommonModule,
    SharedModule
  ]
})
export class BusquedaModule { }
