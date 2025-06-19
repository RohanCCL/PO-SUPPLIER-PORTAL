import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { environment } from 'src/environments/environment';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { SizeList } from '../size-master';
import { sizeList } from '../size-master-list';

@Component({
  selector: 'app-update-size-master',
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
  templateUrl: './update-size-master.component.html',
  styleUrls: ['./update-size-master.component.scss']
})
export class UpdateSizeMasterComponent {
  private authBaseUrl = environment.authBaseUrl;
  isLoading = false;
  validateMessage = '';
  public sizeList = sizeList; // preloaded list

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private toastr: ToastrService
  ) {}

  applicationForm = new FormGroup({
    application: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    selectedSizeId: new FormControl<string | null>(null),
  });

  trackById(index: number, item: SizeList): string {
    return item.Id ?? '';
  }

  onSizeTypeChange(selectedId: string): void {
    const selectedItem = this.sizeList.find(item => item.Id === selectedId);
    if (selectedItem && selectedItem.sizeType !== undefined) {
      this.applicationForm.controls.application.setValue(selectedItem.sizeType);
    } else {
      this.applicationForm.controls.application.setValue('');
    }
  }

  applicationError(): string | null {
    const control = this.applicationForm.controls.application;
    if (control.hasError('required') && (control.touched || control.dirty)) {
      return 'Size type is required';
    }
    if (this.validateMessage) {
      return this.validateMessage;
    }
    return null;
  }

  onKeyPress(event: KeyboardEvent): void {
    const allowedKeys = ['Backspace', 'Tab', 'ArrowLeft', 'ArrowRight', 'Delete', 'Enter'];
    const regex = /^[a-zA-Z]$/;

    if (!allowedKeys.includes(event.key) && !regex.test(event.key)) {
      event.preventDefault();
      this.validateMessage = 'You are able to enter alphabets only';
    } else {
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
      const selectedSizeId = this.applicationForm.get('selectedSizeId')?.value;

      if (!selectedSizeId) {
        this.toastr.error('Please select a size type to update!', 'Error', { closeButton: true });
        this.isLoading = false;
        return;
      }

      const requestBody = {
        sizeType: sizeType,
        updatedBy: username,
        id: selectedSizeId
      };

      const accessToken = this.authService.getAccessToken();

      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      });

      this.http.put(`${this.authBaseUrl}/SizeGrid/by-keys`, requestBody, { headers, responseType: 'text' })
        .subscribe({
          next: (response) => {
            this.isLoading = false;
            this.toastr.success(response, 'Success', { closeButton: true });
            this.applicationForm.reset();
          },
          error: (error) => {
            this.isLoading = false;
            this.toastr.error(error.error || 'Error updating size type!', 'Error', { closeButton: true });
          }
        });

    } else {
      this.applicationForm.markAllAsTouched();
    }
  }
}
