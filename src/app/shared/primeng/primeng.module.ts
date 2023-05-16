import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutoCompleteModule } from 'primeng/autocomplete';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ProgressSpinnerModule } from 'primeng/progressspinner';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AutoCompleteModule,
    InputTextareaModule,
    DropdownModule,
    InputNumberModule,
    InputTextModule,
    DynamicDialogModule,
    ToastModule,
    ProgressSpinnerModule
  ],
  exports: [
    AutoCompleteModule,
    InputTextareaModule,
    DropdownModule,
    InputNumberModule,
    InputTextModule,
    DynamicDialogModule,
    ToastModule,
    ProgressSpinnerModule
  ],
  providers: [DialogService, MessageService]
})
export class PrimengModule { }
