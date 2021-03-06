import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserGuard} from './guards/user.guard';
import {StudentComponent} from './student.component';
import {StudentRoute, StudentRoutingModule} from './student-routing.module';
import {RouterModule} from '@angular/router';
import {StudentNavComponent} from './studentNav/studentNav.component';
import {StudentProfileComponent} from './studentProfile/studentProfile.component';
import {StudentAddComponent} from './studentAdd/studentAdd.component';


@NgModule({
  declarations: [
    StudentComponent,
    StudentNavComponent,
    StudentProfileComponent,
    StudentAddComponent
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
