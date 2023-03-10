import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderModelSeleccionInmuebleComponent } from './header-model-seleccion-inmueble.component';

describe('HeaderModelSeleccionInmuebleComponent', () => {
  let component: HeaderModelSeleccionInmuebleComponent;
  let fixture: ComponentFixture<HeaderModelSeleccionInmuebleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderModelSeleccionInmuebleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderModelSeleccionInmuebleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
