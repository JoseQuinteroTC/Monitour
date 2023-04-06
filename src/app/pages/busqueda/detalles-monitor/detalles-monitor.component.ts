import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles-monitor',
  templateUrl: './detalles-monitor.component.html',
  styleUrls: ['./detalles-monitor.component.css']
})
export class DetallesMonitorComponent {
  usuarioId: string | null = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // Obtener el valor del parámetro de ruta :id
    this.usuarioId = this.route.snapshot.paramMap.get('id');
    console.log(this.usuarioId);
    // Cargar los datos del perfil del usuario con ID usuarioId
    // ...
  }
}
