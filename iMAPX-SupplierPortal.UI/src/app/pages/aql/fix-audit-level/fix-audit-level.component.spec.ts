import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixAuditLevelComponent } from './fix-audit-level.component';

describe('FixAuditLevelComponent', () => {
  let component: FixAuditLevelComponent;
  let fixture: ComponentFixture<FixAuditLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FixAuditLevelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FixAuditLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
