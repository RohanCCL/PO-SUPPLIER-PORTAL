import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockAdministartionComponent } from './stock-administartion.component';

describe('StockAdministartionComponent', () => {
  let component: StockAdministartionComponent;
  let fixture: ComponentFixture<StockAdministartionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockAdministartionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockAdministartionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
