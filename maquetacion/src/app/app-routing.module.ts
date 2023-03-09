import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContenedorPVComponent } from './components/contenedor-pv/contenedor-pv.component';
import { PlanoGeneralComponentImg } from './components/plano-general-img/plano-general-img.component';
import { PlanoGeneralComponent } from './components/plano-general/plano-general.component';
import { SeleccionInmuebleComponent } from './components/seleccion-inmueble/seleccion-inmueble.component';

const routes: Routes = [
  { path: '', component: ContenedorPVComponent },
  { path: 'img', component: PlanoGeneralComponentImg },
  { path: 'plano-general', component: PlanoGeneralComponent },
  { path: 'seleccion-inmueble', component: SeleccionInmuebleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
