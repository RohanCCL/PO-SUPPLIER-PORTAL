import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocketCreationRuleComponent } from './docket-creation-rule.component';

describe('DocketCreationRuleComponent', () => {
  let component: DocketCreationRuleComponent;
  let fixture: ComponentFixture<DocketCreationRuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocketCreationRuleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocketCreationRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
