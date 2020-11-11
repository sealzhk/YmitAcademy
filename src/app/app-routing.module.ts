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


export const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'reviews', component: ReviewComponent},
  {path: 'test', component: TestComponent},
  {path: 'courses', component: CoursesComponent},
  {path: 'teachers', component: TeachersComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registr', component: RegistrComponent},
  {path: 'admin', loadChildren: () => import('./admin.module').then(m => m.AdminModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
