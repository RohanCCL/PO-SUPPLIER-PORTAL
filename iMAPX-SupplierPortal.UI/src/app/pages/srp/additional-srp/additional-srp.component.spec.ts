import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalSrpComponent } from './additional-srp.component';

describe('AdditionalSrpComponent', () => {
  let component: AdditionalSrpComponent;
  let fixture: ComponentFixture<AdditionalSrpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdditionalSrpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdditionalSrpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
