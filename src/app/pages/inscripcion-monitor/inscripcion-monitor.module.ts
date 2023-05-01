import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InscripcionMonitorRoutingModule } from './inscripcion-monitor-routing.module';
import { InscripcionMonitorComponent } from './inscripcion-monitor.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    InscripcionMonitorComponent
  ],
  imports: [
    CommonModule,
    InscripcionMonitorRoutingModule,
    SharedModule
  ]
})
export class InscripcionMonitorModule { }
