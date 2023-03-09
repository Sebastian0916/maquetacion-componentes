import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from 'src/theme/material.module';
import { SizeDirective } from 'src/theme/directivas/size.directive';
import { StandardDirective } from '../theme/directivas/standard.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrientationDirective } from 'src/theme/directivas/orientation.directive';
@NgModule({
  declarations: [AppComponent, SizeDirective,StandardDirective,OrientationDirective],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
