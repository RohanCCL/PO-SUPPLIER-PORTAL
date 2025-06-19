import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamOperationsComponent } from './team-operations.component';

describe('TeamOperationsComponent', () => {
  let component: TeamOperationsComponent;
  let fixture: ComponentFixture<TeamOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamOperationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
