import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAsDifferentUserComponent } from './login-as-different-user.component';

describe('LoginAsDifferentUserComponent', () => {
  let component: LoginAsDifferentUserComponent;
  let fixture: ComponentFixture<LoginAsDifferentUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginAsDifferentUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginAsDifferentUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
