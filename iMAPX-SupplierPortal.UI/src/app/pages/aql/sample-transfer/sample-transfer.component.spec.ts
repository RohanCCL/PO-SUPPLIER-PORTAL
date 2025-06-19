import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleTransferComponent } from './sample-transfer.component';

describe('SampleTransferComponent', () => {
  let component: SampleTransferComponent;
  let fixture: ComponentFixture<SampleTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SampleTransferComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SampleTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
