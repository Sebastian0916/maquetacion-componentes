import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'proyectos_venta',loadChildren:() => import('./modules/proyectos-venta/proyectos-venta.module').then(module => module.ProyectosVentaModule)},
  {path:'**',redirectTo:'proyectos_venta',pathMatch:'prefix'},
  {path:'',redirectTo:'proyectos_venta',pathMatch:'prefix'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
