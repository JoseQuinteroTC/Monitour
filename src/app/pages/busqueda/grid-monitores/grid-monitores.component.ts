import { Component, OnInit } from '@angular/core';
import { MonitoriaModel } from 'src/app/models/monitoria.model';
import { MonitoriasService } from 'src/app/services/monitorias.service';

@Component({
  selector: 'app-grid-monitores',
  templateUrl: './grid-monitores.component.html',
  styleUrls: ['./grid-monitores.component.css']
})
export class GridMonitoresComponent implements OnInit {

  monitorias: MonitoriaModel[];
  monitorPicture: string = "assets/img/stockMonitor.jpg";

  constructor(
    private monitoriasService: MonitoriasService
  ){}

  ngOnInit(): void {
    this.monitoriasService.getMonitorias().subscribe(
      (resp: any) => {
        console.log(resp);
        this.monitorias = resp;
      }
    )
  }
}

