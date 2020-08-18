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
import { JournalComponent } from './journal/journal.component';
import { JournalsComponent } from './journals/journals.component';
import { NewsComponent } from './news/news.component';
import { CoursesManagementComponent } from './admin/courses-management/courses-management.component';
import { JournalsManagementComponent } from './admin/journals-management/journals-management.component';
import { ForumsManagementComponent } from './admin/forums-management/forums-management.component';


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
    path: 'admin/forums-management',
    component: ForumsManagementComponent
  }, {
    path: 'journal',
    component: JournalComponent
  }, {
    path: 'journals',
    component: JournalsComponent
  }, {
    path: 'news',
    component: NewsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
