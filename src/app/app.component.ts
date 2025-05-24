import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PeriodicElement,ELEMENT_DATA, TableBasicExample } from './data-table/data-table.component';
import {MatTabsModule} from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatDialog, MatDialogActions, MatDialogClose, MatDialogContent } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { EditRowComponent } from './EditRowComponent';
import { AddRowComponent } from './AddRowComponent';
import { ELEMENT_DATA2, PeriodicElement2 } from './data-table/data-table.component2';

import { ELEMENT_DATA3, PeriodicElement3 } from './data-table/data-table.component3';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  [x: string]: any;
  displayedColumns: string[] = ['position', 'name', 'weight', 'menu'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  displayedColumns2: string[] = ['position', 'name', 'weight', 'menu'];
  dataSource2 = new MatTableDataSource<PeriodicElement2>(ELEMENT_DATA2);
  displayedColumns3: string[] = ['position', 'name', 'weight', 'menu'];
  dataSource3 = new MatTableDataSource<PeriodicElement2>(ELEMENT_DATA3);
  constructor(private dialog: MatDialog) {}
  openDialog(element: PeriodicElement): void {
    const dialogRef = this.dialog.open(EditRowComponent, {
      width: '550px', 
      data: element 
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        
        const index = this.dataSource.data.indexOf(element);
        if (index !== -1) {
          this.dataSource.data[index] = result;
          this.dataSource._updateChangeSubscription();
          this.saveToLocalStorage();
        }
      }
    });
  }
  addRow(): void {
    const dialogRef = this.dialog.open(AddRowComponent, {
      width: '550px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dataSource.data.push(result); 
        this.dataSource._updateChangeSubscription();
        this.saveToLocalStorage();
      }
    });
  }

 
  
  
  deleteRow(element: PeriodicElement) {
    const index = this.dataSource.data.indexOf(element);
    if (index !== -1) {
      this.dataSource.data.splice(index, 1);
      this.dataSource._updateChangeSubscription(); 
      this.saveToLocalStorage();
    }
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
          this.saveToLocalStorage();
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
        this.saveToLocalStorage();
      }
    });
  }

  deleteRow2(element: PeriodicElement2) {
    const index = this.dataSource2.data.indexOf(element);
    if (index !== -1) {
      this.dataSource2.data.splice(index, 1);
      this.dataSource2._updateChangeSubscription();
      this.saveToLocalStorage();
    }
  }
  addRow3(): void {
    const dialogRef3 = this.dialog.open(AddRowComponent, {
      width: '550px'
    });

    dialogRef3.afterClosed().subscribe(result => {
      if (result) {
        this.dataSource3.data.push(result);
        this.dataSource3._updateChangeSubscription();
        this.saveToLocalStorage();
      }
    });
  }

  deleteRow3(element: PeriodicElement3) {
    const index = this.dataSource3.data.indexOf(element);
    if (index !== -1) {
      this.dataSource3.data.splice(index, 1);
      this.dataSource3._updateChangeSubscription();
      this.saveToLocalStorage();
    }
  }
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
          this.saveToLocalStorage();
        }
      }
    });
  }
  ngOnInit() {
    this.loadFromLocalStorage();
  }

  loadFromLocalStorage() {
    const storedData1 = localStorage.getItem('dataSource');
    if (storedData1) {
      this.dataSource.data = JSON.parse(storedData1);
    }

    const storedData2 = localStorage.getItem('dataSource2');  
    if (storedData2) {
      this.dataSource2.data = JSON.parse(storedData2);
    }

    const storedData3 = localStorage.getItem('dataSource3');
    if (storedData3) {
      this.dataSource3.data = JSON.parse(storedData3);
    }
  }

  saveToLocalStorage() {
    localStorage.setItem('dataSource', JSON.stringify(this.dataSource.data));
    localStorage.setItem('dataSource2', JSON.stringify(this.dataSource2.data));
    localStorage.setItem('dataSource3', JSON.stringify(this.dataSource3.data));
  }
  
}
@Component({
  selector: 'edit',
  templateUrl: 'edit.html',
  standalone: true,
  imports: [MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule],
})
export class DialogFromMenuExampleDialog {}


export { PeriodicElement };
export { PeriodicElement2 };
export { PeriodicElement3 };



