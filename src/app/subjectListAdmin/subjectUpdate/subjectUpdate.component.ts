import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AllService} from '../../services/all.service';
import {ApiService} from '../../services/api.service';
import {LoggingService} from '../../services/logging.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'admin-subjectupdate',
  templateUrl: './subjectUpdate.component.html'
})

export class SubjectUpdateComponent  implements OnInit{
  id = this.actRoute.snapshot.params.id;
  courseData: any = {};
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
  constructor(private router: Router, private allServ: AllService, public restApi: ApiService, private logService: LoggingService, public actRoute: ActivatedRoute) {
  }
  // tslint:disable-next-line:typedef
  create(){
    this.router.navigate(['subjectCreate']);
  }
  update() {
    this.restApi.updateCourse(this.id, this.courseData).subscribe(data => {
      this.router.navigate(['/subjectslist']);
    })
  }


  ngOnInit() {
    this.allServ.first = false;
    this.restApi.getCourse(this.id).subscribe(data =>this.courseData = data);
  }
}
