import { Injectable } from '@angular/core';
import { BehaviorSubject, of, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SocialUser, SocialAuthService, FacebookLoginProvider, GoogleLoginProvider } from 'angularx-social-login';
import { timeout, map, switchMap, first, withLatestFrom, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _user = new BehaviorSubject<SocialUser>(null);
  private _token = new BehaviorSubject<string>(null);
  SocialUser: SocialUser;

  constructor(
    private http: HttpClient,
    private authService: SocialAuthService
  ) { }

  get user() {
    return this._user.asObservable();
  }

  get token() {
    return this._token.asObservable();
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.getUser().subscribe((user) => {
      if (user) {
        // console.log(user);
        this._user.next(user);
        this._token.next(user.idToken);
        this.saveTokenToStorage(user.idToken);
      }
    });
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    this.getUser().subscribe((user) => {
      if (user) {
        console.log(user);
        this._user.next(user);
        this._token.next(user.idToken);
        this.saveTokenToStorage(user.idToken);
      }
    });
  }

  getUser() {
    return this.authService.authState.pipe((user) => {
      if (user) {
        return user;
      }
      return;
    });
  }

  signOut(): void {
    this.authService.signOut().then(() => {
      this._user.next(null);
      this._token.next(null);
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
    this._token.next(localStorage.getItem('token'));
    return from(localStorage.getItem('token'));
  }

}
