import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatTableDataSource } from "@angular/material/table";
import { AddRowComponent } from "../AddRowComponent";
import { EditRowComponent } from "../EditRowComponent";
import { PeriodicElement } from "./data-table.component";

export interface PeriodicElement2 {
    name: string;
    position: number;
    weight: string;
    menu: any;
  }
  
  export const ELEMENT_DATA2: PeriodicElement2[] = [
    {
      position: 1, name: 'СамараСтрой', weight: 'Строй материалы',
      menu: undefined
    },
   
    
  ];
  @Component({
    selector: 'data-table.component2',
    styleUrls: ['data-table.component2.css'],
    templateUrl: 'data-table.component2.html',
  })
  export class TableBasicExample2 {
    displayedColumns2: string[] = ['position', 'name', 'weight', 'menu'];
    dataSource2 = new MatTableDataSource<PeriodicElement2>(ELEMENT_DATA2);
    constructor(private dialog: MatDialog) {}
  openDialog(element: PeriodicElement): void {
    const dialogRef = this.dialog.open(EditRowComponent, {
      width: '550px', // Установите ширину диалогового окна по вашему усмотрению
      data: element // Передайте выбранный элемент в диалоговое окно
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Если пользователь сохраняет изменения, обновите элемент в источнике данных
        const index = this.dataSource2.data.indexOf(element);
        if (index !== -1) {
          this.dataSource2.data[index] = result;
          this.dataSource2._updateChangeSubscription();
        }
      }
    });
  }
  
  openDialog2(element: PeriodicElement2): void {
    const dialogRef2 = this.dialog.open(EditRowComponent, {
      width: '550px',
      data: element
    });

    dialogRef2.afterClosed().subscribe(result => {
      if (result) {
        const index = this.dataSource2.data.indexOf(element);
        if (index !== -1) {
          this.dataSource2.data[index] = result;
          this.dataSource2._updateChangeSubscription();
        }
      }
    });
  }

  addRow2(): void {
    const dialogRef2 = this.dialog.open(AddRowComponent, {
      width: '550px'
    });

    dialogRef2.afterClosed().subscribe(result => {
      if (result) {
        this.dataSource2.data.push(result);
        this.dataSource2._updateChangeSubscription();
      }
    });
  }

  deleteRow2(element: PeriodicElement2) {
    const index = this.dataSource2.data.indexOf(element);
    if (index !== -1) {
      this.dataSource2.data.splice(index, 1);
      this.dataSource2._updateChangeSubscription();
    }
  }
  
  }
  