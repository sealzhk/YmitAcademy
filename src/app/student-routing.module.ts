import {RouterModule, Routes} from '@angular/router';
import {UserGuard} from './guards/user.guard';
import {CanLoadGuard} from './guards/canLoad.guard';
import {StudentComponent} from './student.component';
import {NgModule} from '@angular/core';
import {StudentProfileComponent} from './studentProfile/studentProfile.component';
import {StudentAddComponent} from './studentAdd/studentAdd.component';

export const StudentRoute: Routes = [
  {path: '', component: StudentComponent, canActivate: [UserGuard], canLoad: [CanLoadGuard], children: [
      {path: 'addCourse', component: StudentAddComponent},
      {path: 'profile', component: StudentProfileComponent}
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(StudentRoute)],
  exports: [RouterModule]
})

export class StudentRoutingModule {}
