import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Conjuntos } from '../../interfaces/conjuntos';

@Component({
  selector: 'app-plano-general',
  templateUrl: './plano-general.component.html',
  styleUrls: ['./plano-general.component.scss']
})
export class PlanoGeneralComponent {
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

  

