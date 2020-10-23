import {Component} from '@angular/core';
import {Images} from '../classes';
import {AllService} from '../services/all.service';
import {LoggingService} from '../services/logging.service';

@Component({
  selector: 'app-teach',
  templateUrl: './teachers.component.html'
})
export class TeachersComponent {
  teachers: Images[];
  constructor(private allService: AllService, private loggingService: LoggingService) {
    this.teachers = this.allService.getTeachers();
    this.loggingService.log('Teachers: ' + this.teachers.toString());
  }

}
