import {Component, OnInit} from '@angular/core';
import {LoggingService} from '../services/logging.service';
import {Cards} from '../classes';
import {AllService} from '../services/all.service';
import {ApiService} from '../services/api.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html'
})
export class CardsComponent implements OnInit{
  cardsList: Cards[];
  list: any = [];
  constructor(private allService: AllService, private loggingService: LoggingService, private api: ApiService) {
    this.cardsList = this.allService.getCards();
    this.loggingService.log('Cards: ' + this.cardsList.toString());
  }
  load() {
    return this.api.getImage().subscribe(data => this.list = data);
  }
  ngOnInit() {
    this.load();
  }
}
