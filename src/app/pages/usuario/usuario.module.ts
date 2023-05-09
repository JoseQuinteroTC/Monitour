import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioComponent } from './usuario.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DetallesUsuarioComponent } from './detalles-usuario/detalles-usuario.component';
import { MisMonitoriasComponent } from './mis-monitorias/mis-monitorias.component';


@NgModule({
  declarations: [
    UsuarioComponent,
    DetallesUsuarioComponent,
    MisMonitoriasComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    SharedModule
  ]
})
export class UsuarioModule { }
