import { Component } from '@angular/core';
import {LoggingService} from '../services/logging.service';
import {AllService} from '../services/all.service';
import {Courses} from '../classes';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html'
})
export class CoursesComponent {
  num: any;

  courses: Courses[];
  constructor(private allService: AllService, private loggingService: LoggingService) {
    this.courses = this.allService.getCourses();
    this.loggingService.log('Courses: ' + this.courses.toString());
  }
}
