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

  urlImg: string = environment.BASE_URL + 'profile_photo/';
  monitorias: MonitoriaModel[];
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
        this.monitorias = resp;
        this.loading = false;
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
        this.monitorias = monitorias;
        this.loading = false;
      }
    )
  }

  getMonitorImage(monitoria) {
    const timestamp = Date.now();
    return this.urlImg + monitoria.url_img_profile + `?timestamp=${timestamp}`;
  }
}

