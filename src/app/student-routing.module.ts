import {RouterModule, Routes} from '@angular/router';
import {UserGuard} from './guards/user.guard';
import {CanLoadGuard} from './guards/canLoad.guard';
import {StudentComponent} from './student.component';
import {NgModule} from '@angular/core';

export const StudentRoute: Routes = [
  {path: '', component: StudentComponent, canActivate: [UserGuard], canLoad: [CanLoadGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(StudentRoute)],
  exports: [RouterModule]
})

export class StudentRoutingModule {}
