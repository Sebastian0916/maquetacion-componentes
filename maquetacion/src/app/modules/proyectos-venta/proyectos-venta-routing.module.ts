import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { PlanoGeneralComponent } from './pages/plano-general/plano-general.component';

const routes: Routes =[
  {
    path:'',
    children:[
      {path: 'proyectos', component: ProyectosComponent},
      {path: 'plano-general', component: PlanoGeneralComponent},
      {path: '',redirectTo:'plano-general',pathMatch:'full'}
    ]
  }
]


@NgModule({
  imports: [
    RouterModule.forChild( routes)
  ]
})
export class ProyectosVentaRoutingModule { }
