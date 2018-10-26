import { Component, OnInit } from '@angular/core';
import { Favorite } from '../models/favorite.model';
import { ArticleService } from '../article.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  providers: [ArticleService]
})
export class FavoriteComponent implements OnInit  {
  favorites: FirebaseListObservable<any[]>;
  constructor(private articleService: ArticleService) {}

  ngOnInit(){
    this.favorites = this.articleService.getFavorites();
  }
}
