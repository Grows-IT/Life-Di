import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-lifedi-navbar',
  templateUrl: './lifedi-navbar.component.html',
  styleUrls: ['./lifedi-navbar.component.scss']
})
export class LifediNavbarComponent implements OnInit {
  user: SocialUser;
  path: string;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getUser().subscribe(user => {
      // console.log(user);
      if (user) {
        this.user = JSON.parse(user);
      }
    });
    this.path = window.location.pathname;
  }

  signout() {
    this.authService.signOut();
  }
}
