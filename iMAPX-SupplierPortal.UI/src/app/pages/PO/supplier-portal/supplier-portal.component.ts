import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { environment } from 'src/environments/environment';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { Observable, startWith, map, of } from 'rxjs';

import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-supplier-portal',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    ReactiveFormsModule,
    ToastrModule,
  ],
  templateUrl: './supplier-portal.component.html',
  styleUrls: ['./supplier-portal.component.scss'],
  providers: [ToastrService]
})
export class POCreateComponent implements OnInit {
  private authBaseUrl = environment.authBaseUrl;
  isLoading = false;

  applicationList: string[] = ['App One', 'App Two', 'App Three'];
  filteredApps!: Observable<string[]>;

  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
 //  dataSource = ELEMENT_DATA;

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
    date: new FormControl<Date | null>(null),
  });

  ngOnInit(): void {
    this.filteredApps = this.applicationForm.controls.application.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || ''))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.applicationList.filter(app => app.toLowerCase().includes(filterValue));
  }

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
        Authorization: `Bearer ${accessToken}`,
      });

      const params = new HttpParams().set('AppName', applicationName!);

      this.http
        .post(`${this.authBaseUrl}/Admin/AddApplicationInfo`, null, {
          headers,
          params,
          responseType: 'text',
        })
        .subscribe({
          next: (response) => {
            this.isLoading = false;
            this.toastr.success(response, 'Success', { closeButton: true });
            this.applicationForm.reset();
          },
          error: () => {
            this.isLoading = false;
            this.toastr.error('Error adding application!', 'Error', {
              closeButton: true,
            });
          },
        });
    } else {
      this.applicationForm.markAllAsTouched();
    }
  }
}

// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
//   { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
//   { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
//   { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
//   { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
//   { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
//   { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
//   { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
//   { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
//   { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
// ];
