import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-edit-row',
  templateUrl: 'EditRowComponent.html',
  
})
export class EditRowComponent {
  editForm: FormGroup; 

  constructor(
    public dialogRef: MatDialogRef<EditRowComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, 
    private formBuilder: FormBuilder 
  ) {
    
    this.editForm = this.formBuilder.group({
      name: [data.name, Validators.required],
      position: [data.position, Validators.required],
      weight: [data.weight, Validators.required],
    });
  }

  onCancelClick(): void {
   
    this.dialogRef.close();
  }

  onSaveClick(): void {
   
    if (this.editForm.valid) {
      this.dialogRef.close(this.editForm.value);
    }
  }
}
