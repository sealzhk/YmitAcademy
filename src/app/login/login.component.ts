import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AllService} from '../services/all.service';
import {LoggingService} from '../services/logging.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  Users: any = [];
  saved = true;
  user: any;
  email: string;
  password: string;
  constructor(private router: Router,
              private userService: AllService, private loggingService: LoggingService, public restApi: ApiService) {
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    });
    this.loadUsers();
    console.log(this.Users);
    }

  loadUsers() {
    return this.restApi.getUsers().subscribe(data => this.Users = data);
  }

  // tslint:disable-next-line:typedef
  authorization(value: any) {
    if (this.Users.find(x => x.email === this.email)) {
      this.user = this.Users.find(x => x.email === this.email);
      if (this.user.password === this.password) {
        this.userService.firstname = this.user.firstname;
        this.userService.lastname = this.user.lastname;
        this.userService.school = this.user.school;
        this.userService.email = this.user.email;
        console.log('user: ' + this.userService.firstname);
        if (this.user.role === 'admin') {
          this.userService.login = true;
          this.router.navigate(['userslist']);
        }
        else {
          this.userService.login = true;
          console.log('its worked' + this.userService.login);
          this.router.navigate(['addCourse']);
        }
      }
    else {
      alert('Неправильные данные, попробуйте снова');
      this.router.navigate(['/login']);
      }
    }
  }


}
