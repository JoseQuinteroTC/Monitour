import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NuevaMonitoriaRoutingModule } from './nueva-monitoria-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { NuevaMonitoriaComponent } from './nueva-monitoria.component';


@NgModule({
  declarations: [
    NuevaMonitoriaComponent
  ],
  imports: [
    CommonModule,
    NuevaMonitoriaRoutingModule,
    SharedModule,
  ]
})
export class NuevaMonitoriaModule { }
