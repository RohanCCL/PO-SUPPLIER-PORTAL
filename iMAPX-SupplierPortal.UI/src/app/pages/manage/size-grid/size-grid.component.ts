import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { environment } from 'src/environments/environment';
import { ToastrService, ToastrModule} from 'ngx-toastr';
import { FormControl, FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { SizeGridDataTableComponent } from "../../../tables/size-grid-data-table/size-grid-data-table.component";
import { SizeGrid } from 'src/app/tables/size-grid-data-table/size-grid'; 
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-size-grid',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    ToastrModule,
    SizeGridDataTableComponent
],
  providers: [ToastrService],
  templateUrl: './size-grid.component.html',
  styleUrl: './size-grid.component.scss'
})
export class SizeGridComponent implements OnInit{
  dataSource = new MatTableDataSource<SizeGrid>([]);
  private authBaseUrl = environment.authBaseUrl;
  isLoading = false;
  validateMessage = '';
  sizeGrids: SizeGrid[] = [];

  constructor(private http: HttpClient, private authService: AuthService, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.fetchSizeGrids();
  }

  fetchSizeGrids(): void {
    this.isLoading = true;
    const accessToken = this.authService.getAccessToken();

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`,
    });

    interface SizeGridApiResponse {
      data: SizeGrid[];
    }

    /// Get data to gird
    this.http.get<SizeGridApiResponse>(`${this.authBaseUrl}/SizeGrid`, { headers })
      .subscribe({
        next: (data) => {
          this.sizeGrids = data.data.map(item => ({
            ...item,
            createdDate: new Date(item.createdDate),
            updatedDate: new Date(item.updatedDate)           
          }))
          .sort((a, b) => a.id - b.id);
          this.dataSource.data = this.sizeGrids; 
          this.isLoading = false;
        },
        error: (error) => {
          this.isLoading = false;
          this.toastr.error(error.error || "Error fetching size grids!", 'Error', { closeButton: true });
        }
      });  
  }

  applicationForm = new FormGroup({
    sizeGridCode: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    sizeGridName: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  sizeGridCodeError(): string | null {
    const control = this.applicationForm.controls.sizeGridCode;
    if (control.hasError('required') && (control.touched || control.dirty)) {
      return 'Size grid code is required';
    }
    if(this.validateMessage)
    {
      return this.validateMessage;
    }
    return null;
  }

  sizeGridNameError(): string | null {
    const control = this.applicationForm.controls.sizeGridName;
    if (control.hasError('required') && (control.touched || control.dirty)) {
      return 'Size grid name is required';
    }
    if(this.validateMessage)
    {
      return this.validateMessage;
    }
    return null;
  }
 
  onKeyPress(event: KeyboardEvent): void {
    const allowedKeys = ['Backspace', 'Tab', 'ArrowLeft', 'ArrowRight', 'Delete'];
    const regex = /^[a-zA-Z0-9]$/;
    
    if (!allowedKeys.includes(event.key) && !regex.test(event.key)) {
      event.preventDefault();
      this.validateMessage = 'You are unable to enter special charactors!!!...';
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
      const sizeGridCode = this.applicationForm.value.sizeGridCode;
      const sizeGridName = this.applicationForm.value.sizeGridName;
      const userInfo = this.authService.getUserInfo();
      const userid = userInfo.name;
      console.log(userid);
      const requestBody = {
        sizeGridCode: sizeGridCode,
        sizeGridName: sizeGridName,
        CreatedBy: userid,
        // updatedBy: userId,
      };

      const accessToken = this.authService.getAccessToken();
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      });
      this.http.post(`${this.authBaseUrl}/SizeGrid`, requestBody, { headers, responseType: 'text' })
        .subscribe({
          next: (response) => {
            this.isLoading = false;
            this.toastr.success(response, 'Success', {closeButton: true});
            this.applicationForm.reset();
            this.fetchSizeGrids();
          },
          error: (error) => {
            console.log(error.error);
            this.isLoading = false;
            this.toastr.error(error.error || "Error adding size grid!", 'Error', {closeButton: true});
          }
        });
    } else {
      this.applicationForm.markAllAsTouched();
    }
  }
}