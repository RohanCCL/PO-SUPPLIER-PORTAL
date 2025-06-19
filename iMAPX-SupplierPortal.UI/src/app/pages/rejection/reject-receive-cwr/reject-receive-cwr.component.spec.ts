import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectReceiveCwrComponent } from './reject-receive-cwr.component';

describe('RejectReceiveCwrComponent', () => {
  let component: RejectReceiveCwrComponent;
  let fixture: ComponentFixture<RejectReceiveCwrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RejectReceiveCwrComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RejectReceiveCwrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
