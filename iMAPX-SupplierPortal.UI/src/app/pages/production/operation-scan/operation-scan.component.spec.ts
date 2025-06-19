import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationScanComponent } from './operation-scan.component';

describe('OperationScanComponent', () => {
  let component: OperationScanComponent;
  let fixture: ComponentFixture<OperationScanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OperationScanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperationScanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
