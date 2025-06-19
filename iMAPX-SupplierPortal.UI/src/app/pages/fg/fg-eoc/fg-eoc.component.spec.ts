import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FgEocComponent } from './fg-eoc.component';

describe('FgEocComponent', () => {
  let component: FgEocComponent;
  let fixture: ComponentFixture<FgEocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FgEocComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FgEocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
