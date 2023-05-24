import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class MonitoriasService {

  constructor(private http: HttpClient) { }

  getMonitorias() {
    return this.http.get(
      environment.API_URL + environment.methods.monitorias
    );
  }

  nuevaMonitoria(body: any) {
    return this.http.post(
      environment.API_URL + environment.methods.registerMonitoria,
      body
    );
  }

  getMonitoriasByMonitor(id: number) {
    return this.http.get(
      environment.API_URL + environment.methods.monitoriasByMonitorId
      + id
    );
  }

  getMonitoriaById(id: number) {
    return this.http.get(
      environment.API_URL + environment.methods.monitoriaById
      + id
    );
  }

  updateMonitoria(body: any) {
    return this.http.post(
      environment.API_URL + environment.methods.modificarMonitoria,
      body
    );
  }

  deleteMonitoria(id: number) {
    return this.http.post(
      environment.API_URL + environment.methods.deleteMonitoria + id,
      {}
    );
  }

  buscarMonitorias(query: string) {
    return this.http.get(
      environment.API_URL + environment.methods.busquedaMonitorias
      + query
    );
  }

  getMonitoriasRecomendadas(course: string) {
    return this.http.get(
      environment.API_URL + environment.methods.monitoriasRecomendadas
      + course
    );
  }

  getContactoMonitor(idMonitoria: number) {
    return this.http.get(
      environment.API_URL + environment.methods.contactoMonitorQR
      + idMonitoria,
      { responseType: 'text' }
    );
  }
}
