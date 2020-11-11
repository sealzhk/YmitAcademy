import {RouterModule, Routes} from '@angular/router';
import {UserComponent} from './user/user.component';
import {GroupComponent} from './group/group.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {NgModule} from '@angular/core';

export const AdminRoutes: Routes = [
  {path: 'admin', component: UserComponent },
  {path: 'user', component: UserComponent },
  {path: 'group', component: GroupComponent},
  {path: 'dashboard', component:  DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forChild(AdminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
