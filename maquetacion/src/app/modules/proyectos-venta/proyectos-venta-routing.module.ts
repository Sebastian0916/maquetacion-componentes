import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { PlanoGeneralComponent } from './pages/plano-general/plano-general.component';
import { SeleccionInmueblesComponent } from './pages/seleccion-inmuebles/seleccion-inmuebles.component';

const routes: Routes =[
  {
    path:'',
    children:[
      {path: 'proyectos', component: ProyectosComponent},
      
      {path: '',redirectTo:'proyectos',pathMatch:'full'}
    ]
  },
  {
    path: 'plano-general', component: PlanoGeneralComponent,
  },
  {
    path: 'seleccion-inmueble', component: SeleccionInmueblesComponent,
  }

  
]


@NgModule({
  imports: [
    RouterModule.forChild( routes)
  ]
})
export class ProyectosVentaRoutingModule { }
