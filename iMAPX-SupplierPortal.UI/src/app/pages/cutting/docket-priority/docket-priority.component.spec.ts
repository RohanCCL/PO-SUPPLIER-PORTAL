import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocketPriorityComponent } from './docket-priority.component';

describe('DocketPriorityComponent', () => {
  let component: DocketPriorityComponent;
  let fixture: ComponentFixture<DocketPriorityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocketPriorityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocketPriorityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
