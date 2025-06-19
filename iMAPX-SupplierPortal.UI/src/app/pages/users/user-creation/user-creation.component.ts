import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApplicationService } from 'src/app/services/application.service';
import { Application } from 'src/app/Models/application';

@Component({
  selector: 'app-user-creation',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatDatepickerModule,
    ReactiveFormsModule,
  ],
  templateUrl: './user-creation.component.html',
  styleUrl: './user-creation.component.scss',
  encapsulation: ViewEncapsulation.None,
  providers: [provideNativeDateAdapter()],
})
export class UserCreationComponent implements OnInit {
  applications: Application[] = [];

  constructor(private applicationService: ApplicationService) {}

  ngOnInit(): void {
    this.fetchApplications();
  }

  fetchApplications(): void {
    this.applicationService.getApplications().subscribe({
      next: (data: Application[]) => {
        this.applications = data;
      },
      error: (error) => {
        console.error('Error fetching applications:', error);
      }
    });
  }

  userForm = new FormGroup({
    firstName: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    lastName: new FormControl<string>('', {
      validators: [Validators.required],
    }),
    userName: new FormControl<string>('', {
      validators: [Validators.required],
    }),
    password: new FormControl<string>('', {
      validators: [Validators.required],
    }),
    confirmPassword: new FormControl<string>('', {
      validators: [Validators.required],
    }),
    epfNumber: new FormControl('', {
      validators: [Validators.required],
    }),
    email: new FormControl<string>('', {
      validators: [Validators.required, Validators.email],
    }),
    birthpicker: new FormControl('', {
      validators: [Validators.required],
    }),
    phoneNumber: new FormControl('', {
      validators: [Validators.required],
    }),
    appName: new FormControl('', {
      validators: [Validators.required],
    }),
    plant: new FormControl('', {
      validators: [Validators.required],
    }),
    profilePicture: new FormControl(''),
  });

  firstNameError(): string | null {
    const control = this.userForm.controls.firstName;
    if (control.hasError('required') && (control.touched || control.dirty)) {
      return 'First name is required';
    }
    return null;
  }

  lastNameError(): string | null {
    const control = this.userForm.controls.lastName;
    if (control.hasError('required') && (control.touched || control.dirty)) {
      return 'Last name is required';
    }
    return null;
  }

  userNameError(): string | null {
    const control = this.userForm.controls.userName;
    if (control.hasError('required') && (control.touched || control.dirty)) {
      return 'Username is required';
    }
    return null;
  }

  passwordError(): string | null {
    const control = this.userForm.controls.password;
    if (control.hasError('required') && (control.touched || control.dirty)) {
      return 'Password is required';
    }
    return null;
  }

  confirmPasswordError(): string | null {
    const control = this.userForm.controls.confirmPassword;
    if (control.hasError('required') && (control.touched || control.dirty)) {
      return 'Confirm password is required';
    }
    return null;
  }

  epfNumberError(): string | null {
    const control = this.userForm.controls.epfNumber;
    if (control.hasError('required') && (control.touched || control.dirty)) {
      return 'EPF number is required';
    }
    return null;
  }

  emailError(): string | null {
    const control = this.userForm.controls.email;
    if (control.hasError('required') && (control.touched || control.dirty)) {
      return 'Email is required';
    } else if (control.hasError('email')) {
      return 'Invalid email';
    }
    return null;
  }

  dobError(): string | null {
    const control = this.userForm.controls.birthpicker;
    if (control.hasError('required') && (control.touched || control.dirty)) {
      return 'Date of birth is required';
    }
    return null;
  }

  phoneNumberError(): string | null {
    const control = this.userForm.controls.phoneNumber;
    if (control.hasError('required') && (control.touched || control.dirty)) {
      return 'Phone number is required';
    }
    return null;
  }

  appNameError(): string | null {
    const control = this.userForm.controls.appName;
    if (control.hasError('required') && (control.touched || control.dirty)) {
      return 'App name is required';
    }
    return null;
  }

  plantError(): string | null {
    const control = this.userForm.controls.plant;
    if (control.hasError('required') && (control.touched || control.dirty)) {
      return 'Plant is required';
    }
    return null;
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
    }
  }
}
