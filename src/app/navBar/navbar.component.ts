import {Component, OnInit} from '@angular/core';
import {AllService} from '../services/all.service';
import {LoggingService} from '../services/logging.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './navbar.component.html'
})
export class NavBarComponent implements OnInit{
  toDate: Date = new Date();
  isLoggedInAdmin: boolean;
  url: string;
  constructor(public userService: AllService, public loginSer: LoggingService, private route: Router) {
  }
  ngOnInit() {
    this.isLoggedInAdmin = this.userService.login;
    this.loginSer.log(' ' + this.isLoggedInAdmin);
  }

  logout() {
    this.userService.login = false;
    this.route.navigate(['/']);
  }
}
