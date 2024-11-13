import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TruncStringPipe } from '../pipes/trunc-string.pipe';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    TruncStringPipe
  ],
  imports: [
    RouterModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    TruncStringPipe
  ]
})
export class SharedModule { }
