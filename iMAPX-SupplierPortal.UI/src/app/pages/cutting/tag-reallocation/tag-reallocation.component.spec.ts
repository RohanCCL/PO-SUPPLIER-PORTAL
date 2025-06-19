import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagReallocationComponent } from './tag-reallocation.component';

describe('TagReallocationComponent', () => {
  let component: TagReallocationComponent;
  let fixture: ComponentFixture<TagReallocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TagReallocationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TagReallocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
