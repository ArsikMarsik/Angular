import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatTableDataSource } from "@angular/material/table";
import { AddRowComponent } from "../AddRowComponent";
import { EditRowComponent } from "../EditRowComponent";
import { PeriodicElement } from "./data-table.component";

export interface PeriodicElement3 {
    name: string;
    position: number;
    weight: string;
    menu: any;
  }
  
  export const ELEMENT_DATA3: PeriodicElement3[] = [
    {
      position: 1, name: 'Кирпичи(M100)', weight: '100000',
      menu: undefined
    },
   
    
  ];
  @Component({
    selector: 'data-table.component3',
    templateUrl: 'data-table.component3.html',
  })
  export class TableBasicExample3 {
    displayedColumns3: string[] = ['position', 'name', 'weight', 'menu'];
    dataSource3 = new MatTableDataSource<PeriodicElement3>(ELEMENT_DATA3);
    constructor(private dialog: MatDialog) {}
  
  openDialog3(element: PeriodicElement3): void {
    const dialogRef3 = this.dialog.open(EditRowComponent, {
      width: '550px',
      data: element
    });

    dialogRef3.afterClosed().subscribe(result => {
      if (result) {
        const index = this.dataSource3.data.indexOf(element);
        if (index !== -1) {
          this.dataSource3.data[index] = result;
          this.dataSource3._updateChangeSubscription();
        }
      }
    });
  }

  addRow3(): void {
    const dialogRef3 = this.dialog.open(AddRowComponent, {
      width: '550px'
    });

    dialogRef3.afterClosed().subscribe(result => {
      if (result) {
        this.dataSource3.data.push(result);
        this.dataSource3._updateChangeSubscription();
      }
    });
  }

  deleteRow3(element: PeriodicElement3) {
    const index = this.dataSource3.data.indexOf(element);
    if (index !== -1) {
      this.dataSource3.data.splice(index, 1);
      this.dataSource3._updateChangeSubscription();
    }
  }
  
  }
  