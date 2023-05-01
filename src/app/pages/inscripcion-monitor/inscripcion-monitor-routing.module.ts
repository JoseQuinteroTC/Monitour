import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscripcionMonitorComponent } from './inscripcion-monitor.component';

const routes: Routes = [
  {
    path: '',
    component: InscripcionMonitorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InscripcionMonitorRoutingModule { }
