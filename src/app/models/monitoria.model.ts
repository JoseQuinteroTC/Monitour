export interface MonitoriaModel {
  id: number;
  idMonitor: number;
  course: string;
  description: string;
  price: number;
  modality: string;
  views?: number;
  request?: number;
}
