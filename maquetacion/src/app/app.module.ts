import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from 'src/theme/material.module';
import { SizeDirective } from 'src/theme/directivas/size.directive';
import { StandardDirective } from '../theme/directivas/standard.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardModelComponent } from './proyecto-venta/card-model-proyecto-venta/card-model-proyecto-venta.component';
import { HeaderModelComponent } from './proyecto-venta/header-model-proyecto-venta/header-model-proyecto-venta.component';
import { MainComponent } from './main/main.component';
import { HeaderModelPlanoGeneralComponent } from './plano-general/header-model-plano-general/header-model-plano-general.component';
import { CardModelPlanoGeneralComponent } from './plano-general/card-model-plano-general/card-model-plano-general.component';
import { PlanModelPlanoGeneralComponent } from './plano-general/plan-model-plano-general/plan-model-plano-general.component';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { MatDialogComponent } from './plano-general/mat-dialog/mat-dialog.component';
import { HeaderModelSeleccionInmuebleComponent } from './seleccion-inmueble/header-model-seleccion-inmueble/header-model-seleccion-inmueble.component';
import { CardModelSeleccionInmuebleComponent } from './seleccion-inmueble/card-model-seleccion-inmueble/card-model-seleccion-inmueble.component';
@NgModule({
  declarations: [
    AppComponent,
    SizeDirective,
    StandardDirective,
    CardModelComponent,
    HeaderModelComponent,
    MainComponent,
    HeaderModelPlanoGeneralComponent,
    CardModelPlanoGeneralComponent,
    PlanModelPlanoGeneralComponent,
    MatDialogComponent,
    HeaderModelSeleccionInmuebleComponent,
    CardModelSeleccionInmuebleComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    MatButtonModule,
    MatDialogModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
