import {Component} from '@angular/core';
import {LoggingService} from '../services/logging.service';
import {Cards} from '../classes';
import {AllService} from '../services/all.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html'
})
export class CardsComponent {
  cardsList: Cards[];
  constructor(private allService: AllService, private loggingService: LoggingService) {
    this.cardsList = this.allService.getCards();
    this.loggingService.log('Cards: ' + this.cardsList.toString());
  }
}
