import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NavAdminComponent} from './navForAdmin/navAdmin.component';
import {FormsModule} from '@angular/forms';
import {UserComponent} from './user/user.component';
import {GroupComponent} from './group/group.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AdminComponent} from './admin.component';
import {AdminRoutes} from './admin-routing.module';

@NgModule({
  declarations: [
    NavAdminComponent,
    UserComponent,
    GroupComponent,
    DashboardComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forChild(AdminRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: []
})
export class AdminModule { }

