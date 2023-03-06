import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMenuContainerComponent } from './card-menu-container.component';

describe('CardMenuContainerComponent', () => {
  let component: CardMenuContainerComponent;
  let fixture: ComponentFixture<CardMenuContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardMenuContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardMenuContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
