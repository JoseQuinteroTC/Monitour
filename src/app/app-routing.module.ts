import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('src/app/pages/home/home.module').then(
            (m) => m.HomeModule
          ),
      },
    ],
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
    path: '**',
    redirectTo: '',
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
