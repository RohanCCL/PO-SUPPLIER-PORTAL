import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FgMasterUpdateComponent } from './fg-master-update.component';

describe('FgMasterUpdateComponent', () => {
  let component: FgMasterUpdateComponent;
  let fixture: ComponentFixture<FgMasterUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FgMasterUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FgMasterUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
