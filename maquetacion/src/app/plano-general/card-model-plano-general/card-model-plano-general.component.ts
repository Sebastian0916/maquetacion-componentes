import { Component } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { MatDialogComponent } from '../mat-dialog/mat-dialog.component';

@Component({
  selector: 'app-card-model-plano-general',
  templateUrl: './card-model-plano-general.component.html',
  styleUrls: ['./card-model-plano-general.component.scss']
})
export class CardModelPlanoGeneralComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(MatDialogComponent, {
      width: "736px",
      height:"507px"

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
