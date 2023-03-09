import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalPlanosComponent } from '../modal-planos/modal-planos.component';


@Component({
  selector: 'card-data-proyecto',
  templateUrl: './card-data-proyecto.component.html',
  styleUrls: ['./card-data-proyecto.component.scss']
})
export class CardDataProyectoComponent {
  
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(ModalPlanosComponent,{
      width:'736px',
    });
  }

}
