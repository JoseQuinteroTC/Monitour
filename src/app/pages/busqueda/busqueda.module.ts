import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusquedaComponent } from './busqueda.component';
import { BusquedaRoutingModule } from './busqueda-routing.module';
import { DetallesMonitoriaComponent } from './detalles-monitoria/detalles-monitoria.component';
import { GridMonitoresComponent } from './grid-monitores/grid-monitores.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ContactarMonitorComponent } from './contactar-monitor/contactar-monitor.component';


@NgModule({
  declarations: [
    BusquedaComponent,
    DetallesMonitoriaComponent,
    GridMonitoresComponent,
    ContactarMonitorComponent
  ],
  imports: [
    BusquedaRoutingModule,
    CommonModule,
    SharedModule
  ]
})
export class BusquedaModule { }
