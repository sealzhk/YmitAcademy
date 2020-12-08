import {RouterModule, Routes} from '@angular/router';
import {UserListAdminComponent} from './userListAdmin/userListAdmin.component';
import {ReviewsListAdminComponent} from './reviewsListAdmin/reviewsListAdmin.component';
import {NgModule} from '@angular/core';
import {AdminComponent} from './admin.component';
import {UserGuard} from './guards/user.guard';
import {CanLoadGuard} from './guards/canLoad.guard';
import {SubjectListAdminComponent} from './subjectListAdmin/subjectListAdmin.component';
import {SubjectCreateComponent} from './subjectListAdmin/subjectCreate/subjectCreate.component';
import {SubjectUpdateComponent} from './subjectListAdmin/subjectUpdate/subjectUpdate.component';

export const AdminRoutes: Routes = [
  {path: '', component: AdminComponent, canActivate: [UserGuard], canLoad: [CanLoadGuard], children: [
      {path: 'userslist', component: UserListAdminComponent},
      {path: 'reviewslist', component: ReviewsListAdminComponent},
      {path: 'subjectslist', component: SubjectListAdminComponent},
      {path: 'subjectCreate', component: SubjectCreateComponent},
      {path: 'subjectUpdate/:id', component: SubjectUpdateComponent}
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(AdminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
