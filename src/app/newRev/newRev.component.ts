import {Component, OnInit, Input} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../services/api.service';
import {Router} from '@angular/router';
import {LoggingService} from '../services/logging.service';

@Component({
  selector: 'app-newrev',
  templateUrl: './newRev.component.html'
})
export class NewRevComponent implements OnInit{
  @Input() newReview = {name: '', rev: ''};
  newName: FormControl = new FormControl('', Validators.required);
  newRev: FormControl = new FormControl('', Validators.required);
  revForm = new FormGroup({
    newName: this.newName,
    newRev: this.newRev
  });
  constructor(public restApi: ApiService, public router: Router, public logging: LoggingService) {
    this.logging.log('New review: ' + this.newReview.rev);
  }
  addReview(dataReview) {
    this.restApi.newReview(this.newReview).subscribe((data: {}) => {
      this.router.navigate(['/reviews'])
    })
  }
  ngOnInit() {
  }
}
