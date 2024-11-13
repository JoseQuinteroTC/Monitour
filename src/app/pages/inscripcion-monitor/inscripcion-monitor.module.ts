import { NgModule } from '@angular/core';

import { InscripcionMonitorRoutingModule } from './inscripcion-monitor-routing.module';
import { InscripcionMonitorComponent } from './inscripcion-monitor.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';


@NgModule({
  declarations: [
    InscripcionMonitorComponent
  ],
  imports: [
    InscripcionMonitorRoutingModule,
    SharedModule,
    PrimengModule
  ]
})
export class InscripcionMonitorModule { }
