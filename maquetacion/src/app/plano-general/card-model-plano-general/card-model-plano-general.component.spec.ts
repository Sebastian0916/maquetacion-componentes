import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardModelPlanoGeneralComponent } from './card-model-plano-general.component';

describe('CardModelPlanoGeneralComponent', () => {
  let component: CardModelPlanoGeneralComponent;
  let fixture: ComponentFixture<CardModelPlanoGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardModelPlanoGeneralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardModelPlanoGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
