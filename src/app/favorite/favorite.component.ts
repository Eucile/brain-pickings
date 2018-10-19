import { Component, OnInit } from '@angular/core';
import { Favorite } from '../models/favorite.model';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent  {
  favorites: Favorite[] = [
      new Favorite('<img src="https://i1.wp.com/www.brainpickings.org/wp-content/uploads/2017/10/bigwolflittlewolf00.jpg?zoom=2&fit=320%2C168&ssl=1">','The Best of Brain Pickings 2018'),
      new Favorite('TITLE 2', '"QUOTE3"'),
      new Favorite('TITLE 3', '"QUOTE3"')
    ];
}
