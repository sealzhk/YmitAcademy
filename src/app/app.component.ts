import {Component, OnInit} from '@angular/core';
import {AllService} from './services/all.service';
import {LoggingService} from './services/logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'YmitAcademy';
  constructor(public allService: AllService, public logser: LoggingService) {
  }
  ngOnInit() {
  }
}
