import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiseaseLibrary } from './disease-library';

describe('DiseaseLibrary', () => {
  let component: DiseaseLibrary;
  let fixture: ComponentFixture<DiseaseLibrary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiseaseLibrary],
    }).compileComponents();

    fixture = TestBed.createComponent(DiseaseLibrary);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
