import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent{
  mostrar:boolean = true;
  mensaje:any = {
    mensaje:'mensaje de cualquiera',
    autor:'Cristian Vasquez'
  };

  personajes:string[] = ['personaje1','personaje2','personaje3'];
}
