import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BusquedaComponent } from './busqueda.component';
import { DetallesMonitorComponent } from './detalles-monitor/detalles-monitor.component';

const routes: Routes = [
  {
    path: '',
    component: BusquedaComponent
  },
  {
    path: 'monitor/:id',
    component: DetallesMonitorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusquedaRoutingModule { }
