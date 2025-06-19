import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReverseCpsgRejectionComponent } from './reverse-cpsg-rejection.component';

describe('ReverseCpsgRejectionComponent', () => {
  let component: ReverseCpsgRejectionComponent;
  let fixture: ComponentFixture<ReverseCpsgRejectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReverseCpsgRejectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReverseCpsgRejectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
