import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleOperationComponent } from './style-operation.component';

describe('StyleOperationComponent', () => {
  let component: StyleOperationComponent;
  let fixture: ComponentFixture<StyleOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StyleOperationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StyleOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
