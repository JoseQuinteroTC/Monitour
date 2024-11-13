import { NgModule } from '@angular/core';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { RecuperarClaveComponent } from './recuperar-clave/recuperar-clave.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';


@NgModule({
  declarations: [
    LoginComponent,
    RecuperarClaveComponent
  ],
  imports: [
    LoginRoutingModule,
    SharedModule,
    PrimengModule
  ]
})
export class LoginModule { }
