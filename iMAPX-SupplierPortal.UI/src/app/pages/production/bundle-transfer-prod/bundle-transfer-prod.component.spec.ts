import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BundleTransferProdComponent } from './bundle-transfer-prod.component';

describe('BundleTransferProdComponent', () => {
  let component: BundleTransferProdComponent;
  let fixture: ComponentFixture<BundleTransferProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BundleTransferProdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BundleTransferProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
