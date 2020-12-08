import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ComponentCanDeactivate} from '../guards/save.guard';
import {Observable} from 'rxjs';
import {ApiService} from '../services/api.service';
import {Router} from '@angular/router';
import {LoggingService} from '../services/logging.service';

@Component({
  selector: 'app-registr',
  templateUrl: './registr.component.html'
})
export class RegistrComponent implements OnInit {
  @Input() newUser = {firstname: '', lastname: '', email: '', password: '', role: 'student'};
  roleOfUser = 'student';
  user: any = {};
  regirstrForm: FormGroup;
  newFirstName: FormControl = new FormControl('', Validators.required);
  newLastName: FormControl = new FormControl('', Validators.required);
  newEmail: FormControl = new FormControl('', [Validators.required, Validators.email]);
  newPassword: FormControl = new FormControl('', [Validators.required, Validators.minLength(8)]);
  newPasswordAgain: FormControl = new FormControl('', [Validators.required, Validators.minLength(8)]);

  ngOnInit() {
    this.regirstrForm = new FormGroup({
      newFirstName: this.newFirstName,
      newLastName: this.newLastName,
      newEmail: this.newEmail,
      newPassword: this.newPassword,
      newPasswordAgain: this.newPasswordAgain
    });
  }

  constructor(public restApi: ApiService, public router: Router, public logging: LoggingService) {
    this.logging.log('New userListAdmin: ' + this.newUser.email);
  }

  addUser(dataReview) {
    this.restApi.newUser(this.newUser).subscribe((data: {}) => {
      this.router.navigate(['/']);
    });
  }
}
