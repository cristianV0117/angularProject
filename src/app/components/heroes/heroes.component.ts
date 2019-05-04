import { Component, OnInit } from '@angular/core';
import {HeroesService, Heroe} from '../../servicios/heroes.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
heroes:Heroe[] = [];
  constructor( private _heroesService:HeroesService) {
      console.log("constructor");
   }

  ngOnInit() {
    this.heroes = this._heroesService.getHerores();
    //console.log(this.heroes);
  }

}
