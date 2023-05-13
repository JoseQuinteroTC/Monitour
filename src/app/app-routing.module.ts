import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('src/app/pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'login',
    loadChildren: () => import('src/app/pages/login/login.module').then((m)=> m.LoginModule)
  },
  {
    path: 'register',
    loadChildren: () => import('src/app/pages/register/register.module').then((m)=> m.RegisterModule)
  },
  {
    path: 'busqueda',
    loadChildren: () => import('src/app/pages/busqueda/busqueda.module').then((m)=> m.BusquedaModule)
  },
  {
    path: 'mi-cuenta',
    loadChildren: () => import('src/app/pages/usuario/usuario.module').then((m)=> m.UsuarioModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'inscripcion-monitor',
    loadChildren: () => import('src/app/pages/inscripcion-monitor/inscripcion-monitor.module').then((m)=> m.InscripcionMonitorModule)
  },
  {
    path: '**',
    redirectTo: ''
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
