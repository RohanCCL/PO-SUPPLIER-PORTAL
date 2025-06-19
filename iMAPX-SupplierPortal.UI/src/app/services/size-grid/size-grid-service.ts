import { Injectable, signal } from '@angular/core';
import { SizeGrid } from 'src/app/tables/size-grid-data-table/size-grid';
import { sizeGrids } from 'src/app/tables/size-grid-data-table/size-grid-data';

@Injectable({
  providedIn: 'root',
})
export class SizeGridService {
  private sizeGrids = signal<SizeGrid[]>(sizeGrids);

  getSizeGrid() {
    return this.sizeGrids();
  }

  addSizeGrid(sizeGrid: SizeGrid): void {
    sizeGrid.id = this.sizeGrids().length + 1;
    this.sizeGrids.update((sizeGrids) => [...sizeGrids, sizeGrid]);
  }

  updateSizeGrid(updatedEmployee: SizeGrid): void {
    this.sizeGrids.update((sizeGrids) => {
      const index = sizeGrids.findIndex((e) => e.id === updatedEmployee.id);
      if (index !== -1) {
        sizeGrids[index] = updatedEmployee;
      }
      return [...sizeGrids];
    });
  }

  deleteSizeGrid(sizeGridId: number): void {
    this.sizeGrids.update((sizeGrids) =>
      sizeGrids.filter((e) => e.id !== sizeGridId)
    );
  }
}
