import { Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogActions, MatDialogClose, MatDialogContent } from "@angular/material/dialog";

@Component({
    selector: 'edit',
    templateUrl: 'edit.html',
    standalone: true,
    imports: [MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule],
  })
  export class DialogFromMenuExampleDialog {}