import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HeroesService} from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent{

  heroe:any ={};
  casa:string = 'DC';
  constructor( private activatedRoute:ActivatedRoute, private _heroesService: HeroesService ) {
    this.activatedRoute.params.subscribe( params => {
      this.heroe = this._heroesService.getHeroe( params['id'] );
      if (this.casa == this.heroe.casa) {
          this.casa = 'assets/img/DC.png';
      }else{
          this.casa = 'assets/img/marvel.png';
      }
    });
  }
}
