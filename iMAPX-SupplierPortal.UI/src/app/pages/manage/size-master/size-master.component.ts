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
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-size-master',
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
  templateUrl: './size-master.component.html',
  styleUrl: './size-master.component.scss'
})
export class SizeMasterComponent {
private authBaseUrl = environment.authBaseUrl;
  isLoading = false;
  validateMessage = '';

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
      return 'Size type is required';
    }
    if(this.validateMessage)
    {
      return this.validateMessage;
    }
    return null;
  }
 
  onKeyPress(event: KeyboardEvent): void {
    const allowedKeys = ['Backspace', 'Tab', 'ArrowLeft', 'ArrowRight', 'Delete'];
    const regex = /^[a-zA-Z]$/;
    
    if (!allowedKeys.includes(event.key) && !regex.test(event.key)) {
      event.preventDefault();
      this.validateMessage = 'You are able to enter alphabets only';
    } 
    else 
    {
      this.validateMessage = '';
    }
  }


  onSubmit() {
    if (this.applicationForm.valid) {
      this.isLoading = true;
      this.validateMessage = '';
      const sizeType = this.applicationForm.value.application;
      const userInfo = this.authService.getUserInfo();
      const username = userInfo.username;
      const requestBody = {
      sizeType: sizeType,
      createdBy: username,
      updatedBy: username,
    };

      const accessToken = this.authService.getAccessToken();

      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      });
      this.http.post(`${this.authBaseUrl}/SizeMaster/PostAllSM`, requestBody, { headers, responseType: 'text' })
        .subscribe({
          next: (response) => {
            this.isLoading = false;
            this.toastr.success(response, 'Success', {closeButton: true});
            this.applicationForm.reset();
          },
          error: (error) => {
            this.isLoading = false;
            this.toastr.error(error.error || "Error adding size type!", 'Error', {closeButton: true});
          }
        });
    } else {
      this.applicationForm.markAllAsTouched();
    }
  }
}
