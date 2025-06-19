import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WoProcessComponent } from './wo-process.component';

describe('WoProcessComponent', () => {
  let component: WoProcessComponent;
  let fixture: ComponentFixture<WoProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WoProcessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WoProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
