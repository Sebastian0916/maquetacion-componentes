import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapImageReferenceComponent } from './map-image-reference.component';

describe('MapImageReferenceComponent', () => {
  let component: MapImageReferenceComponent;
  let fixture: ComponentFixture<MapImageReferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapImageReferenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapImageReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
