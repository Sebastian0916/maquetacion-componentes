import { Component} from '@angular/core';
import {FormControl} from '@angular/forms';

export  interface Proyectos {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-header-model-proyecto-venta',
  templateUrl: './header-model-proyecto-venta.component.html',
  styleUrls: ['./header-model-proyecto-venta.component.scss']
})
export class HeaderModelComponent {
  proyectosPorVendedor: Proyectos[]  = [
    {value: '0', viewValue: 'Auxiliar operativo de la venta 14'},
    {value: '1', viewValue: 'Daniel Ricardo Castellano Sepulveda'},
    {value: '2', viewValue: 'Auxiliar operativo de la venta 14'},
    {value: '3', viewValue: 'Sergio Vergara García'},
    {value: '4', viewValue: 'Auxiliar operativo de la venta 14'},
    {value: '5', viewValue: 'Daniel Ricardo Castellano Sepulveda'},
    {value: '6', viewValue: 'Auxiliar operativo de la venta 14'},
    {value: '7', viewValue: 'Sergio Vergara García'},
  ];
  panelOpenState = false;
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
}
