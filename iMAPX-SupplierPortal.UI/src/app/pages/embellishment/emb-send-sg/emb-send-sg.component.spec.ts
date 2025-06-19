import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbSendSgComponent } from './emb-send-sg.component';

describe('EmbSendSgComponent', () => {
  let component: EmbSendSgComponent;
  let fixture: ComponentFixture<EmbSendSgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmbSendSgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmbSendSgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
