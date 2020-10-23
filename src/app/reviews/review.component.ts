import { Component, EventEmitter, Output } from '@angular/core';
import {Review} from '../classes';
import {LoggingService} from '../services/logging.service';
import {AllService} from '../services/all.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html'
})
export class ReviewComponent {
  newName: string;
  newRev: string;

  reviews: Review[];
  constructor(private allService: AllService, private loggingService: LoggingService) {
    this.reviews = this.allService.getReview();
    this.loggingService.log('Reviews: ' + this.reviews.toString());
  }

  // tslint:disable-next-line:typedef
  handleButtonClick(newName, newRev) {
    this.reviews.push({name: newName, review: newRev});
  }
}
