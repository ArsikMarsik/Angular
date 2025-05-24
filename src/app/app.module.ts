import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { TableBasicExample} from './data-table/data-table.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormField } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogActions, MatDialogClose, MatDialogContent } from "@angular/material/dialog";
import { EditRowComponent } from './EditRowComponent';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AddRowComponent } from './AddRowComponent';
import { TableBasicExample2 } from './data-table/data-table.component2';
import { TableBasicExample3 } from './data-table/data-table.component3';






@NgModule({
  declarations: [
    AppComponent,
    TableBasicExample,
    TableBasicExample2,
    TableBasicExample3,
    EditRowComponent,
    AddRowComponent
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTabsModule,
    MatIconModule,
    MatDialogModule,
    MatMenuModule,
    MatFormField,
    FormsModule,
    ReactiveFormsModule,
    MatDialogActions,
     MatDialogClose, 
     MatDialogContent,
     MatFormFieldModule

  ],  
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
