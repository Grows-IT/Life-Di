import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  // {
  //   path: 'auth',
  //   loadChildren: './auth/auth.module#AuthRoutingModule'
  // },
  {
    path: 'home',
    // loadChildren: './home/home.module#HomeModule',
    component: HomeComponent,
    canLoad: [AuthGuard]
  },
  {
    path: '',
    component: LoginComponent,
    // loadChildren: './auth/auth.module#AuthModule',
    // loadChildren: './auth/auth.module#AuthRoutingModule',
    canLoad: [AuthGuard]
  },

  // { path: 'second-component', component: SecondComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
