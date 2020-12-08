import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {AllService} from '../services/all.service';
import {ApiService} from '../services/api.service';
import {LoggingService} from '../services/logging.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'admin-group',
  templateUrl: './reviewsListAdmin.component.html'
})
export class ReviewsListAdminComponent {
  Reviews: any = [];
  constructor(private router: Router, private allServ: AllService, public restApi: ApiService, private logService: LoggingService) {
  }
  loadRev() {
    return this.restApi.getReviews().subscribe(data => this.Reviews = data);
  }

  // tslint:disable-next-line:typedef
  delete(id) {
    if (window.confirm('Вы уверены, что хотите удалить этот отзыв?')) {
      this.restApi.deleteReview(id).subscribe(data => this.loadRev());
      this.logService.log('review deleted');
    }
  }

  ngOnInit() {
    this.loadRev();
  }
}
