import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocketCreationComponent } from './docket-creation.component';

describe('DocketCreationComponent', () => {
  let component: DocketCreationComponent;
  let fixture: ComponentFixture<DocketCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocketCreationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocketCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
