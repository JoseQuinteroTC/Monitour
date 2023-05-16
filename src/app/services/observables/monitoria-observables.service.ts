import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MonitoriaObservablesService {

  constructor() { }

  private actualizarMonitorias: Subject<boolean> = new Subject<boolean>;

  public actualizarMonitoriasObservable: Observable<boolean> = this.actualizarMonitorias.asObservable();

  setActualizarMonitorias(value: boolean) {
    this.actualizarMonitorias.next(value);
  }
}
