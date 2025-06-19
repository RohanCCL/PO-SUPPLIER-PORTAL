import { Component, ViewChild, OnInit, Inject, Optional, Input } from '@angular/core';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';
import { TablerIconsModule } from 'angular-tabler-icons';
import { SizeGrid } from './size-grid';
import { CommonModule } from '@angular/common';
import { SizeGridService } from 'src/app/services/size-grid/size-grid-service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-size-grid-data-table',
  standalone: true,
  imports: [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    TablerIconsModule,
    CommonModule,
  ],
  templateUrl: './size-grid-data-table.component.html',
  styleUrl: './size-grid-data-table.component.scss'
})
export class SizeGridDataTableComponent implements OnInit{
  @Input() dataSource = new MatTableDataSource<SizeGrid>([]);
  @ViewChild(MatTable, { static: true }) table: MatTable<any> =
    Object.create(null);

  searchText: any;

  displayedColumns: string[] = [
    '#',
    'size grid code',
    'size grid name',
    'created date',
    'updated date',
    'created by',
    'updated by',
    'action',
  ];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator =
    Object.create(null);

  constructor(
    public dialog: MatDialog,
    private sizeGridService: SizeGridService
  ) {}

  ngOnInit(): void {
    //this.loadSizeGrids();
  }

  loadSizeGrids(): void {
    // const sizeGridss = this.sizeGridService.getSizeGrid();
    // this.dataSource.data = sizeGridss;
    // this.dataSource = new MatTableDataSource(sizeGridss);
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(action: string, sizeGrid: SizeGrid | any): void {
    const dialogRef = this.dialog.open(AppSizeGridDialogContentComponent, {
      data: { action, sizeGrid },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.dataSource.data = this.sizeGridService.getSizeGrid();
      if (result && result.event === 'Refresh') {
        this.loadSizeGrids(); 
      }
    });
  }
}

interface DialogData {
  action: string;
  sizeGrid: SizeGrid;
}

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-dialog-content',
  standalone: true,
  imports: [MaterialModule, FormsModule, ReactiveFormsModule, CommonModule, ToastrModule],
  providers: [ToastrService],
  templateUrl: 'size-grid-dialog-content.html',
})
// tslint:disable-next-line: component-class-suffix
export class AppSizeGridDialogContentComponent {
  action: string | any;
  // tslint:disable-next-line - Disables all
  local_data: SizeGrid;
  private authBaseUrl = environment.authBaseUrl;

  constructor(
    private http: HttpClient,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<AppSizeGridDialogContentComponent>,
    private sizeGridService: SizeGridService,
    private snackBar: MatSnackBar,
    private authService: AuthService,
    private toastr: ToastrService,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.action = data.action;
    this.local_data = { ...data.sizeGrid };
  }

  doAction(): void {
    const accessToken = this.authService.getAccessToken();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`,
    });
    if (this.action === 'Update') {
      // this.sizeGridService.updateSizeGrid(this.local_data);
      // this.dialogRef.close({ event: 'Update' });
      // this.openSnackBar('Size Grid updated successfully!', 'Close');
      const url = `${this.authBaseUrl}/SizeMaster/PutSizeGrid`;
      this.http.put(url, this.local_data, {headers}).subscribe({
      next: (response : any) => {
        this.dialogRef.close({ event: 'Update' });
        //this.openSnackBar('Size Grid updated successfully!', 'Close');
        this.toastr.success(response, 'success', {closeButton: true});
      },
      error: (error) => {
        //this.openSnackBar('Failed to update Size Grid', 'Close');
        this.toastr.error(error.error || "Error updating Size Grid", 'Error', {closeButton: true});
      }
    });

    } else if (this.action === 'Delete') {
      // this.sizeGridService.deleteSizeGrid(this.local_data.id);
      // this.dialogRef.close({ event: 'Delete' });
      // this.openSnackBar('Size Grid deleted successfully!', 'Close');
      const url = `${this.authBaseUrl}/SizeMaster/DeleteSizeGrid?id=${this.local_data.id}`;
      this.http.delete(url, {headers}).subscribe({
        next: (response: any) => {
          this.dialogRef.close({ event: 'Delete' });
          //this.openSnackBar('Size Grid deleted successfully!', 'Close');
          this.toastr.success(response, 'Success', {closeButton : true});
        },
        error: (error) => {
          //this.openSnackBar('Failed to delete Size Grid', 'Close');
          this.toastr.error(error.error || "Error deleting Size Grid!!!...", 'Error', {closeButton : true});  
        }
      });
    }
  }

  // openSnackBar(message: string, action: string) {
  //   this.snackBar.open(message, action, {
  //     duration: 3000,
  //     horizontalPosition: 'center',
  //     verticalPosition: 'top',
  //   });
  // }

  closeDialog(): void {
    this.dialogRef.close({ event: 'Cancel' });
  }

  selectFile(event: any): void {
    if (!event.target.files[0] || event.target.files[0].length === 0) {
      return; // No file selected
    }

    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

  }
}