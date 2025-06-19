import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateIncentiveComponent } from './calculate-incentive.component';

describe('CalculateIncentiveComponent', () => {
  let component: CalculateIncentiveComponent;
  let fixture: ComponentFixture<CalculateIncentiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculateIncentiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculateIncentiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
