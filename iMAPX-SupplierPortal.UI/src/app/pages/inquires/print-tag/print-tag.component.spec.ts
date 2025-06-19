import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintTagComponent } from './print-tag.component';

describe('PrintTagComponent', () => {
  let component: PrintTagComponent;
  let fixture: ComponentFixture<PrintTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrintTagComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
