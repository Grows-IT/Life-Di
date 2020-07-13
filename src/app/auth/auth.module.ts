import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
// import { AuthRoutingModule } from './auth-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [{
  path: '',
  redirectTo: 'login',
  pathMatch: 'full'
}, {
  path: 'login',
  loadChildren: './login/login.module#LoginModule',
  canLoad: [AuthGuard]
  // }, {
  //   path: 'profile',
  //   loadChildren: './profile/profile.module#ProfilePageModule',
}];

@NgModule({
  imports: [
    CommonModule,
    // AuthRoutingModule,
    RouterModule.forChild(routes)
  ]
})
export class AuthModule { }
