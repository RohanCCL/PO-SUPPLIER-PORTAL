import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocketConfirmationComponent } from './docket-confirmation.component';

describe('DocketConfirmationComponent', () => {
  let component: DocketConfirmationComponent;
  let fixture: ComponentFixture<DocketConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocketConfirmationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocketConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
