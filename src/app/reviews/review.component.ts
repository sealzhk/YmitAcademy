import {Component, Input, OnInit} from '@angular/core';
import {LoggingService} from '../services/logging.service';
import {ApiService} from '../services/api.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ComponentCanDeactivate} from '../guards/save.guard';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html'
})
export class ReviewComponent implements OnInit, ComponentCanDeactivate {
  Reviews: any = [];
  @Input() newReview = {name: '', rev: ''};
  newName: FormControl = new FormControl('', Validators.required);
  newRev: FormControl = new FormControl('', Validators.required);
  revForm = new FormGroup({
    newName: this.newName,
    newRev: this.newRev
  });
  constructor(private loggingService: LoggingService, public restApi: ApiService) {
    this.loggingService.log('Reviews: ' + this.Reviews.toString());
    this.loggingService.log('New review: ' + this.newReview.rev);
  }
  ngOnInit() {
    this.loadReviews();
  }
  addReview(dataReview) {
    this.restApi.newReview(this.newReview).subscribe((data: {}) => {});
    window.location.reload();
  }
  loadReviews() {
    return this.restApi.getReviews().subscribe(data => this.Reviews = data);
  }
  canDeactivate(): boolean | Observable<boolean>{
    if (this.revForm.valid || this.newName.valid || this.newRev.valid) {
      return confirm('Вы не сохранили данные. Вы уверены, что хотите покинуть страницу?');
    }
    else {
      return true;
    }
  }
}
