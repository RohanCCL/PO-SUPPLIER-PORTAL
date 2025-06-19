import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackCartonComponent } from './pack-carton.component';

describe('PackCartonComponent', () => {
  let component: PackCartonComponent;
  let fixture: ComponentFixture<PackCartonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PackCartonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackCartonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
