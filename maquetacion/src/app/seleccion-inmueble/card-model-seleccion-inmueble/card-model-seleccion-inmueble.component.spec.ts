import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardModelSeleccionInmuebleComponent } from './card-model-seleccion-inmueble.component';

describe('CardModelSeleccionInmuebleComponent', () => {
  let component: CardModelSeleccionInmuebleComponent;
  let fixture: ComponentFixture<CardModelSeleccionInmuebleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardModelSeleccionInmuebleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardModelSeleccionInmuebleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
