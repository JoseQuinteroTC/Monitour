import { NgModule } from '@angular/core';

import { AutoCompleteModule } from 'primeng/autocomplete';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { DialogService, DynamicDialogModule, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { SkeletonModule } from 'primeng/skeleton';
import { TagModule } from 'primeng/tag';
import { CarouselModule } from 'primeng/carousel';
import { FileUploadModule } from 'primeng/fileupload';
import { RatingModule } from 'primeng/rating';


@NgModule({
  declarations: [],
  imports: [
    AutoCompleteModule,
    InputTextareaModule,
    DropdownModule,
    InputNumberModule,
    InputTextModule,
    DynamicDialogModule,
    ToastModule,
    ProgressSpinnerModule,
    SkeletonModule,
    TagModule,
    CarouselModule,
    FileUploadModule,
    RatingModule
  ],
  exports: [
    AutoCompleteModule,
    InputTextareaModule,
    DropdownModule,
    InputNumberModule,
    InputTextModule,
    DynamicDialogModule,
    ToastModule,
    ProgressSpinnerModule,
    SkeletonModule,
    TagModule,
    CarouselModule,
    FileUploadModule,
    RatingModule
  ],
  providers: [DialogService, MessageService, DynamicDialogRef]
})
export class PrimengModule { }
