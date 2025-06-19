import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectionStockComponent } from './rejection-stock.component';

describe('RejectionStockComponent', () => {
  let component: RejectionStockComponent;
  let fixture: ComponentFixture<RejectionStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RejectionStockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RejectionStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
