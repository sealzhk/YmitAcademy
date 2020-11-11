import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'admin-nav',
  templateUrl: './navAdmin.component.html'
})
export class NavAdminComponent {
  toDate: Date = new Date();
}
