import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavBarComponent} from './navBar/navbar.component';
import {HomeComponent} from './home/home.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CarouselComponent} from './carousel/carousel.component';
import {CardsComponent} from './cards/cards.component';
import {InfoComponent} from './information/info.component';
import {EndComponent} from './footer/end.component';
import {ReviewComponent} from './reviews/review.component';
import {AboutComponent} from './aboutProj/about.component';
import {FormsModule} from '@angular/forms';
import {TestComponent} from './test/test.component';
import {AddBonusComponent} from './addBonus/addBonus.component';
import {bonusChildComponent} from './bonusChild/bonusChild.component';
import {foundersComponent} from './founders/founders.component';
import {CoursesComponent} from './courses/courses.component';
import {GradeConverterPipe} from './pipes/temp-convertor.pipe';
import {TestCheckComponent} from './testcheck/testcheck.component';
import {TeachersComponent} from './teachers/teachers.component';
import {LoginComponent} from './login/login.component';
import {RegistrComponent} from './registr/registr.component';
import {NewRevComponent} from './newRev/newRev.component';
import {AllRevComponent} from './allRev/allRev.component';
import {LoggingService} from './services/logging.service';
import {AllService} from './services/all.service';
import {appRoutes} from './app-routing.module';
import {UserGuard} from './guards/user.guard';
import {SaveGuard} from './guards/save.guard';
import {CanLoadGuard} from './guards/canLoad.guard';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    CarouselComponent,
    CardsComponent,
    InfoComponent,
    EndComponent,
    ReviewComponent,
    AboutComponent,
    TestComponent,
    AddBonusComponent,
    bonusChildComponent,
    foundersComponent,
    CoursesComponent,
    GradeConverterPipe,
    TestCheckComponent,
    TeachersComponent,
    LoginComponent,
    RegistrComponent,
    NewRevComponent,
    AllRevComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [
    LoggingService,
    AllService,
    UserGuard,
    SaveGuard,
    CanLoadGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
