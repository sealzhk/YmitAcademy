import {Component, Input} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AllService} from '../../services/all.service';
import {ApiService} from '../../services/api.service';
import {LoggingService} from '../../services/logging.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'admin-subjectcreate',
  templateUrl: './subjectCreate.component.html'
})

export class SubjectCreateComponent {
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
  // tslint:disable-next-line:typedef
  create(){
    this.router.navigate(['subjectCreate']);
  }
  addReview(dataReview) {
    this.restApi.newCourse(this.newSubject).subscribe((data: {}) => {
      this.router.navigate(['subjectslist']);
    });
  }
}
