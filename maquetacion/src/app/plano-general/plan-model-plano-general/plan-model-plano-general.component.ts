import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
export interface Proyectos {
  value: string;
  viewValue: string;
}
interface Piso {
  value: string;
  viewValue: string;
}

interface Proyecto {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-plan-model-plano-general',
  templateUrl: './plan-model-plano-general.component.html',
  styleUrls: ['./plan-model-plano-general.component.scss'],
})
export class PlanModelPlanoGeneralComponent {
  proyectosPorVendedor: Proyectos[] = [
    { value: '0', viewValue: 'Auxiliar operativo de la venta 14' },
    { value: '1', viewValue: 'Daniel Ricardo Castellano Sepulveda' },
    { value: '2', viewValue: 'Auxiliar operativo de la venta 14' },
    { value: '3', viewValue: 'Sergio Vergara García' },
    { value: '4', viewValue: 'Auxiliar operativo de la venta 14' },
    { value: '5', viewValue: 'Daniel Ricardo Castellano Sepulveda' },
    { value: '6', viewValue: 'Auxiliar operativo de la venta 14' },
    { value: '7', viewValue: 'Sergio Vergara García' },
  ];
  Pisos: Piso[] = [
    {value: 'piso-0', viewValue: 'Piso 1'},
    {value: 'piso-1', viewValue: 'Piso 2'},
    {value: 'piso-2', viewValue: 'Piso 3'},
  ];
  Proyectos: Proyecto[] = [
    {value: 'piso-0', viewValue: 'Chicala Etapa 1 - Altos de Montecielo del norte I'},
    {value: 'piso-1', viewValue: 'Chicala Etapa 1 - Altos de Montecielo del norte II'},
    {value: 'piso-2', viewValue: 'Chicala Etapa 1 - Altos de Montecielo del norte III'},
    {value: 'piso-0', viewValue: 'Chicala Etapa 1 - Altos de Montecielo del norte IV'},
    {value: 'piso-1', viewValue: 'Chicala Etapa 1 - Altos de Montecielo del norte V'},
    {value: 'piso-2', viewValue: 'Chicala Etapa 1 - Altos de Montecielo del norte VI'},
    {value: 'piso-0', viewValue: 'Chicala Etapa 1 - Altos de Montecielo del norte VII'},
    {value: 'piso-1', viewValue: 'Chicala Etapa 1 - Altos de Montecielo del norte VII'},
  ];
  panelOpenState = false;
  myControl = new FormControl('');
  options: string[] = [];
}
