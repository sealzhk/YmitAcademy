import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ComponentCanDeactivate} from '../guards/save.guard';
import {Observable} from 'rxjs';
import {ApiService} from '../services/api.service';
import {Router} from '@angular/router';
import {LoggingService} from '../services/logging.service';
import {AllService} from '../services/all.service';

@Component({
  selector: 'app-registr',
  templateUrl: './registr.component.html'
})
export class RegistrComponent implements OnInit {
  @Input() newUser = {firstname: '', lastname: '', school: '', email: '', password: '', role: 'student'};
  roleOfUser = 'student';
  user: any = {};
  regirstrForm: FormGroup;
  newFirstName: FormControl = new FormControl('', Validators.required);
  newLastName: FormControl = new FormControl('', Validators.required);
  newSchool: FormControl = new FormControl('', Validators.required);
  newEmail: FormControl = new FormControl('', [Validators.required, Validators.email]);
  newPassword: FormControl = new FormControl('', [Validators.required, Validators.minLength(8)]);
  newPasswordAgain: FormControl = new FormControl('', [Validators.required, Validators.minLength(8)]);

  ngOnInit() {
    this.regirstrForm = new FormGroup({
      newFirstName: this.newFirstName,
      newLastName: this.newLastName,
      newSchool: this.newSchool,
      newEmail: this.newEmail,
      newPassword: this.newPassword,
      newPasswordAgain: this.newPasswordAgain
    });
  }

  constructor(public restApi: ApiService, public router: Router, public logging: LoggingService, private userService: AllService) {
    this.logging.log('New userListAdmin: ' + this.newUser.email);
  }

  addUser(dataReview) {
    this.restApi.newUser(this.newUser).subscribe((data: {}) => {
      this.userService.login = true;
      this.router.navigate(['/student']);
    });
  }
}
