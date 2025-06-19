import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamTransferReverseComponent } from './team-transfer-reverse.component';

describe('TeamTransferReverseComponent', () => {
  let component: TeamTransferReverseComponent;
  let fixture: ComponentFixture<TeamTransferReverseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamTransferReverseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamTransferReverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
