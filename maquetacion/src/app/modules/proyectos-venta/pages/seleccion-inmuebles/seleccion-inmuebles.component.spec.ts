import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionInmueblesComponent } from './seleccion-inmuebles.component';

describe('SeleccionInmueblesComponent', () => {
  let component: SeleccionInmueblesComponent;
  let fixture: ComponentFixture<SeleccionInmueblesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeleccionInmueblesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeleccionInmueblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
