import { Component, OnInit } from '@angular/core';
import { SocialUser } from 'angularx-social-login';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user;
  loggedIn: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    // this.authService.getUser().subscribe((user) => {
    //   this.user = user;
    //   this.loggedIn = (user != null);
    // });
  }

  signInWithGoogle() {
    const userAgent = window.navigator.userAgent;
    const date = new Date().getTime();
    console.log(userAgent + ' ' + date);

    return this.authService.signInWithGoogle();
  }

  signInWithFB() {
    const userAgent = window.navigator.userAgent;
    const date = new Date().getTime();
    console.log(userAgent + ' ' + date);

    return this.authService.signInWithFB();
  }

  signOut() {
    const date = new Date().getTime();
    console.log(date);

    return this.authService.signOut();
  }
}
