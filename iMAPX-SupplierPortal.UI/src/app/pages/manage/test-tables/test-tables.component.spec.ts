import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTablesComponent } from './test-tables.component';

describe('TestTablesComponent', () => {
  let component: TestTablesComponent;
  let fixture: ComponentFixture<TestTablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestTablesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
