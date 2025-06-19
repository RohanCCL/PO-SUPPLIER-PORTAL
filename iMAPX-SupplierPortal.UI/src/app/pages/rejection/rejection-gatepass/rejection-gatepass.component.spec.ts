import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectionGatepassComponent } from './rejection-gatepass.component';

describe('RejectionGatepassComponent', () => {
  let component: RejectionGatepassComponent;
  let fixture: ComponentFixture<RejectionGatepassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RejectionGatepassComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RejectionGatepassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
