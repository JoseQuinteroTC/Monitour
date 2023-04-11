import { Component, OnInit } from '@angular/core';
import { MonitoresService } from 'src/app/services/monitores.service';


@Component({
  selector: 'app-grid-monitores',
  templateUrl: './grid-monitores.component.html',
  styleUrls: ['./grid-monitores.component.css']
})
export class GridMonitoresComponent implements OnInit{

  monitor: any;
  imagenMonitor: any;

  constructor(
    private monitoresService: MonitoresService
  ){}

  ngOnInit(): void {
    // this.monitoresService.getMonitores().subscribe(
    //   (monitores: any) => {
    //     console.log(monitores);
    //     this.monitor = monitores[0];
    //     const blob = new Blob([this.monitor.img_profile], { type: 'image/jpg' });
    //     this.imagenMonitor = URL.createObjectURL(blob);
    //   }
    // )
  }

  monitores: any[] = [
    {
      nombre: "Pepito perez",
      id: 1,
      foto: "assets/img/stockMonitor.jpg",
      materia: "Ecuaciones diferenciales",
      descripcion: "Descripcion sobre el monitor",
      estudiantes: 35
    },
    {
      nombre: "Pepito perez",
      id: 2,
      foto: "assets/img/stockMonitor.jpg",
      materia: "Ecuaciones diferenciales",
      descripcion: "Descripcion sobre el monitor",
      estudiantes: 35
    },
    {
      nombre: "Pepito perez",
      id: 3,
      foto: "assets/img/stockMonitor.jpg",
      materia: "Ecuaciones diferenciales",
      descripcion: "Descripcion sobre el monitor",
      estudiantes: 35
    },
    {
      nombre: "Pepito perez",
      id: 4,
      foto: "assets/img/stockMonitor.jpg",
      materia: "Ecuaciones diferenciales",
      descripcion: "Descripcion sobre el monitor",
      estudiantes: 35
    }
  ]
}

