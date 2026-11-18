import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantAnalysis } from './plant-analysis';

describe('PlantAnalysis', () => {
  let component: PlantAnalysis;
  let fixture: ComponentFixture<PlantAnalysis>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlantAnalysis],
    }).compileComponents();

    fixture = TestBed.createComponent(PlantAnalysis);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
