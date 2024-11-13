import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, provideHttpClient } from "@angular/common/http";
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import 'bootstrap';
import 'popper.js';
import { HashLocationStrategy, LocationStrategy} from '@angular/common';
import { AuthGuard } from './guards/auth.guard';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    TypeaheadModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [
    provideHttpClient(),
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    HttpClient,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
