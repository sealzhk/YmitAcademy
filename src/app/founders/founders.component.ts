import {Component} from '@angular/core';
import {Founders} from '../classes';
import {LoggingService} from '../services/logging.service';
import {AllService} from '../services/all.service';

@Component({
  selector: 'app-founders',
  templateUrl: './founders.component.html'
})
// tslint:disable-next-line:class-name
export class foundersComponent {
  foundList: Founders[];
  constructor(private allService: AllService, private loggingService: LoggingService) {
    this.foundList = this.allService.getFounders();
    this.loggingService.log('Founders: ' + this.foundList.toString());
  }
}
