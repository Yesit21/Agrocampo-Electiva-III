import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosticsHistory } from './diagnostics-history';

describe('DiagnosticsHistory', () => {
  let component: DiagnosticsHistory;
  let fixture: ComponentFixture<DiagnosticsHistory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiagnosticsHistory],
    }).compileComponents();

    fixture = TestBed.createComponent(DiagnosticsHistory);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
