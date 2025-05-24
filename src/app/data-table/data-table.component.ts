import { Component } from '@angular/core';
import { MatTableDataSource} from '@angular/material/table';
import { AddRowComponent } from '../AddRowComponent';
import { MatDialog } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  menu: any;
}

export const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1, name: 'Центральный', weight: 'Ул.Авроры 157A',
    menu: undefined
  },
 
  
];

@Component({
  selector: 'data-table.component',
  styleUrls: ['data-table.component.css'],
  templateUrl: 'data-table.component.html',
})
export class TableBasicExample {
  displayedColumns: string[] = ['position', 'name', 'weight', 'menu'];
  dataSource = ELEMENT_DATA;
  
}


