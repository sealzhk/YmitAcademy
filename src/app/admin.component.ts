import { Component } from '@angular/core';
import {AllService} from './services/all.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
})
export class AdminComponent {
  title = 'YmitAcademy';
  constructor(private userService: AllService) { }
}
