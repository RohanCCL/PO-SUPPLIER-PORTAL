import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReversePendingGatepassComponent } from './reverse-pending-gatepass.component';

describe('ReversePendingGatepassComponent', () => {
  let component: ReversePendingGatepassComponent;
  let fixture: ComponentFixture<ReversePendingGatepassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReversePendingGatepassComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReversePendingGatepassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
