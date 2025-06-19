import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationScanUploadComponent } from './operation-scan-upload.component';

describe('OperationScanUploadComponent', () => {
  let component: OperationScanUploadComponent;
  let fixture: ComponentFixture<OperationScanUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OperationScanUploadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperationScanUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
