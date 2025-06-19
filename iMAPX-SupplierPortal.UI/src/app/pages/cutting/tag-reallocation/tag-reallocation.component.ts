import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-tag-reallocation',
  standalone: true,
  imports: [CommonModule,
    MaterialModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule],
  templateUrl: './tag-reallocation.component.html',
  styleUrl: './tag-reallocation.component.scss'
})
export class TagReallocationComponent {
  reallocationForm = new FormGroup({
    searchType: new FormControl<'tagID' | 'bundleID'>('tagID'),
    searchValue: new FormControl('')
  });

  get inputLabel(): string {
    return this.reallocationForm.value.searchType === 'tagID' ? 'Tag ID' : 'Bundle ID';
  }

}
