import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogService } from 'primeng/dynamicdialog';
import { MonitoriaModel } from 'src/app/models/monitoria.model';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { MonitoriasService } from 'src/app/services/monitorias.service';
import { ContactarMonitorComponent } from '../contactar-monitor/contactar-monitor.component';
import { environment } from 'src/app/environment/environment';

@Component({
  selector: 'app-detalles-monitoria',
  templateUrl: './detalles-monitoria.component.html',
  styleUrls: ['./detalles-monitoria.component.css']
})
export class DetallesMonitoriaComponent {
  urlImg: string = environment.BASE_URL + 'profile_photo/';
  monitoriaId: number;
  monitoria: MonitoriaModel;
  monitor: UsuarioModel;
  modalidadMensaje: String;

  loading: boolean = false;

  monitoriasRecomendadas: MonitoriaModel[] = [];

  responsiveOptions = [
    {
        breakpoint: '1199px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
    }
];

  constructor(
    private route: ActivatedRoute,
    private monitoriasService: MonitoriasService,
    private dialogService: DialogService
    ) { }

  ngOnInit() {
    // Obtener el valor del parámetro de ruta :id
    this.route.params.subscribe(
      (route) => {
        this.monitoriaId = route?.['id'];
        this.init();
      }
    )
  }

  init() {
    this.loading = true;
    const timestamp = Date.now();
    this.monitoriasService.getMonitoriaById(this.monitoriaId).subscribe(
      ({monitoria, monitor}: any) => {
        console.log(monitoria, monitor);
        this.monitoria = monitoria;
        this.monitoria.url_img_profile =
          this.urlImg + monitoria?.url_img_profile + `?timestamp=${timestamp}`;
        this.monitor = monitor;
        this.setModalidadMensaje();
        this.getMonitoriasRecomendadas();
        this.loading = false;
      }
    );
  }

  getMonitoriasRecomendadas() {
    const timestamp = Date.now();
    this.monitoriasService.buscarMonitorias(this.monitoria.course).subscribe(
      (monitorias: MonitoriaModel[]) => {
        this.monitoriasRecomendadas = monitorias.map(
          (monitoria: MonitoriaModel) => {
            monitoria.url_img_profile =
              this.urlImg + monitoria?.url_img_profile + `?timestamp=${timestamp}`;
            return monitoria;
          }
        );
      }
    )
  }

  setModalidadMensaje() {
    switch (this.monitoria.modality) {
      case "Presencial":
        this.modalidadMensaje = `
        Usted debera acordar con el monitor el metodo de reunion, ya sea dirigiendose a el domicilio del monitor,
        solicitar que se imparta la clase en su domicilio o acordar un lugar en comun para reunirse
        `
        break;
      case "Virtual":
        this.modalidadMensaje = `
        Usted debera acordar con el monitor la plataforma y las herramientas que se utilizaran para el desarrollo de la clase
        `
        break;
      case "Hibrido":
        this.modalidadMensaje = `
        En caso de ser presencial usted debera acordar con el monitor el metodo de reunion, ya sea dirigiendose a el domicilio del monitor,
        solicitar que se imparta la clase en su domicilio o acordar un lugar en comun para reunirse, en caso de ser virtual debe acordar
        la plataforma y las herramientas que se utilizaran para el desarrollo de la clase
        `
        break;
    }
  }

  contactarMonitor() {
    this.dialogService.open(
      ContactarMonitorComponent,
      {
        header: "Contactar monitor",
        data: this.monitoriaId,
        width: "40rem"
      }
    )
  }

  getMonitorImage() {

    return
  }
}
