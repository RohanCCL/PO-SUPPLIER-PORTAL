import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AqlReverseComponent } from './aql-reverse.component';

describe('AqlReverseComponent', () => {
  let component: AqlReverseComponent;
  let fixture: ComponentFixture<AqlReverseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AqlReverseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AqlReverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
