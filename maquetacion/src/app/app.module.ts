import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from 'src/theme/material.module';
import { SizeDirective } from 'src/theme/directivas/size.directive';
import { StandardDirective } from '../theme/directivas/standard.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { ContenedorPVComponent } from './components/contenedor-pv/contenedor-pv.component';
import { PlanoGeneralComponentImg } from './components/plano-general-img/plano-general-img.component';
import { PlanoGeneralComponent } from './components/plano-general/plano-general.component';
import { DialogComponent } from './components/plano-general/dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { SeleccionInmuebleComponent } from './components/seleccion-inmueble/seleccion-inmueble.component';

import { OrientationDirective } from 'src/theme/directivas/orientation.directive';
@NgModule({
  declarations: [
    AppComponent,
    SizeDirective,
    StandardDirective,OrientationDirective,
    PageHeaderComponent,
    ContenedorPVComponent,
    PlanoGeneralComponentImg,
    PlanoGeneralComponent,
    DialogComponent,
    SeleccionInmuebleComponent,
  ],
  imports: [
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
