import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderPageComponent } from './header-page/header-page.component';
import { MaterialModule } from 'src/theme/material.module';



@NgModule({
  declarations: [
    HeaderPageComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports:[
    HeaderPageComponent,
  ]
})
export class ComponentsModule { }
