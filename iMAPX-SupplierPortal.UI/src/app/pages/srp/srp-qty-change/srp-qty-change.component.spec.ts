import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SrpQtyChangeComponent } from './srp-qty-change.component';

describe('SrpQtyChangeComponent', () => {
  let component: SrpQtyChangeComponent;
  let fixture: ComponentFixture<SrpQtyChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SrpQtyChangeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SrpQtyChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
