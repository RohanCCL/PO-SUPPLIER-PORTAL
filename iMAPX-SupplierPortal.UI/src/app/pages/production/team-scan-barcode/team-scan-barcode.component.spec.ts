import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamScanBarcodeComponent } from './team-scan-barcode.component';

describe('TeamScanBarcodeComponent', () => {
  let component: TeamScanBarcodeComponent;
  let fixture: ComponentFixture<TeamScanBarcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamScanBarcodeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamScanBarcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
