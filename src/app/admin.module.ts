import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserListAdminComponent} from './userListAdmin/userListAdmin.component';
import {ReviewsListAdminComponent} from './reviewsListAdmin/reviewsListAdmin.component';
import {SubjectListAdminComponent} from './subjectListAdmin/subjectListAdmin.component';
import {AdminComponent} from './admin.component';
import {AdminRoutes, AdminRoutingModule} from './admin-routing.module';
import {CommonModule} from '@angular/common';
import {UserGuard} from './guards/user.guard';
import {NavAdminComponent} from './navForAdmin/navAdmin.component';
import {SubjectCreateComponent} from './subjectListAdmin/subjectCreate/subjectCreate.component';
import {SubjectUpdateComponent} from './subjectListAdmin/subjectUpdate/subjectUpdate.component';
import {AppModule} from './app.module';

@NgModule({
  declarations: [
    UserListAdminComponent,
    ReviewsListAdminComponent,
    SubjectListAdminComponent,
    AdminComponent,
    NavAdminComponent,
    SubjectCreateComponent,
    SubjectUpdateComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(AdminRoutes),
        FormsModule,
        AdminRoutingModule,
        ReactiveFormsModule
    ],
  providers: [UserGuard],
  exports: [
    NavAdminComponent
  ],
  bootstrap: []
})
export class AdminModule { }

