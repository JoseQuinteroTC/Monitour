import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalObservablesService } from 'src/app/services/observables/modal-observables.service';

@Component({
  selector: 'app-eliminar-monitoria',
  templateUrl: './eliminar-monitoria.component.html',
  styleUrls: ['./eliminar-monitoria.component.css']
})
export class EliminarModalComponent implements OnInit{

  modalSubscription: Subscription;

  constructor(
    private modalObservable: ModalObservablesService
  ){}

  ngOnInit(): void {
    this.modalSubscription = this.modalObservable.monitoriaEliminarObservable.subscribe(
      (value) => {
        console.log(value);
      }
    )
  }

}
