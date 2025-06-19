import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReverseFgScanComponent } from './reverse-fg-scan.component';

describe('ReverseFgScanComponent', () => {
  let component: ReverseFgScanComponent;
  let fixture: ComponentFixture<ReverseFgScanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReverseFgScanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReverseFgScanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
