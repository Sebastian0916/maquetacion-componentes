import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
@Component({
  selector: 'app-plano-general',
  templateUrl: './plano-general.component.html',
  styleUrls: ['./plano-general.component.scss'],
})
export class PlanoGeneralComponent {
  cards = [{}, {}, {}, {}, {}, {}];

  constructor(public dialog: MatDialog) {}
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '650px',
      height: '455px',
    });
    dialogRef.afterClosed().subscribe(result =>{
      console.log('The dialog was closed')
    })
  }

}
