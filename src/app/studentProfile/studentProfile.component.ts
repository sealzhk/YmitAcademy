import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AllService} from '../services/all.service';
import {ApiService} from '../services/api.service';
import {LoggingService} from '../services/logging.service';

@Component({
  selector: 'app-studentprofile',
  templateUrl: './studentProfile.component.html',
})
export class StudentProfileComponent implements OnInit {
  firstname: string;
  lastname: string;
  email: string;
  school: string;
  constructor(private router: Router, private allServ: AllService, public restApi: ApiService, private logService: LoggingService) {
  }

  ngOnInit() {
    this.firstname = this.allServ.firstname;
    this.lastname = this.allServ.lastname;
    this.school = this.allServ.school;
    this.email = this.allServ.email;
  }


}
