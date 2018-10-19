import { Component } from '@angular/core';
import { Labors } from '../models/labors.model';

@Component({
  selector: 'app-labors',
  templateUrl: './labors.component.html',
  styleUrls: ['./labors.component.css']
})
export class LaborsOComponent {

  labors: Labors[] = [
      new Labors('https://i2.wp.com/www.brainpickings.org/wp-content/uploads/2013/11/sleepproductivitywriters_500_1.jpg?zoom=2&w=200&ssl=1',"'Famous Writers' Sleep Habits vs. Literary Productivity, Visualized'"),
      new Labors('https://i0.wp.com/www.brainpickings.org/wp-content/uploads/2014/02/sontaglove_unlimited.jpg?zoom=2&w=200&ssl=1', 'Susan Sontag on Love: Illustrated Diary Excerpts'),
      new Labors('https://i2.wp.com/www.brainpickings.org/wp-content/uploads/2014/06/wendycamus.jpg?zoom=2&w=200&ssl=1', 'Albert Camus on Happiness and Love, Illustrated by Wendy MacNaughton'),
      new Labors('https://i1.wp.com/www.brainpickings.org/wp-content/uploads/2015/08/oliversacks_debbiemillman.jpg?zoom=2&w=200&ssl=1', 'The Silent Music of the Mind: Remembering Oliver Sacks')
    ];
}
