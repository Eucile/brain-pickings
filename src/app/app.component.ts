import { Component, OnInit } from '@angular/core';
import { Article } from './models/article.model';
import { Favorite } from './models/favorite.model';
import {FavoriteComponent} from './favorite/favorite.component';
import { Labors } from './models/labors.model';
import { LaborsOComponent } from './labors/labors.component';
import { ArticleService } from './article.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ArticleService]
})
export class AppComponent implements OnInit {
  articles: FirebaseListObservable<any[]>;
  constructor(private articleService: ArticleService) {}

  ngOnInit(){
    this.articles = this.articleService.getArticles();
  }
}
