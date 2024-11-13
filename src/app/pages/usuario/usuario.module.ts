import { NgModule } from '@angular/core';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioComponent } from './usuario.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DetallesUsuarioComponent } from './detalles-usuario/detalles-usuario.component';
import { MisMonitoriasComponent } from './mis-monitorias/mis-monitorias.component';
import { EliminarMonitoriaComponent } from './mis-monitorias/eliminar-monitoria/eliminar-monitoria.component';
import { CrearEditarMonitoriaComponent } from './mis-monitorias/crear-editar-monitoria/crear-editar-monitoria.component';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';


@NgModule({
  declarations: [
    UsuarioComponent,
    DetallesUsuarioComponent,
    MisMonitoriasComponent,
    EliminarMonitoriaComponent,
    CrearEditarMonitoriaComponent
  ],
  imports: [
    UsuarioRoutingModule,
    SharedModule,
    PrimengModule
  ]
})
export class UsuarioModule { }
