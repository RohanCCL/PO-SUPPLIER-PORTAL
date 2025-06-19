import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectCpsgComponent } from './reject-cpsg.component';

describe('RejectCpsgComponent', () => {
  let component: RejectCpsgComponent;
  let fixture: ComponentFixture<RejectCpsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RejectCpsgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RejectCpsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
