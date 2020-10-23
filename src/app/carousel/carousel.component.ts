import { Component, Input } from '@angular/core';
import {LoggingService} from '../services/logging.service';
import {Cards} from '../classes';
import {AllService} from '../services/all.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html'
})

export class CarouselComponent {
  items: Cards[];
  constructor(private allService: AllService, private loggingService: LoggingService) {
    this.items = this.allService.getImages();
    this.loggingService.log('Carousel items: ' + this.items.toString());
  }
}
