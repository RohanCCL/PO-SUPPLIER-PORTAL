import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbGrnComponent } from './emb-grn.component';

describe('EmbGrnComponent', () => {
  let component: EmbGrnComponent;
  let fixture: ComponentFixture<EmbGrnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmbGrnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmbGrnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
