import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardProyectoContainerComponent } from './card-container-proyecto/mat-card.component';
import { CardDataProyectoComponent } from './card-data-proyecto/card-data-proyecto.component';
import { CardMenuContainerComponent } from './card-menu-container/card-menu-container.component';
import { ModalPlanosComponent } from './modal-planos/modal-planos.component';
import { MaterialModule } from 'src/theme/material.module';



@NgModule({
  declarations: [
    CardMenuContainerComponent,
    CardProyectoContainerComponent,
    ModalPlanosComponent,
    CardDataProyectoComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,

  ],
  exports:[
    CardMenuContainerComponent,
    CardProyectoContainerComponent,
    ModalPlanosComponent,
    CardDataProyectoComponent,
  ]
})
export class ComponentsProyectosVentaModule { }
