import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncentiveWeekComponent } from './incentive-week.component';

describe('IncentiveWeekComponent', () => {
  let component: IncentiveWeekComponent;
  let fixture: ComponentFixture<IncentiveWeekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncentiveWeekComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncentiveWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
