// В AddRowComponent.ts

import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-row',
  templateUrl: 'AddRowComponent.html',
  styleUrls: ['AddRowComponent.css']
})
export class AddRowComponent {
  addForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddRowComponent>,
    private formBuilder: FormBuilder
  ) {
    this.addForm = this.formBuilder.group({
      name: ['', Validators.required],
      position: [null, Validators.required],
      weight: [null, Validators.required],
    });
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onSaveClick(): void {
    if (this.addForm.valid) {
      this.dialogRef.close(this.addForm.value);
    }
  }
}
