import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderModelComponent } from './header-model-proyecto-venta.component';

describe('HeaderModelComponent', () => {
  let component: HeaderModelComponent;
  let fixture: ComponentFixture<HeaderModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderModelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
