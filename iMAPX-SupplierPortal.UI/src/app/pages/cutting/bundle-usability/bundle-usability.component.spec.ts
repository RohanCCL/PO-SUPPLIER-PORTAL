import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BundleUsabilityComponent } from './bundle-usability.component';

describe('BundleUsabilityComponent', () => {
  let component: BundleUsabilityComponent;
  let fixture: ComponentFixture<BundleUsabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BundleUsabilityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BundleUsabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
