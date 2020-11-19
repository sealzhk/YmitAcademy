import {RouterModule, Routes} from '@angular/router';
import {UserComponent} from './user/user.component';
import {GroupComponent} from './group/group.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {NgModule} from '@angular/core';
import {AdminComponent} from './admin.component';
import {UserGuard} from './guards/user.guard';
import {CanLoadGuard} from './guards/canLoad.guard';

export const AdminRoutes: Routes = [
  {path: '', component: AdminComponent, canActivate: [UserGuard], canLoad: [CanLoadGuard] },
  {path: 'user', component: UserComponent },
  {path: 'group', component: GroupComponent},
  {path: 'dashboard', component:  DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forChild(AdminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
