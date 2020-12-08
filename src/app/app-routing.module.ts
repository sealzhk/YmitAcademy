import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './aboutProj/about.component';
import {ReviewComponent} from './reviews/review.component';
import {TestComponent} from './test/test.component';
import {CoursesComponent} from './courses/courses.component';
import {TeachersComponent} from './teachers/teachers.component';
import {LoginComponent} from './login/login.component';
import {RegistrComponent} from './registr/registr.component';
import {UserGuard} from './guards/user.guard';
import {SaveGuard} from './guards/save.guard';
import {CanLoadGuard} from './guards/canLoad.guard';


export const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'reviews', component: ReviewComponent, canDeactivate: [SaveGuard]},
  {path: 'test', component: TestComponent},
  {path: 'courses', component: CoursesComponent},
  {path: 'teachers', component: TeachersComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registr', component: RegistrComponent},
  {path: 'admin', loadChildren: () => import('./admin.module').then(m => m.AdminModule), canActivate: [UserGuard], canLoad: [CanLoadGuard]},
  // tslint:disable-next-line:max-line-length
  {path: 'student', loadChildren: () => import('./student.module').then(m => m.StudentModule), canActivate: [UserGuard], canLoad: [CanLoadGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
