import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AllService} from '../services/all.service';
import {ApiService} from '../services/api.service';
import {LoggingService} from '../services/logging.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'admin-dash',
  templateUrl: './subjectListAdmin.component.html'
})
export class SubjectListAdminComponent implements OnInit{
  Courses: any = [];
  @Input() newSubject = {sub: '', image: '', header: '', descr: '', color: ''};
  newSub: FormControl = new FormControl('', Validators.required);
  newImg: FormControl = new FormControl('', Validators.required);
  newHeader: FormControl = new FormControl('', Validators.required);
  newColor: FormControl = new FormControl('', Validators.required);
  newDescr: FormControl = new FormControl('', Validators.required);
  subForm = new FormGroup({
    newSub: this.newSub,
    newImg: this.newImg,
    newHeader: this.newHeader,
    newColor: this.newColor,
    newDescr: this.newDescr
  });
  constructor(private router: Router, private allServ: AllService, public restApi: ApiService, private logService: LoggingService) {
  }
  loadCourses() {
    return this.restApi.getCourses().subscribe(data => this.Courses = data);
  }
  // tslint:disable-next-line:typedef
  create(){
    this.router.navigate(['subjectCreate']);
  }
  ngOnInit() {
    this.allServ.first = false;
    this.loadCourses();
  }
  delete(id) {
    if (window.confirm('Вы уверены, что хотите удалить этот курс?')) {
      this.restApi.deleteCourse(id).subscribe(data => this.loadCourses());
      this.logService.log('course deleted');
    }
  }
}
