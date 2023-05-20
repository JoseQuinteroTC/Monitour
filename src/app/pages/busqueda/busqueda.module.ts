import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusquedaComponent } from './busqueda.component';
import { BusquedaRoutingModule } from './busqueda-routing.module';
import { DetallesMonitoriaComponent } from './detalles-monitoria/detalles-monitoria.component';
import { GridMonitoresComponent } from './grid-monitores/grid-monitores.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    BusquedaComponent,
    DetallesMonitoriaComponent,
    GridMonitoresComponent
  ],
  imports: [
    BusquedaRoutingModule,
    CommonModule,
    SharedModule
  ]
})
export class BusquedaModule { }
