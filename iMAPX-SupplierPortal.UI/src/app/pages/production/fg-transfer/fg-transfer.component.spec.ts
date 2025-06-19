import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FgTransferComponent } from './fg-transfer.component';

describe('FgTransferComponent', () => {
  let component: FgTransferComponent;
  let fixture: ComponentFixture<FgTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FgTransferComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FgTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
