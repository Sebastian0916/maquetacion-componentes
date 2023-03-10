import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderModelPlanoGeneralComponent } from './header-model-plano-general.component';

describe('HeaderModelPlanoGeneralComponent', () => {
  let component: HeaderModelPlanoGeneralComponent;
  let fixture: ComponentFixture<HeaderModelPlanoGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderModelPlanoGeneralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderModelPlanoGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
