import { Component, OnInit } from '@angular/core';
import { AdminObservableService } from './services/observables/admin.observable.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private adminObservables: AdminObservableService
  ) { }

}
