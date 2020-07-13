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

  constructor(private authSerivce: AuthService) { }

  ngOnInit() {
    this.authSerivce.getUser().subscribe((user) => {
      this.user = user;
      console.log(user);

    });
  }

  signInWithGoogle() {
    return this.authSerivce.signInWithGoogle();
  }

  signInWithFB() {
    return this.authSerivce.signInWithFB();
  }

  signOut() {
    return this.authSerivce.signOut();
  }
}
