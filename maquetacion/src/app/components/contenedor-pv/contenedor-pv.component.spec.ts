import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorPVComponent } from './contenedor-pv.component';

describe('ContenedorPVComponent', () => {
  let component: ContenedorPVComponent;
  let fixture: ComponentFixture<ContenedorPVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenedorPVComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenedorPVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
