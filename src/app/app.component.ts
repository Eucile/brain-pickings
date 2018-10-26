import { Component, OnInit } from '@angular/core';
import { Article } from './models/article.model';
import { Favorite } from './models/favorite.model';
import {FavoriteComponent} from './favorite/favorite.component';
import { Labors } from './models/labors.model';
import { LaborsOComponent } from './labors/labors.component';
import { ArticleService } from './article.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ArticleService]
})
export class AppComponent implements OnInit {
  articles: Article[];
  constructor(private articleService: ArticleService) {}

  ngOnInit(){
    this.articles = this.articleService.getArticles();
  }
   // [
    //   new Article('Rebecca Solnit on Rewriting the World’s Broken Stories and the Paradigm-Shifting Power of Calling Things by Their True Names','“To name something truly is to lay bare what may be brutal or corrupt — or important or possible — and key to the work of changing the world is changing the story.”', 'by Maria Popova', '“Finding the words is another step in learning to see,” bryologist Robin Wall Kimmerer wrote in reflecting on what her Native American tradition and her training as a scientist taught her about how naming confers dignity upon life. If to name is to see and reveal — to remove the veil of blindness, willful or manipulated, and expose things as they really are — then it is in turn another step in remaking the world, another form of resistance to the damaging dominant narratives that go unquestioned. Walt Whitman knew this when he contemplated our greatest civic might: “I can conceive of no better service … than boldly exposing the weakness, liabilities...”'),
    //   new Article('TITLE 2', '"QUOTE3"', 'by author', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),
    //   new Article('TITLE 3', 'QUOTE3', 'by author', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')
    // ];
}
