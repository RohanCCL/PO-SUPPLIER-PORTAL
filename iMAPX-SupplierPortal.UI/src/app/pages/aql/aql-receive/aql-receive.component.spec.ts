import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AqlReceiveComponent } from './aql-receive.component';

describe('AqlReceiveComponent', () => {
  let component: AqlReceiveComponent;
  let fixture: ComponentFixture<AqlReceiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AqlReceiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AqlReceiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
