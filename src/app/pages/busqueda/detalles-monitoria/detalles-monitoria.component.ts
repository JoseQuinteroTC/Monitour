import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MonitoriaModel } from 'src/app/models/monitoria.model';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { MonitoriasService } from 'src/app/services/monitorias.service';

@Component({
  selector: 'app-detalles-monitoria',
  templateUrl: './detalles-monitoria.component.html',
  styleUrls: ['./detalles-monitoria.component.css']
})
export class DetallesMonitoriaComponent {
  monitoriaId: number;
  monitoria: MonitoriaModel;
  monitor: UsuarioModel;
  modalidadMensaje: String;

  monitoriasRecomendadas: any[] = [
    {
      monitor: "Juanito Perez",
      precio: 15000,
      modalidad: "Presencial"
    },
    {
      monitor: "Juanito Perez",
      precio: 15000,
      modalidad: "Presencial"
    },
    {
      monitor: "Juanito Perez",
      precio: 15000,
      modalidad: "Presencial"
    },
    {
      monitor: "Juanito Perez",
      precio: 15000,
      modalidad: "Presencial"
    }
  ];

  responsiveOptions = [
    {
        breakpoint: '1199px',
        numVisible: 1,
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
    private monitoriasService: MonitoriasService
    ) { }

  ngOnInit() {
    // Obtener el valor del parámetro de ruta :id
    this.monitoriaId = parseInt(this.route.snapshot.paramMap.get('id'));
    this.monitoriasService.getMonitoriaById(this.monitoriaId).subscribe(
      ({monitoria, monitor}: any) => {
        console.log(monitoria, monitor);
        this.monitoria = monitoria;
        this.monitor = monitor;
        this.setModalidadMensaje();
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
}
