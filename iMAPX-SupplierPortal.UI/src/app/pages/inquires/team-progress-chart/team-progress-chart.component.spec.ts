import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamProgressChartComponent } from './team-progress-chart.component';

describe('TeamProgressChartComponent', () => {
  let component: TeamProgressChartComponent;
  let fixture: ComponentFixture<TeamProgressChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamProgressChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamProgressChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
