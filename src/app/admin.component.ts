import {Component, OnInit} from '@angular/core';
import {AllService} from './services/all.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
})
export class AdminComponent implements OnInit{
  title = 'YmitAcademy';
  first: boolean;
  constructor(private userService: AllService) { }
  ngOnInit() {
    this.first = this.userService.first;
  }
}
