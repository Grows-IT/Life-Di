import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
// import { AuthRoutingModule } from './auth-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'login',
  pathMatch: 'full'
}, {
  path: 'login',
  loadChildren: './login/login.module',
  canLoad: [AuthGuard]
  // }, {
  //   path: 'profile',
  //   loadChildren: './profile/profile.module#ProfilePageModule',
}, {
  path: 'signup',
  loadChildren: './signup/signup.module#SignupModule',
}
];

@NgModule({
  imports: [
    CommonModule,
    // AuthRoutingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProfileComponent]
})
export class AuthModule { }
