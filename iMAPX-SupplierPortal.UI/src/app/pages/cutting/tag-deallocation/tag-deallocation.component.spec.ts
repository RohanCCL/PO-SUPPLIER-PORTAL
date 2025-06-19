import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagDeallocationComponent } from './tag-deallocation.component';

describe('TagDeallocationComponent', () => {
  let component: TagDeallocationComponent;
  let fixture: ComponentFixture<TagDeallocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TagDeallocationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TagDeallocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
