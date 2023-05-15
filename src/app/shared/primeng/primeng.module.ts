import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutoCompleteModule } from 'primeng/autocomplete';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AutoCompleteModule,
    InputTextareaModule,
    DropdownModule,
    InputNumberModule,
    InputTextModule
  ],
  exports: [
    AutoCompleteModule,
    InputTextareaModule,
    DropdownModule,
    InputNumberModule,
    InputTextModule
  ]
})
export class PrimengModule { }
