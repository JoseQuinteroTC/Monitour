import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { MonitoriaModel } from 'src/app/models/monitoria.model';
import { MonitoriasService } from 'src/app/services/monitorias.service';
import { environment } from 'src/app/environment/environment';

@Component({
  selector: 'app-grid-monitores',
  templateUrl: './grid-monitores.component.html',
  styleUrls: ['./grid-monitores.component.css']
})
export class GridMonitoresComponent implements OnInit {

  urlImg: string = environment.BASE_URL;
  monitorias: MonitoriaModel[];
  monitorPicture: string = "assets/img/stockMonitor.jpg";
  loading: boolean;
  queryBusqueda: string;

  constructor(
    private monitoriasService: MonitoriasService,
    private activeRoute: ActivatedRoute
  ){}

  ngOnInit(): void {
    firstValueFrom(this.activeRoute.queryParams).then(
      (params) => {
        this.queryBusqueda = params['course'];
        if (this.queryBusqueda) {
          this.filtrarMonitorias();
        }
        else {
          this.init();
        }
      }
    )
  }

  init() {
    this.loading = true;
    console.log('init');
    this.monitoriasService.getMonitorias().subscribe(
      (resp: any) => {
        console.log(resp);
        this.loading = false;
        this.monitorias = resp;
      }
    )
  }

  filtrarMonitorias() {
    if (!this.queryBusqueda) {
      this.init();
      return;
    }
    this.loading = true;
    this.monitoriasService.buscarMonitorias(this.queryBusqueda).subscribe(
      (monitorias: MonitoriaModel[]) => {
        this.loading = false;
        this.monitorias = monitorias;
      }
    )
  }
}

