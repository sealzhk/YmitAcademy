import {Component, OnInit} from '@angular/core';
import {LoggingService} from '../services/logging.service';
import {AllService} from '../services/all.service';
import {Courses} from '../classes';
import {ApiService} from '../services/api.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html'
})
export class CoursesComponent implements OnInit{
  num: any;
  Courses: any = [];
  courses: Courses[];
  constructor(private allService: AllService, private loggingService: LoggingService, public restApi: ApiService) {
    this.courses = this.allService.getCourses();
    this.loggingService.log('Courses: ' + this.courses.toString());
  }
  loadCourses() {
    return this.restApi.getCourses().subscribe(data => this.Courses = data);
  }
  ngOnInit() {
    this.loadCourses();
  }
}
