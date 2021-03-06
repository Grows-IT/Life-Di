import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ProfileComponent } from './auth/profile/profile.component';
import { CoursesComponent } from './courses/courses.component';
import { MycourseComponent } from './courses/mycourse/mycourse.component';
import { TopicComponent } from './courses/topic/topic.component';
import { ActivitiesComponent } from './activities/activities.component';
import { MenuComponent } from './admin/menu/menu.component';
import { ActivityScheduleComponent } from './admin/activity-schedule/activity-schedule.component';
import { UserManagementComponent } from './admin/user-management/user-management.component';
import { JournalsComponent } from './journals/journals.component';
import { JournalComponent } from './journals/journal/journal.component';
import { NewsComponent } from './news/news.component';
import { CoursesManagementComponent } from './admin/courses-management/courses-management.component';
import { JournalsManagementComponent } from './admin/journals-management/journals-management.component';
import { WebboardsManagementComponent } from './admin/webboards-management/webboards-management.component';
import { WebboardsComponent } from './webboards/webboards.component';
import { ResearchComponent } from './admin/research/research.component';
import { SystemReportComponent } from './admin/system-report/system-report.component';
import { TrackingComponent } from './admin/tracking/tracking.component';
import { CartComponent } from './cart/cart.component';
import { WebboardComponent } from './webboards/webboard/webboard.component';
import { LessonsManagementComponent } from './admin/courses-management/lessons-management/lessons-management.component';


const routes: Routes = [
  {
    path: '',
    // loadChildren: './home/home.module#HomeModule',
    component: HomeComponent,
    // canLoad: [AuthGuard]
  }, {
    path: 'login',
    component: LoginComponent,
    // loadChildren: './auth/auth.module#AuthModule',
    canLoad: [AuthGuard]
  }, {
    path: 'signup',
    component: SignupComponent
  }, {
    path: 'profile',
    component: ProfileComponent
  }, {
    path: 'courses',
    component: CoursesComponent,
    canLoad: [AuthGuard]
  }, {
    path: 'mycourse',
    component: MycourseComponent
  }, {
    path: 'course/:courseId',
    component: TopicComponent
  }, {
    path: 'activity',
    component: ActivitiesComponent
  }, {
    path: 'admin',
    component: MenuComponent
  }, {
    path: 'admin/activity-schedule',
    component: ActivityScheduleComponent
  }, {
    path: 'admin/user-management',
    component: UserManagementComponent
  }, {
    path: 'admin/courses-management',
    component: CoursesManagementComponent
  }, {
    path: 'admin/journals-management',
    component: JournalsManagementComponent
  }, {
    path: 'admin/webboards-management',
    component: WebboardsManagementComponent
  }, {
    path: 'admin/research',
    component: ResearchComponent
  }, {
    path: 'admin/system-report',
    component: SystemReportComponent
  }, {
    path: 'admin/tracking',
    component: TrackingComponent
  }, {
    path: 'journal',
    component: JournalComponent
  }, {
    path: 'journals',
    component: JournalsComponent
  }, {
    path: 'news',
    component: NewsComponent
  }, {
    path: 'webboards',
    component: WebboardsComponent
  }, {
    path: 'cart',
    component: CartComponent
  }, {
    path: 'webboards/webboard',
    component: WebboardComponent
  }, {
    path: 'admin/courses-management/lessons-management',
    component: LessonsManagementComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
