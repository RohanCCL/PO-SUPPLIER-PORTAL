import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamScanReverseComponent } from './team-scan-reverse.component';

describe('TeamScanReverseComponent', () => {
  let component: TeamScanReverseComponent;
  let fixture: ComponentFixture<TeamScanReverseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamScanReverseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamScanReverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
