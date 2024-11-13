import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TruncStringPipe } from '../pipes/trunc-string.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    TruncStringPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    NavbarComponent,
    FooterComponent,
    TruncStringPipe,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
