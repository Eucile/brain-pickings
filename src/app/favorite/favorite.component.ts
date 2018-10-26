import { Component, OnInit } from '@angular/core';
import { Favorite } from '../models/favorite.model';
import { ArticleService } from './article.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  provider: [ArticleService]
})
export class FavoriteComponent implements OnInit  {
  favorites: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
    ngOnInit(){
      this.favorites = this.articleService.getFavorites();
    }
  }


    //   new Favorite('https://i1.wp.com/www.brainpickings.org/wp-content/uploads/2017/10/bigwolflittlewolf00.jpg?zoom=2&fit=320%2C168&ssl=1','The Best of Brain Pickings 2018'),
    //   new Favorite('https://i1.wp.com/www.brainpickings.org/wp-content/uploads/2018/05/mayaangelou_jannalevin1.jpg?zoom=2&fit=320%2C168&ssl=1', 'A Brave and Startling Truth: Astrophysicist Janna Levin Reads Maya Angelou’s Stunning Humanist Poem That Flew to Space, Inspired by Carl Sagan'),
    //   new Favorite('https://i1.wp.com/www.brainpickings.org/wp-content/uploads/2016/06/thinslicesofanxiety0.jpg?zoom=2&fit=320%2C168&ssl=1', 'A Stoic’s Key to Peace of Mind: Seneca on the Antidote to Anxiety'),
    //   new Favorite('https://i2.wp.com/www.brainpickings.org/wp-content/uploads/2014/01/mindset.jpg?zoom=2&fit=300%2C157&ssl=1', 'Fixed vs. Growth: The Two Basic Mindsets That Shape Our Lives')
    // ];
}
