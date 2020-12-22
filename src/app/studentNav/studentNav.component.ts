import {Component, OnInit} from '@angular/core';
import {AllService} from '../services/all.service';
import {LoggingService} from '../services/logging.service';
import {Router} from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'student-nav',
  templateUrl: './studentNav.component.html'
})
export class StudentNavComponent implements OnInit{
  toDate: Date = new Date();
  isLoggedInAdmin: boolean;
  constructor(public userService: AllService, public logSer: LoggingService, private route: Router) {
  }
  ngOnInit() {
    this.isLoggedInAdmin = this.userService.login;
    this.logSer.log(' ' + this.isLoggedInAdmin);
  }
  logout() {
    this.userService.login = false;
    this.route.navigate(['/']);
  }
}
