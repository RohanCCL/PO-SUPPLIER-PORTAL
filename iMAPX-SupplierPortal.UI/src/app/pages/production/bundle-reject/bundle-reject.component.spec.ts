import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BundleRejectComponent } from './bundle-reject.component';

describe('BundleRejectComponent', () => {
  let component: BundleRejectComponent;
  let fixture: ComponentFixture<BundleRejectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BundleRejectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BundleRejectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
