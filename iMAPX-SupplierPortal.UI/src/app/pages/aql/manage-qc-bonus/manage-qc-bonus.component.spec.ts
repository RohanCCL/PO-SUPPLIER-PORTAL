import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageQcBonusComponent } from './manage-qc-bonus.component';

describe('ManageQcBonusComponent', () => {
  let component: ManageQcBonusComponent;
  let fixture: ComponentFixture<ManageQcBonusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageQcBonusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageQcBonusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
