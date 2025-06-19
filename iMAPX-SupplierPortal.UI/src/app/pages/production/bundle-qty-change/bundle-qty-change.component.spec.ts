import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BundleQtyChangeComponent } from './bundle-qty-change.component';

describe('BundleQtyChangeComponent', () => {
  let component: BundleQtyChangeComponent;
  let fixture: ComponentFixture<BundleQtyChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BundleQtyChangeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BundleQtyChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
