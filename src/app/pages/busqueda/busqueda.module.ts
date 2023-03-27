import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusquedaRoutingModule } from './busqueda-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { BusquedaComponent } from './busqueda.component';


@NgModule({
  declarations: [
    BusquedaComponent
  ],
  imports: [
    CommonModule,
    BusquedaRoutingModule,
    SharedModule
  ]
})
export class BusquedaModule { }
