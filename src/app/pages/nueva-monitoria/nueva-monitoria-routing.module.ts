import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuevaMonitoriaComponent } from './nueva-monitoria.component';

const routes: Routes = [
  {
    path: '',
    component: NuevaMonitoriaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NuevaMonitoriaRoutingModule { }
