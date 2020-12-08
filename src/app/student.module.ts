import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserGuard} from './guards/user.guard';
import {StudentComponent} from './student.component';
import {StudentRoute, StudentRoutingModule} from './student-routing.module';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    StudentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StudentRoutingModule,
    RouterModule.forChild(StudentRoute)
  ],
  providers: [UserGuard],
  exports: [],
  bootstrap: []
})

export class StudentModule {

}
