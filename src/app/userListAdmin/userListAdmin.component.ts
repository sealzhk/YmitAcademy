import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AllService} from '../services/all.service';
import {ApiService} from '../services/api.service';
import {LoggingService} from '../services/logging.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'admin-user',
  templateUrl: './userListAdmin.component.html'
})
export class UserListAdminComponent implements OnInit{
  Users: any = [];
  constructor(private router: Router, private allServ: AllService, public restApi: ApiService, private logService: LoggingService) {
  }
  loadUsers() {
    return this.restApi.getUsers().subscribe(data => this.Users = data);
  }

  // tslint:disable-next-line:typedef
  delete(id) {
    if (window.confirm('Вы уверены, что хотите удалить пользователя?')) {
      this.restApi.deleteUser(id).subscribe(data => this.loadUsers());
      this.logService.log('user deleted');
    }
  }

  ngOnInit() {
    this.allServ.first = false;
    this.loadUsers();
  }
}
