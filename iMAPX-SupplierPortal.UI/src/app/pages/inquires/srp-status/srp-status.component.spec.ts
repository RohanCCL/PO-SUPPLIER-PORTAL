import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SrpStatusComponent } from './srp-status.component';

describe('SrpStatusComponent', () => {
  let component: SrpStatusComponent;
  let fixture: ComponentFixture<SrpStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SrpStatusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SrpStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
