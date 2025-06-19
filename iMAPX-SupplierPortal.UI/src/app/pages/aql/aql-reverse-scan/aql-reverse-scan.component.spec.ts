import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AqlReverseScanComponent } from './aql-reverse-scan.component';

describe('AqlReverseScanComponent', () => {
  let component: AqlReverseScanComponent;
  let fixture: ComponentFixture<AqlReverseScanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AqlReverseScanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AqlReverseScanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
