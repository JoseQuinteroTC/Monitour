import { Component, OnInit } from '@angular/core';
import { MonitoriaModel } from 'src/app/models/monitoria.model';

import { MonitoresService } from 'src/app/services/monitores.service';

@Component({
  selector: 'app-grid-monitores',
  templateUrl: './grid-monitores.component.html',
  styleUrls: ['./grid-monitores.component.css']
})
export class GridMonitoresComponent implements OnInit {

  monitorias: MonitoriaModel[];
  monitorPicture: string = "assets/img/stockMonitor.jpg";

  constructor(
    private monitoresService: MonitoresService
  ){}

  ngOnInit(): void {
    this.monitoresService.getMonitores().subscribe(
      (resp: any) => {
        console.log(resp);
        this.monitorias = resp;
      }
    )
  }
}

