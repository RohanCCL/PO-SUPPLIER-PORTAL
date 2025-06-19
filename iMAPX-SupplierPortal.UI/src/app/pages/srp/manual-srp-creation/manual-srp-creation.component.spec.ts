import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualSrpCreationComponent } from './manual-srp-creation.component';

describe('ManualSrpCreationComponent', () => {
  let component: ManualSrpCreationComponent;
  let fixture: ComponentFixture<ManualSrpCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManualSrpCreationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManualSrpCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
