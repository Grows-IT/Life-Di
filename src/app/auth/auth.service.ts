import { Injectable } from '@angular/core';
import { BehaviorSubject, of, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SocialUser, SocialAuthService, FacebookLoginProvider, GoogleLoginProvider } from 'angularx-social-login';
import { timeout, map, switchMap, first, withLatestFrom, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _user = new BehaviorSubject<string>(null);
  private _token = new BehaviorSubject<string>(null);
  SocialUser: SocialUser;
  loggedIn: boolean;
  constructor(
    private http: HttpClient,
    private authService: SocialAuthService,
    private router: Router
  ) { }

  get user() {
    return this._user.asObservable();
  }

  get token() {
    return this._token.asObservable();
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.authService.authState.pipe(
      map((user) => {
        if (user) {
          // console.log(user);
          this._user.next(JSON.stringify(user));
          this._token.next(user.idToken);
          this.saveTokenToStorage(user.authToken);
          this.saveUserToStorage(JSON.stringify(user));
        }
      })
    );
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    this.authService.authState.pipe(
      map((user) => {
        if (user) {
          console.log(user);
          this._user.next(JSON.stringify(user));
          this._token.next(user.authToken);
          this.saveTokenToStorage(user.authToken);
          this.saveUserToStorage(JSON.stringify(user));
          this.router.navigate(['/']);
        }
      })
    ).subscribe();
  }

  getUser() {
    // const _u = this.getUserFromStorage();
    // const user = JSON.parse(_u);
    // return user;
    // return this.getUserFromStorage();
    // return this.user;
    return this.getUserFromStorage().pipe(
      map((user) => {
        if (user) {
          return user;
        }
        return;
      })
    );
  }

  signOut(): void {
    this.authService.signOut()
      .then(() => {
        this._user.next(null);
        this._token.next(null);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.location.href = '';
        // window.location.reload();
      })
      .catch(() => {
        this._user.next(null);
        this._token.next(null);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.location.href = '';
        // window.location.reload();
      });
  }

  isLoggedIn() {
    return this.token.pipe(
      first(),
      switchMap(token => {
        if (!token) {
          return this.getTokenFromStorage().pipe(
            catchError(() => of(null)),
            map(storedtoken => !!storedtoken)
          );
        }
        return of(!!token);
      })
    );
  }

  private saveTokenToStorage(token: string) {
    localStorage.setItem('token', token);
  }

  getTokenFromStorage() {
    // this._token.next(localStorage.getItem('token'));
    return from(localStorage.getItem('token'));
  }

  private saveUserToStorage(user: string) {
    localStorage.setItem('user', user);
  }

  getUserFromStorage() {
    this._user.next(localStorage.getItem('user'));
    return of(localStorage.getItem('user'));
    // return localStorage.getItem('user');
  }
}
