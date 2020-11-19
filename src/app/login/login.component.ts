import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AllService} from '../services/all.service';
import {LoggingService} from '../services/logging.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  email: string;
  password: string;
  constructor(private router: Router,
              private userService: AllService, private loggingService: LoggingService) {
  }

  // tslint:disable-next-line:typedef
  authorization(email, password) {
    this.email = email;
    this.password = password;
    // tslint:disable-next-line:triple-equals
    if (this.email == 'aluazhakievaaa@gmail.com') {
      if (this.password == 'qweasdzxc') {
        this.userService.isLoggedIn = true;
        this.loggingService.log('Founders: ' + this.userService.isLoggedIn);
        this.router.navigate(['admin']);
      }
    }
  }

}
