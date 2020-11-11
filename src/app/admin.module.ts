import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NavAdminComponent} from './navForAdmin/navAdmin.component';
import {FormsModule} from '@angular/forms';
import {UserComponent} from './user/user.component';
import {GroupComponent} from './group/group.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AdminComponent} from './admin.component';
import {AdminRoutes, AdminRoutingModule} from './admin-routing.module';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    NavAdminComponent,
    UserComponent,
    GroupComponent,
    DashboardComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AdminRoutes),
    FormsModule,
    AdminRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class AdminModule { }

