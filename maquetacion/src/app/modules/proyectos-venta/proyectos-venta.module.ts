import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProyectosVentaRoutingModule } from './proyectos-venta-routing.module';

import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { MaterialModule } from 'src/theme/material.module';
import { ComponentsModule } from "../../components/components.module";
import { PlanoGeneralComponent } from './pages/plano-general/plano-general.component';
import { ComponentsProyectosVentaModule } from './components/components-proyectos-venta.module';
import { SeleccionInmueblesComponent } from './pages/seleccion-inmuebles/seleccion-inmuebles.component';
import { Router } from '@angular/router';



@NgModule({
    declarations: [
        ProyectosComponent,
        PlanoGeneralComponent,
        SeleccionInmueblesComponent,
    ],
    imports: [
        CommonModule,
        ProyectosVentaRoutingModule,
        ComponentsModule,
        ComponentsProyectosVentaModule,
        MaterialModule
    ]
})
export class ProyectosVentaModule { 

   
}
