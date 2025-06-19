import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagAllocationComponent } from './tag-allocation.component';

describe('TagAllocationComponent', () => {
  let component: TagAllocationComponent;
  let fixture: ComponentFixture<TagAllocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TagAllocationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TagAllocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
