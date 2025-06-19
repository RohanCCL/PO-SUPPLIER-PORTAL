import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FgDeliveryComponent } from './fg-delivery.component';

describe('FgDeliveryComponent', () => {
  let component: FgDeliveryComponent;
  let fixture: ComponentFixture<FgDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FgDeliveryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FgDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
