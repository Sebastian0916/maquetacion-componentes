import { Component } from '@angular/core';
import { Proyectos } from '../../interfaces/proyectos';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent {
  listProyectos: Proyectos[] =[
    {direccion:'Porto allegre 88Av calle 58',total_unidades:954,unidades_vendidas:564,porcentaje_entero:48,porcerntaje:'48.8%'},
    {direccion:'Porto allegre 88Av calle 58',total_unidades:954,unidades_vendidas:564,porcentaje_entero:48,porcerntaje:'48.8%'},
    {direccion:'Porto allegre 88Av calle 58',total_unidades:954,unidades_vendidas:564,porcentaje_entero:48,porcerntaje:'48.8%'},
    
    {direccion:'Porto allegre 88Av calle 58',total_unidades:954,unidades_vendidas:564,porcentaje_entero:48,porcerntaje:'48.8%'},
    {direccion:'Porto allegre 88Av calle 58',total_unidades:954,unidades_vendidas:564,porcentaje_entero:48,porcerntaje:'48.8%'},
    {direccion:'Porto allegre 88Av calle 58',total_unidades:954,unidades_vendidas:564,porcentaje_entero:48,porcerntaje:'48.8%'},
    
    {direccion:'Porto allegre 88Av calle 58',total_unidades:954,unidades_vendidas:564,porcentaje_entero:48,porcerntaje:'48.8%'},
    {direccion:'Porto allegre 88Av calle 58',total_unidades:954,unidades_vendidas:564,porcentaje_entero:48,porcerntaje:'48.8%'},
    {direccion:'Porto allegre 88Av calle 58',total_unidades:954,unidades_vendidas:564,porcentaje_entero:48,porcerntaje:'48.8%'},
    
    {direccion:'Porto allegre 88Av calle 58',total_unidades:954,unidades_vendidas:564,porcentaje_entero:48,porcerntaje:'48.8%'},
    {direccion:'Porto allegre 88Av calle 58',total_unidades:954,unidades_vendidas:564,porcentaje_entero:48,porcerntaje:'48.8%'},
    {direccion:'Porto allegre 88Av calle 58',total_unidades:954,unidades_vendidas:564,porcentaje_entero:48,porcerntaje:'48.8%'},
  ];
}
