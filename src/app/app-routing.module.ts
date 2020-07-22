import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './auth/signup/signup.component';


const routes: Routes = [
  {
    path: '',
    // loadChildren: './home/home.module#HomeModule',
    component: HomeComponent,
    canLoad: [AuthGuard]
  }, {
    path: 'signin',
    component: LoginComponent,
    // loadChildren: './auth/auth.module#AuthModule',
    // canLoad: [AuthGuard]
  }, {
    path: 'signup',
    component: SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }