import { Component } from '@angular/core';
import { Conjuntos } from '../../interfaces/conjuntos';

@Component({
  selector: 'card-menu-container',
  templateUrl: './card-menu-container.component.html',
  styleUrls: ['./card-menu-container.component.scss']
})
export class CardMenuContainerComponent {
  
  listConjuntos: Conjuntos[] =[
    {etapa: 'Chicala Etapa-1',nombre:'Altos de Montecielo del norte I'},
    {etapa: 'Chicala Etapa-1',nombre:'Altos de Montecielo del norte II'},
    {etapa: 'Chicala Etapa-1',nombre:'Altos de Montecielo del norte III'},
    {etapa: 'Chicala Etapa-1',nombre:'Altos de Montecielo del norte IV'},
    {etapa: 'Chicala Etapa-1',nombre:'Altos de Montecielo del norte V'},
    {etapa: 'Chicala Etapa-1',nombre:'Altos de Montecielo del norte VI'},
    {etapa: 'Chicala Etapa-1',nombre:'Altos de Montecielo del norte VII'},
  ];

  

}
