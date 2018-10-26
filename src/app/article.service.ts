import { Injectable } from '@angular/core';
import { Article } from './models/article.model';
import { Favorite } from './models/favorite.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ArticleService {
  articles: FirebaseListObservable<any[]>;
  favorites: FirebaseListObservable<any[]>;
  labors: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.articles = database.list('articles');
    this.favorites = database.list('favorites');
    this.labors = database.list('labors');
  }
  getArticles() {
    return this.articles;
  }
  getFavorites() {
    return this.favorites;
  }
  getLabors() {
    return this.labors;
  }
}
