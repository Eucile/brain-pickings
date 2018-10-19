import { Component, OnInit } from '@angular/core';
import { Favorite } from '../models/favorite.model';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent  {
  favorites: Favorite[] = [
      new Favorite('string','The Best of Brain Pickings 2018'),
      new Favorite('TITLE 2', '"QUOTE3"'),
      new Favorite('TITLE 3', '"QUOTE3"')
    ];
}
