import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanModelPlanoGeneralComponent } from './plan-model-plano-general.component';

describe('PlanModelPlanoGeneralComponent', () => {
  let component: PlanModelPlanoGeneralComponent;
  let fixture: ComponentFixture<PlanModelPlanoGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanModelPlanoGeneralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanModelPlanoGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
