import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnToRecorrectComponent } from './return-to-recorrect.component';

describe('ReturnToRecorrectComponent', () => {
  let component: ReturnToRecorrectComponent;
  let fixture: ComponentFixture<ReturnToRecorrectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReturnToRecorrectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReturnToRecorrectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
