import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';

import { HomeComponent } from './home/home.component';
import { NgbPaginationModule, NgbAlertModule, NgbDropdownModule, NgbModule, NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
// For MDB Angular Free
import { CarouselModule, WavesModule, CardsModule, ButtonsModule } from 'angular-bootstrap-md';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { ProfileComponent } from './auth/profile/profile.component';
import { LifediNavbarComponent } from './lifediComponent/lifedi-navbar/lifedi-navbar.component';
import { CoursesComponent } from './courses/courses.component';
import { ActivitiesComponent } from './activities/activities.component';
import { MenuComponent } from './admin/menu/menu.component';
import { ActivityScheduleComponent } from './admin/activity-schedule/activity-schedule.component';
import { UserManagementComponent } from './admin/user-management/user-management.component';
import { MycourseComponent } from './courses/mycourse/mycourse.component';
import { TopicComponent } from './courses/topic/topic.component';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FlatpickrModule } from 'angularx-flatpickr';
import { FormsModule } from '@angular/forms';


const MaterialComponent = [
  MatInputModule,
  MatButtonModule,
  MatGridListModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  CarouselModule,
  WavesModule,
  CardsModule,
  ButtonsModule,
];
const NGBComponent = [
  NgbModule
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    ProfileComponent,
    LifediNavbarComponent,
    CoursesComponent,
    MycourseComponent,
    TopicComponent,
    ActivitiesComponent,
    MenuComponent,
    ActivityScheduleComponent,
    UserManagementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SocialLoginModule,
    HttpClientModule,
    FormsModule,
    MaterialComponent,
    NGBComponent,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    FlatpickrModule.forRoot(),
  ],
  providers: [{
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: true,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            '624796833023-clhjgupm0pu6vgga7k5i5bsfp6qp6egh.apps.googleusercontent.com'
          ),
        },
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider('1489114291267451'),
        }
      ],
    } as SocialAuthServiceConfig,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
