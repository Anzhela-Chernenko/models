import {BrowserModule, DomSanitizer} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainPageComponent } from './main-page/main-page.component';
import { LecturesComponent } from './lectures/lectures.component';
import { PracticalComponent } from './practical/practical.component';
import { TestworkComponent } from './testwork/testwork.component';
import { QuizComponent } from './quiz/quiz.component';
import {
  MatButtonModule,
  MatCardModule, MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatListModule, MatPaginatorModule,
  MatSidenavModule, MatTableModule,
  MatToolbarModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import {PdfViewerModule} from 'ng2-pdf-viewer';
import {HttpClientModule} from '@angular/common/http';
import { DatepickerComponent } from './datepicker/datepicker.component';
import {FileUploadModule} from 'ng2-file-upload';
import { AdminadminComponent } from './adminadmin/adminadmin.component';
import { SendFileFromStudentComponent } from './send-file-from-student/send-file-from-student.component';
import { StudentRatingComponent } from './student-rating/student-rating.component';
import {UserService} from './user.service';
import {AdminService} from './admin.service';
import { ShowStudentRatingComponent } from './show-student-rating/show-student-rating.component';
import { LectureFirstComponent } from './lecture-first/lecture-first.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { LectureSecondComponent } from './lecture-second/lecture-second.component';
import { LectureThirdComponent } from './lecture-third/lecture-third.component';
import { LectureFourthComponent } from './lecture-fourth/lecture-fourth.component';
import { TestsLecFComponent } from './tests-lec-f/tests-lec-f.component';
import { PracticeFirstComponent } from './practice-first/practice-first.component';
import { SendPracticeFirstComponent } from './send-practice-first/send-practice-first.component';
import {MatVideoModule} from 'mat-video';
import { PracticeSecondComponent } from './practice-second/practice-second.component';
import { PracticeThirdComponent } from './practice-third/practice-third.component';
import { PracticeFourthComponent } from './practice-fourth/practice-fourth.component';
import { StudentRatingPracticeComponent } from './student-rating-practice/student-rating-practice.component';
import { RatingComponent } from './rating/rating.component';
import { StudentRatingPracticeSecondComponent } from './student-rating-practice-second/student-rating-practice-second.component';
import { StudentRatingPracticeThirdComponent } from './student-rating-practice-third/student-rating-practice-third.component';
import { StudentRatingPracticeFourthComponent } from './student-rating-practice-fourth/student-rating-practice-fourth.component';
import { AdmPracticeComponent } from './adm-practice/adm-practice.component';
import { AdmTestsComponent } from './adm-tests/adm-tests.component';
import { AdmPFComponent } from './adm-p-f/adm-p-f.component';
import { RatingTestFirstComponent } from './rating-test-first/rating-test-first.component';
import { PracticeWorkComponent } from './practice-work/practice-work.component';
import { AdmPracticeWork1Component } from './adm-practice-work1/adm-practice-work1.component';
import { CheckPractice1Component } from './check-practice1/check-practice1.component';
import { ShowStudentRating2Component } from './show-student-rating2/show-student-rating2.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    MainPageComponent,
    LecturesComponent,
    PracticalComponent,
    TestworkComponent,
    QuizComponent,
    AdminUsersComponent,
    DatepickerComponent,
    AdminadminComponent,
    SendFileFromStudentComponent,
    StudentRatingComponent,
    ShowStudentRatingComponent,
    LectureFirstComponent,
    LectureSecondComponent,
    LectureThirdComponent,
    LectureFourthComponent,
    TestsLecFComponent,
    PracticeFirstComponent,
    SendPracticeFirstComponent,
    PracticeSecondComponent,
    PracticeThirdComponent,
    PracticeFourthComponent,
    StudentRatingPracticeComponent,
    RatingComponent,
    StudentRatingPracticeSecondComponent,
    StudentRatingPracticeThirdComponent,
    StudentRatingPracticeFourthComponent,
    AdmPracticeComponent,
    AdmTestsComponent,
    AdmPFComponent,
    RatingTestFirstComponent,
    PracticeWorkComponent,
    AdmPracticeWork1Component,
    CheckPractice1Component,
    ShowStudentRating2Component,


    ],
  imports: [

    BrowserModule,
    NgxExtendedPdfViewerModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    FileUploadModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatSidenavModule,
    MatListModule,
    HttpClientModule,
    PdfViewerModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatVideoModule,

    RouterModule.forRoot([
        {path: '', component: LoginComponent},
        {path: 'register', component: RegisterComponent},
        {path: 'main', component: MainPageComponent},
        {path: 'lectures', component: LecturesComponent},
        {path: 'practical', component: PracticalComponent},
        {path: 'quiz', component: QuizComponent},
        {path: 'testwork', component: TestworkComponent},
        {path: 'admin-users', component: AdminUsersComponent},
        {path: 'users', component: AdminUsersComponent},
        {path: 'adminadmin', component: AdminadminComponent},
        {path: 'send-file-from-student', component: SendFileFromStudentComponent},
        {path: 'student-rating', component: StudentRatingComponent},
        {path: 'show-student-rating', component: ShowStudentRatingComponent},
        {path: 'lecture-first', component: LectureFirstComponent},
        {path: 'lecture-second', component: LectureSecondComponent},
        {path: 'lecture-third', component: LectureThirdComponent},
        {path: 'lecture-fourth', component: LectureFourthComponent},
        {path: 'tests-lec-f', component: TestsLecFComponent},
        {path: 'practice-first', component: PracticeFirstComponent},
        {path: 'practice-second', component: PracticeSecondComponent},
        {path: 'practice-third', component: PracticeThirdComponent},
        {path: 'practice-fourth', component: PracticeFourthComponent},
        {path: 'rating', component: RatingComponent},
        {path: 'student-rating-practice', component: StudentRatingPracticeComponent},
      {path: 'student-rating-practice-second', component: StudentRatingPracticeSecondComponent},
      {path: 'student-rating-practice-third', component: StudentRatingPracticeThirdComponent},
      {path: 'student-rating-practice-fourth', component: StudentRatingPracticeFourthComponent},
      {path: 'adm-practice', component: AdmPracticeComponent},
      {path: 'adm-tests', component: AdmTestsComponent},
      {path: 'adm-p-f', component: AdmPFComponent},
      {path: 'rating-test-first', component: RatingTestFirstComponent},
      {path: 'practice-work', component: PracticeWorkComponent},
      {path: 'check-practice1', component: CheckPractice1Component},
      {path: 'show-student-rating2', component: ShowStudentRating2Component},

        ]),


  ],
  providers: [UserService, LoginComponent, AdminService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
