import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { environment } from 'src/environments/environment';
import { ToastrService, ToastrModule} from 'ngx-toastr';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-add-application',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    ToastrModule,
  ],
  providers: [ToastrService],
  templateUrl: './add-application.component.html',
  styleUrl: './add-application.component.scss',
})
export class AddApplicationComponent {

  private authBaseUrl = environment.authBaseUrl;
  isLoading = false;

  constructor(private http: HttpClient, private authService: AuthService, private toastr: ToastrService) {}

  applicationForm = new FormGroup({
    application: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  applicationError(): string | null {
    const control = this.applicationForm.controls.application;
    if (control.hasError('required') && (control.touched || control.dirty)) {
      return 'Application name is required';
    }
    return null;
  }


  onSubmit() {
    if (this.applicationForm.valid) {

      this.isLoading = true;
      
      const applicationName = this.applicationForm.value.application;
      const accessToken = this.authService.getAccessToken();

      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      });
      const params = new HttpParams().set('AppName', applicationName!);

      this.http.post(`${this.authBaseUrl}/Admin/AddApplicationInfo`, null, { headers, params, responseType: 'text' })
        .subscribe({
          next: (response) => {
            this.isLoading = false;
            this.toastr.success(response, 'Success', {closeButton: true});
            this.applicationForm.reset();
          },
          error: () => {
            this.isLoading = false;
            this.toastr.error("Error adding application!", 'Error', {closeButton: true});
          }
        });
    } else {
      this.applicationForm.markAllAsTouched();
    }
  }
}
