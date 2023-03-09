import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'header-page',
  templateUrl: './header-page.component.html',
  styleUrls: ['./header-page.component.scss'],
})
export class HeaderPageComponent {
@Input () namePage!:string;
@Input () route!:string;

constructor(private router : Router){}

  routes(rutaRedirecicon : string){
    this.router.navigate([`/proyectos_venta/${rutaRedirecicon}`]);
  }
}
