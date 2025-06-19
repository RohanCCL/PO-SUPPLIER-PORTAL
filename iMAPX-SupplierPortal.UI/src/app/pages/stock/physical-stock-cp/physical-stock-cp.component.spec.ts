import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicalStockCpComponent } from './physical-stock-cp.component';

describe('PhysicalStockCpComponent', () => {
  let component: PhysicalStockCpComponent;
  let fixture: ComponentFixture<PhysicalStockCpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhysicalStockCpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhysicalStockCpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
