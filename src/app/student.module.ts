import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserGuard} from './guards/user.guard';
import {StudentComponent} from './student.component';
import {StudentRoute, StudentRoutingModule} from './student-routing.module';
import {RouterModule} from '@angular/router';
import {AppModule} from './app.module';
import {StudentNavComponent} from './studentNav/studentNav.component';

@NgModule({
  declarations: [
    StudentComponent,
    StudentNavComponent
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
