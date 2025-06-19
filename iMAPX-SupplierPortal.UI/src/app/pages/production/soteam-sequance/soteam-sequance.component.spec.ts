import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoteamSequanceComponent } from './soteam-sequance.component';

describe('SoteamSequanceComponent', () => {
  let component: SoteamSequanceComponent;
  let fixture: ComponentFixture<SoteamSequanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoteamSequanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoteamSequanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
