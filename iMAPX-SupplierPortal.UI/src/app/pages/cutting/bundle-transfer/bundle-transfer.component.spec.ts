import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BundleTransferComponent } from './bundle-transfer.component';

describe('BundleTransferComponent', () => {
  let component: BundleTransferComponent;
  let fixture: ComponentFixture<BundleTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BundleTransferComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BundleTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
