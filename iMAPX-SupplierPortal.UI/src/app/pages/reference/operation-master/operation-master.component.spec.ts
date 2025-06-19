import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationMasterComponent } from './operation-master.component';

describe('OperationMasterComponent', () => {
  let component: OperationMasterComponent;
  let fixture: ComponentFixture<OperationMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OperationMasterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperationMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
