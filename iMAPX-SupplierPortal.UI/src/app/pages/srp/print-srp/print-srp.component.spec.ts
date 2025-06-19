import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintSrpComponent } from './print-srp.component';

describe('PrintSrpComponent', () => {
  let component: PrintSrpComponent;
  let fixture: ComponentFixture<PrintSrpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrintSrpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintSrpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
