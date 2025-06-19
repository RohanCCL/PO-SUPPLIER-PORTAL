import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReverseCwrReceivingComponent } from './reverse-cwr-receiving.component';

describe('ReverseCwrReceivingComponent', () => {
  let component: ReverseCwrReceivingComponent;
  let fixture: ComponentFixture<ReverseCwrReceivingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReverseCwrReceivingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReverseCwrReceivingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
