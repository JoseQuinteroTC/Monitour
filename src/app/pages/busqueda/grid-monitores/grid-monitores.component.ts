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
    this.monitoresService.getMonitores().subscribe(
      (monitores: any) => {
        console.log(monitores);
        this.monitor = monitores[0];
        const blob = new Blob([this.monitor.img_profile], { type: 'image/jpg' });
        this.imagenMonitor = URL.createObjectURL(blob);
      }
    )
  }

  monitores: any[] = [
    {
      nombre: "Pepito perez",
      id: 1,
      foto: "https://i.redd.it/v0caqchbtn741.jpg",
      materia: "Ecuaciones diferenciales",
      descripcion: "Como deud es cule bruto yo les enseño calculo",
      estudiantes: 35
    },
    {
      nombre: "Pepito perez",
      id: 3,
      foto: "https://i.redd.it/v0caqchbtn741.jpg",
      materia: "Ecuaciones diferenciales",
      descripcion: "Como deud es cule bruto yo les enseño calculo",
      estudiantes: 35
    },
    {
      nombre: "Pepito perez",
      foto: "https://i.redd.it/v0caqchbtn741.jpg",
      materia: "Ecuaciones diferenciales",
      descripcion: "Como deud es cule bruto yo les enseño calculo",
      estudiantes: 35
    },
    {
      nombre: "Pepito perez",
      foto: "https://i.redd.it/v0caqchbtn741.jpg",
      materia: "Ecuaciones diferenciales",
      descripcion: "Como deud es cule bruto yo les enseño calculo",
      estudiantes: 35
    }
  ]
}

