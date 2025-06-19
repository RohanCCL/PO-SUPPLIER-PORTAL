import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamScanNewComponent } from './team-scan-new.component';

describe('TeamScanNewComponent', () => {
  let component: TeamScanNewComponent;
  let fixture: ComponentFixture<TeamScanNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamScanNewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamScanNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
