import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PrimengModule } from './primeng/primeng.module';
import { TruncStringPipe } from '../pipes/trunc-string.pipe';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    TruncStringPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    PrimengModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    FormsModule,
    ReactiveFormsModule,
    PrimengModule,
    TruncStringPipe
  ]
})
export class SharedModule { }
