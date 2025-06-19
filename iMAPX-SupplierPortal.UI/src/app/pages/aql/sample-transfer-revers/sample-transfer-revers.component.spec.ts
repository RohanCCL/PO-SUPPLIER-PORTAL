import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleTransferReversComponent } from './sample-transfer-revers.component';

describe('SampleTransferReversComponent', () => {
  let component: SampleTransferReversComponent;
  let fixture: ComponentFixture<SampleTransferReversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SampleTransferReversComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SampleTransferReversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
