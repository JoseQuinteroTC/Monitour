import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusquedaComponent } from './busqueda.component';
import { GridMonitoresComponent } from './grid-monitores/grid-monitores.component';

const routes: Routes = [
  {
    path: '',
    component: BusquedaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusquedaRoutingModule { }
