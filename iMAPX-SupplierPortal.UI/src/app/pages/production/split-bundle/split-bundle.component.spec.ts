import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitBundleComponent } from './split-bundle.component';

describe('SplitBundleComponent', () => {
  let component: SplitBundleComponent;
  let fixture: ComponentFixture<SplitBundleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SplitBundleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SplitBundleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
