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
  }
  , {
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

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
