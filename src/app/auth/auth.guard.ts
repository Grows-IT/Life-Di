import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    // return true;
    return this.authService.isLoggedIn().pipe(
      tap(isLoggedIn => {
        if (!isLoggedIn) {
          // console.log(isLoggedIn);
          // route.redirectTo('/login')
          this.router.navigate(['/login']);
          return false;
        }
      })
    );
  }
}
