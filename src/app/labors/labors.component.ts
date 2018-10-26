import { Component, OnInit } from '@angular/core';
import { Labors } from '../models/labors.model';
import { ArticleService } from '../article.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-labors',
  templateUrl: './labors.component.html',
  styleUrls: ['./labors.component.css'],
  providers: [ArticleService]
})
export class LaborsOComponent implements OnInit {
  labors: FirebaseListObservable<any[]>;
  constructor(private articleService: ArticleService) {}

  ngOnInit(){
    this.labors = this.articleService.getLabors();
  }
}
