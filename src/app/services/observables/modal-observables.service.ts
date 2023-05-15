import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalObservablesService {

  constructor() { }

  private monitoriaEliminar: Subject<any> = new Subject<any>;
  private modalMonitoria: Subject<any> = new Subject<any>;

  public monitoriaEliminarObservable: Observable<any> = this.monitoriaEliminar.asObservable();
  public modalMonitoriaObservable: Observable<any> = this.modalMonitoria.asObservable();

  setMonitoriaEliminar(monitoria: any) {
    this.monitoriaEliminar.next(monitoria);
  }

  setModalMonitoriaObservable(monitoria: any) {
    this.modalMonitoria.next(monitoria);
  }
}
