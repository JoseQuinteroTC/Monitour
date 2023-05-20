import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BusquedaComponent } from './busqueda.component';
import { DetallesMonitoriaComponent } from './detalles-monitoria/detalles-monitoria.component';

const routes: Routes = [
  {
    path: '',
    component: BusquedaComponent
  },
  {
    path: 'monitor/:id',
    component: DetallesMonitoriaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusquedaRoutingModule { }
