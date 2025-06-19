import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReverseFgComponent } from './reverse-fg.component';

describe('ReverseFgComponent', () => {
  let component: ReverseFgComponent;
  let fixture: ComponentFixture<ReverseFgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReverseFgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReverseFgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
