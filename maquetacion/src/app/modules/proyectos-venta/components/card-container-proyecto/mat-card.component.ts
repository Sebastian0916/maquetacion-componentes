import { Component, Input } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'card-container-proyecto',
  templateUrl: './mat-card.component.html',
  styleUrls: ['./mat-card.component.scss']
})
export class CardProyectoContainerComponent {
 
  constructor(private router : Router){}

  test(rutaRedirecicon : string){
    this.router.navigate([rutaRedirecicon]);
  }
}
