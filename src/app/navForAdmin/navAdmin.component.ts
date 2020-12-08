import {Component, OnInit} from '@angular/core';
import {AllService} from '../services/all.service';
import {LoggingService} from '../services/logging.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'admin-nav',
  templateUrl: './navAdmin.component.html'
})
export class NavAdminComponent implements OnInit{
  toDate: Date = new Date();
  constructor(public allServ: AllService, public logSer: LoggingService) {
  }
  ngOnInit() {
  }
}
