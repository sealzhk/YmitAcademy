import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AllService} from './services/all.service';
import {ApiService} from './services/api.service';
import {LoggingService} from './services/logging.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
})
export class StudentComponent implements OnInit {
  Courses: any = [];
  @Input() newRecord = {firstname: '', lastname: '', telNum: '', course: ''};
  studentForm: FormGroup;
  newFirstName: FormControl = new FormControl('', Validators.required);
  newLastName: FormControl = new FormControl('', Validators.required);
  newTelNum: FormControl = new FormControl('', Validators.required);
  newCourse: FormControl = new FormControl('', Validators.required);
  constructor(private router: Router, private allServ: AllService, public restApi: ApiService, private logService: LoggingService) {
  }
  loadCourses() {
    return this.restApi.getCourses().subscribe(data => this.Courses = data);
  }
  ngOnInit() {
    this.loadCourses();
    console.log('courses ' + this.Courses);
    this.studentForm = new FormGroup({
      newFirstName: this.newFirstName,
      newLastName: this.newLastName,
      newTelNum: this.newTelNum,
      newCourse: this.newCourse
    });
  }

  add(newData) {
    this.restApi.newRecord(this.newRecord).subscribe((data: {}) => {});
    alert('Мы приняли вашу заявку!');
  }

}
